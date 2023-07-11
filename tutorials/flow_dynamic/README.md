[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/flow_dynamic?file=src/main.jsx)

## Lesson

The `<Dynamic>` tag is useful when you render from data. It lets you pass either a string for a native element or a component function and it will render that with the rest of the provided props.

This is often more compact than writing a number of `<Show>` or `<Switch>` components.

In the example, we can replace the `<Switch>` statement:

```jsx
<Switch fallback={<BlueThing />}>
  <Match when={selected() === 'red'}><RedThing /></Match>
  <Match when={selected() === 'green'}><GreenThing /></Match>
</Switch>
```

with:

```jsx
<Dynamic component={options[selected()]} />
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

Learn more about deploying your application with the [documentations](https://vitejs.dev/guide/static-deploy.html)
