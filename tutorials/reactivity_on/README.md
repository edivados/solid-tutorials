[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/reactivity_on?file=src/main.jsx)

## Lesson

For convenience, Solid has an `on` helper that enables setting explicit dependencies for our computations. This is mostly used as a terse way to be even more explicit about which Signals are tracked (and not track any other Signals, even if they are read). In addition, `on` provides a `defer` option that allows the computation not to execute immediately and only run on first change.

Let's have our Effect run only when `a` updates, and defer execution until the value changes:

```js
createEffect(on(a, (a) => {
  console.log(a, b());
}, { defer: true }));
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

Learn more about deploying your application with the [documentations](https://vitejs.dev/guide/static-deploy.html)
