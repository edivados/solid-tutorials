[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/async_suspense?file=src/greeting.jsx,src/main.jsx)

## Lesson

While `lazy` and `createResource` can be used on their own, Solid also provides a mechanism for coordinating the display of multiple async events. `Suspense` serves as a boundary that can show a fallback placeholder instead of the partially loaded content as these async events resolve.

This can improve user experience by removing visual jank caused by too many intermediate and partial loading states. `Suspense` automatically detects any descendant async reads and acts accordingly. You can nest as many `Suspense` components as needed and only the nearest ancestor will transform to `fallback` when the `loading` state is detected.

Let's add a `Suspense` component to our lazy loading example:

```jsx
<>
  <h1>Welcome</h1>
  <Suspense fallback={<p>Loading...</p>}>
    <Greeting name="Jake" />
  </Suspense>
</>
```

Now we have a loading placeholder.

It's important to note that it's the read of an async derived value that triggers `Suspense`, not the async fetching itself. If a resource signal (including `lazy` components) is not read under the `Suspense` boundary, it will not suspend.

`Suspense` in many ways is just a `Show` component that renders both branches. While `Suspense` is vital for asynchronous Server rendering, do not feel the need to jump immediately to using it for client-rendered code. Solid's fine-grained rendering has no additional cost for splitting things manually.

```jsx
function Deferred(props) {
  const [resume, setResume] = createSignal(false);
  setTimeout(() => setResume(true), 1000);

  return <Show when={resume()}>{props.children}</Show>;
}
```

All work in Solid is queued independently already. No need for things like Time Slicing.


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
