[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/async_transitions?file=src/styles.css,src/child.jsx,src/main.jsx)

## Lesson

`Suspense` allows us to show fallback content when data is loading. This is great for initial loading, but on subsequent navigation it is often worse UX to fallback to the skeleton state.

We can avoid going back to the fallback state by leveraging `useTransition`. It provides a wrapper and a pending indicator. The wrapper puts all downstream updates in a transaction that doesn't commit until all async events complete.

This means that when control flow is suspended, it continues to show the current branch while rendering the next off-screen. Resource reads under existing boundaries add it to the transition. However, any new nested `Suspense` components will show "fallback" if they have not completed loading before coming into view.

Notice when you navigate in the example, we keep seeing the content disappear back to a loading placeholder. Let's add a transition in our `App` component. First, let's replace the `updateTab` function:

```js
const [pending, start] = useTransition();
const updateTab = (index) => () => start(() => setTab(index));
```

`useTransition` returns a pending signal indicator and a method to start the transition, which we will wrap around our update.

We should use that pending signal to give an indicator in our UI. We can add a pending class to our tab container div:

```js
<div class="tab" classList={{ pending: pending() }}>
```

And with that our tab switching should be much smoother.


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
