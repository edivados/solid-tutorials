[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/flow_show?file=src/main.jsx)

## Lesson

JSX allows you to use JavaScript to control the logic flow in the templates. However, without a Virtual DOM, using things like `Array.prototype.map` would wastefully recreate all the DOM nodes on every update. Instead it is common for Reactive libraries to use template helpers. In Solid we wrap them in components.

The most basic control flow is the conditional. Solid's compiler is smart enough to optimally handle ternaries (`a ? b : c`) and boolean expressions (`a && b`). However, often it is more readable to use Solid's `<Show>` component.

In the example, we would like to show only the appropriate button that reflects the current state (whether the user is logged in). Update the JSX to:
```jsx
<Show
  when={loggedIn()}
  fallback={<button onClick={toggle}>Log in</button>}
>
  <button onClick={toggle}>Log out</button>
</Show>
```
The `fallback` prop acts as the `else` and will show when the condition passed to `when` is not truthy.

Now clicking the button will change back and forth like you would expect.


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
