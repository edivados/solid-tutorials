[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/stores_context?file=src/counter.jsx,src/nested.jsx,src/main.jsx)

## Lesson

Solid provides a Context API to pass data around without relying on passing through props. This is useful for sharing Signals and Stores. Using Context has the benefit of being created as part of the reactive system and managed by it. Context is also useful when you have a need to "override" your state in a certain part of the component tree.

To get started we create a Context object. This object contains a `Provider` component used to inject our data. However, it is common practice to wrap the `Provider` components and `useContext` consumers with versions already configured for the specific Context.

And that's exactly what we have in this tutorial. You can see the definition for a simple counter store in the `counter.tsx` file.

To use context, first let's wrap our App component to provide it globally. We will use our wrapped `CounterProvider`. In this case let's give it an initial count of 1.

```jsx
render(() => (
  <CounterProvider count={1}>
    <App />
  </CounterProvider>
), document.getElementById("app"));
```

Next we need to consume the counter context in our `nested.tsx` component. We do this by using the wrapped `useCounter` consumer.

```jsx
const [count, { increment, decrement }] = useCounter();
return (
  <>
    <div>{count()}</div>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </>
);
```

> It should be noted that Context is a form of dependency injection, it _is not_ a reactive primitive.


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
