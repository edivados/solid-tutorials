[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/introduction_memos?file=src/main.jsx)

## Lesson

Most of the time, composing derived signals is sufficient. However, it is sometimes beneficial to cache values in order to reduce duplicated work. We can use memos to evaluate a function and store the result until its dependencies change. This is great for caching calculations for effects that have other dependencies and mitigating the work required for expensive operations like DOM node creation.

Memos are both an observer, like an effect, and a read-only signal. Since they are aware of both their dependencies and their observers, they can ensure that they run only once for any change. This makes them preferable to registering effects that write to signals. Generally, what can be derived, should be derived.

Creating a Memo is as simple as passing a function to `createMemo`, imported from `solid-js`. In the example, recalculating the value gets increasingly more expensive with each click. If we wrap it in `createMemo`, it recalculates only once per click:

```jsx
const fib = createMemo(() => fibonacci(count()));
```
Place a `console.log` inside the `fib` function to confirm how often it runs:
```jsx
const fib = createMemo(() => {
  console.log("Calculating Fibonacci");
  return fibonacci(count());
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
