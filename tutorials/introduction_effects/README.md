[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/introduction_effects?file=src/main.jsx)

## Lesson

Signals are trackable values, but they are only one half of the equation. To complement those are observers that can be updated by those trackable values. An _effect_ is one such observer; it  runs a side effect that depends on signals.

An effect can be created by importing `createEffect` from `solid-js` and providing it a function. The effect automatically subscribes to any signal that is read during the function's execution and reruns when any of them change.

So let's create an Effect that reruns whenever `count` changes:

```jsx
createEffect(() => {
  console.log("The count is now", count());
});
```

To update our `count` Signal, we'll attach a click handler on our button:

```jsx
<button onClick={() => setCount(count() + 1)}>Click Me</button>
```

Now clicking the button writes to the console. This is a relatively simple example, but to understand how Solid works, you should imagine that every expression in JSX is its own effect that re-executes whenever its dependent signals change. This is how all rendering works in Solid: from Solid's perspective, *all rendering is just a side effect of the reactive system*.

> Effects that developers create with `createEffect` run after rendering has completed and are mostly used for scheduling updates that interact with the DOM. If you want to modify the DOM earlier, use [`createRenderEffect`](https://www.solidjs.com/docs/latest/api#createrendereffect).

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
