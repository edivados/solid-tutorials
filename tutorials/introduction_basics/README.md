[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/introduction_basics?file=src/main.jsx)

## Lesson

# Introduction

This interactive guide will walk you through Solid's main features. You can also refer to the API and guides to learn more about how Solid works.

You can also check out our new beginner tutorial (work-in-progress!) [here](https://docs.solidjs.com/guides/tutorials/getting-started-with-solid/welcome).

# What is Solid?

Solid is a JavaScript framework for making interactive web applications.
With Solid, you can use your existing HTML and JavaScript knowledge to build components that can be reused throughout your app.
Solid provides the tools to enhance your components with _reactivity_: declarative JavaScript code that links the user interface with the data that it uses and creates.

# Anatomy of a Solid App

A Solid App is composed of functions that we call components. Take a look at the `HelloWorld` function on the right: it directly returns a `div`! This mix of HTML and JavaScript is called JSX. Solid ships with a compiler that turns these tags into DOM nodes later on.

JSX allows you to use most HTML elements in our app, but it also lets you create new elements. Once we've declared our `HelloWorld` function, we can use it as a `<HelloWorld>` tag throughout our app.

The entry point for any Solid App is the `render` function. It takes 2 arguments, a function wrapping our application code and an existing element in the HTML to mount to:

```jsx
render(() => <HelloWorld />, document.getElementById("app"));
```

# Leveraging this Tutorial

Each lesson in the tutorial presents a Solid feature and a scenario to try it out. At any point you can click the solve button to see the solution or click reset to start over. The code editor itself has a console and an output tab where you can see the compiled output generated from your code. Look at it if you are curious to see how Solid generates code.

Have fun!


## Usage

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

Learn more about deploying your application with the [documentations](https://vite.dev/guide/static-deploy.html)
