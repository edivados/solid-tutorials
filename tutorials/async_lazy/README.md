[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/async_lazy?file=src/greeting.jsx,src/main.jsx)

## Lesson

Most bundlers (like Webpack, Rollup, Parcel, Vite) automatically handle code splitting when you use a dynamic import. Solid's `lazy` method allows us to wrap the component's dynamic import for deferred lazy loading. The output is a Component that can be used as normal in our JSX template with the exception that internally it dynamically loads the underlying imported code when it is rendered the first time, halting that branch of rendering until the code is available.

To use `lazy`, replace the import statement:
```js
import Greeting from "./greeting";
```
with:
```js
const Greeting = lazy(() => import("./greeting"));
```

This will likely still load too quickly to see. But you can add a fake delay if you wish to make the loading more visible.

```js
const Greeting = lazy(async () => {
  // simulate delay
  await new Promise(r => setTimeout(r, 1000))
  return import("./greeting")
});
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
