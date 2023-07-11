[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/reactivity_untrack?file=src/main.jsx)

## Lesson

It's sometimes desirable to have Signal reads not be tracked, even inside a reactive context. Solid provides the `untrack` helper as a way to prevent the wrapping computation from tracking any reads.

Let's suppose we did not want to log in our example when `b` changes. We can untrack the `b` signal by changing our effect to the following:

```js
createEffect(() => {
  console.log(a(), untrack(b));
});
```
Since Signals are functions, they can be passed directly, but `untrack` can wrap functions with more complex behavior.

Even though `untrack` disables tracking of reads, it has no effect on writes which still happen and notify their observers.


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
