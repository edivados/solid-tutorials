import fsExtra from "fs-extra";
import { exec } from "node:child_process";
import { readFile, writeFile, rmdir, mkdir } from "node:fs/promises";
import path from "node:path";

const TEMPLATE_DIR = "template";
const TUTORIALS_DIR = "tutorials";
const TUTORIALS_URL =
  "https://raw.githubusercontent.com/solidjs/solid-docs-legacy/main/langs/en/tutorials";

function buildStackblitzMarkdown(tutorial) {
  const file = tutorial.solution.files
    .map((file) => `src/${file.nameWithExt}`)
    .reverse()
    .join(",");
  return `[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/${tutorial.internalName}?file=${file})`;
}

async function createTemplate(dir) {
  if (await fsExtra.exists(dir)) {
    await fsExtra.emptyDir(dir);
    await rmdir(dir);
  }

  await new Promise((res, rej) => {
    exec(`npm create vite@latest ${dir} -- --template solid`, (err) =>
      err ? rej(err) : res()
    );
  });

  await fsExtra.emptyDir(path.join(dir, "src"));

  const publicDir = path.join(dir, "public");
  await fsExtra.emptyDir(publicDir);
  await fsExtra.rmdir(publicDir);

  const indexHtmlPath = path.join(dir, "index.html");
  await readFile(indexHtmlPath).then((content) =>
    writeFile(
      indexHtmlPath,
      content
        .toString()
        .replace('id="root"', 'id="app"')
        .replace("index.jsx", "main.jsx")
    )
  );
}

async function fetchTutorials(url) {
  const tutorials = await fetch(`${url}/directory.json`).then((res) =>
    res.json()
  );

  return Promise.all(
    tutorials.map(async (tutorial) => {
      const [solution, lesson] = await Promise.all([
        fetch(`${url}/${tutorial.internalName}/solved.json`).then((res) =>
          res.json()
        ),
        fetch(`${url}/${tutorial.internalName}/lesson.md`).then((res) =>
          res.text()
        ),
      ]);
      tutorial.solution = solution;
      tutorial.solution.files = tutorial.solution.files.map((file) => {
        file.nameWithExt = `${file.name}.${file.type || "jsx"}`;
        return file;
      });
      tutorial.lesson = lesson;
      return tutorial;
    })
  );
}

async function createTutorial(tutorial, tutorialsDir, templateDir) {
  const dir = path.join(tutorialsDir, tutorial.internalName);
  await fsExtra.copy(templateDir, dir);
  return Promise.all([
    ...tutorial.solution.files.map((file) =>
      writeFile(path.join(dir, "src", file.nameWithExt), file.content)
    ),
    readFile(path.join(dir, "package.json")).then((content) => {
      const json = JSON.parse(content);
      json["name"] = tutorial.internalName;

      if (tutorial.internalName === "stores_immutable") {
        json["dependencies"]["redux"] = "^4.2.1";
      }

      return writeFile(
        path.join(dir, "package.json"),
        JSON.stringify(json, null, 2)
      );
    }),
    readFile(path.join(dir, "README.md")).then((content) =>
      writeFile(
        path.join(dir, "README.md"),
        `${buildStackblitzMarkdown(tutorial)}\n\n## Lesson\n\n${
          tutorial.lesson
        }\n\n${content}`
      )
    ),
  ]);
}

async function createTutorials(tutorials, tutorialsDir, templateDir) {
  if (!(await fsExtra.exists(tutorialsDir))) await mkdir(tutorialsDir);
  else await fsExtra.emptyDir(tutorialsDir);
  return Promise.all(
    tutorials.map((tutorial) =>
      createTutorial(tutorial, tutorialsDir, templateDir)
    )
  );
}

await createTemplate(TEMPLATE_DIR);
const tutorials = await fetchTutorials(TUTORIALS_URL);
await createTutorials(tutorials, TUTORIALS_DIR, TEMPLATE_DIR);

await readFile("README.md").then((content) =>
  writeFile(
    "README.md",
    tutorials.reduce(
      (content, tutorial) =>
        `${content}### ${tutorial.lessonName}\n${buildStackblitzMarkdown(
          tutorial
        )}\n`,
      ""
    )
  )
);
