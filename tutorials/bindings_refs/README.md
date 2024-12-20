[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/bindings_refs?file=src/style.css,src/main.jsx)

## Lesson

You can always get a reference to a DOM element in Solid through assignment, since JSX creates actual DOM elements. For example:

```jsx
const myDiv = <div>My Element</div>;
```

However, there is benefit to not breaking your elements out and instead putting them in a single contiguous JSX template, as it allows Solid to better optimize their creation.

Instead you can get a reference to an element in Solid using the `ref` attribute. Refs are basically assignments like the example above, which happen at creation time before they are attached to the document DOM. Just declare a variable, pass it in as a `ref` attribute, and the variable will be assigned to:

```jsx
let myDiv;

<div ref={myDiv}>My Element</div>
```

So let's get a reference to our canvas element and animate it:

```jsx
<canvas ref={canvas} width="256" height="256" />
```

Refs can also take the form of a callback function. This can be convenient for encapsulating logic, especially when you don't need to wait until the elements are attached. For example:

```jsx
<div ref={el => /* do something with el... */}>My Element</div>
```


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
