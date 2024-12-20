[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/bindings_events?file=src/style.css,src/main.jsx)

## Lesson

Events in Solid are attributes prefixed with `on`. They are treated specially in a few ways. First, they do not follow the normal heuristics for wrapping. In many cases, it is difficult to determine the difference between a Signal and an event handler. And so, since events are called and don't require reactivity to update, they are only bound initially. You can always just have your handler run different code based on the current state of your app.

Common UI events (that bubble and are composed) are automatically delegated to the document. To improve delegated performance, Solid supports an array syntax to call the handler with data (as the first argument) without creating additional closures:

```jsx
const handler = (data, event) => /*...*/

<button onClick={[handler, data]}>Click Me</button>
```

In the example, let's attach the handler to the `mousemove` event:
```jsx
<div onMouseMove={handleMouseMove}>
  The mouse position is {pos().x} x {pos().y}
</div>
```

All `on` bindings are case insensitive which means that event names need to be in lowercase. For example, `onMouseMove` monitors the event name `mousemove`. If you need to support other casings or not use event delegation, you can use `on:` namespace to match event handlers that follows the colon:

```jsx
<button on:DOMContentLoaded={() => /* Do something */} >Click Me</button>
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
