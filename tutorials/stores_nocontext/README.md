[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/stores_nocontext?file=src/counter.jsx,src/main.jsx)

## Lesson

Context is a great tool for stores. It handles injection, ties ownership to the reactive graph, automatically manages disposal, and has no render overhead given Solid's fine-grained rendering.

Sometimes context is overkill, though; an alternative is to use the reactive system directly. For example, we can build a global reactive data store by creating a signal in a global scope, and `export`ing it for other modules to use:

```js
import { createSignal } from 'solid-js';

export default createSignal(0);

// somewhere else:
import counter from './counter';
const [count, setCount] = counter;
```

Solid's reactivity is a universal concept. It doesn't matter if it is inside or outside components. There is no separate concept for global vs local state.  However, computations (Effects/Memos) created in the global scope are rootless, and will exist for the lifetime of the app/tab (rather than being disposed).

In this tutorial `counter.tsx` is such a global store. We can use it by modifying our component in `main.tsx` to:

```jsx
const { count, doubleCount, increment } = counter;

return (
  <button type="button" onClick={increment}>
    {count()} {doubleCount()}
  </button>
);
```

> While it is possible to use global state and computations, Context is sometimes a better solution. Additionally, it is important to note that global state should not be used in SSR (server side rendering) solutions, such as Solid Start. On the server, global state is shared across requests, and the lack of data isolation can (and will) lead to bugs, memory leaks and has security implications. It is recommended that application state should always be provided via context instead of relying on global.


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
