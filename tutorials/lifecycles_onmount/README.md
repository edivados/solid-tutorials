[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/lifecycles_onmount?file=src/styles.css,src/main.jsx)

## Lesson

There are only a few Lifecycle functions in Solid as everything lives and dies by the reactive system. The reactive system is created and updates synchronously, so the only scheduling comes down to Effects which are pushed to the end of the update.

We've found that developers doing basic tasks don't often think this way, so to make things a
little easier we've made an alias, `onMount`. `onMount` is just a `createEffect` call that is
non-tracking, which means it never re-runs. It is just an Effect call but you can use it with confidence
that it will run only once for your component, once all initial rendering is done.

Let's use the `onMount` hook to fetch some photos:
```js
onMount(async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
  setPhotos(await res.json());
});
```

Lifecycles are only run in the browser, so putting code in `onMount` has the benefit of not running on the server during SSR. Even though we are doing data fetching in this example, usually we use Solid's resources for true server/browser coordination.


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
