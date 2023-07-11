[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/stores_mutation?file=src/main.jsx)

## Lesson

Solid strongly recommends the use of shallow immutable patterns for updating state. By separating reads and writes we maintain better control over the reactivity of our system without the risk of losing track of changes to our proxy when passed through layers of components. This is much more amplified with Stores compared to Signals.

Sometimes, however, mutation is just easier to reason about. That's why Solid provides an Immer inspired `produce` store modifier that allows you to mutate a writable proxy version of your Store object inside your `setStore` calls.

This is a nice tool to have to allow small zones of mutation without relinquishing control. Let's use `produce` on our Todos example by replacing our event handler code with:

```jsx
const addTodo = (text) => {
  setTodos(
    produce((todos) => {
      todos.push({ id: ++todoId, text, completed: false });
    })
  );
};
const toggleTodo = (id) => {
  setTodos(
    (todo) => todo.id === id,
    produce((todo) => (todo.completed = !todo.completed))
  );
};
```

While `produce` with Stores probably handles the vast majority of cases, Solid also has a mutable Store object that is available from `createMutable`. While not the recommended approach for internal APIs, it is sometimes useful for interop or compatibility with 3rd party systems.


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
