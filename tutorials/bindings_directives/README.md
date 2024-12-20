[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/bindings_directives?file=src/style.css,src/click-outside.jsx,src/main.jsx)

## Lesson

Solid supports custom directives through the `use:` namespace. This is just a syntactic sugar over `ref`, but is useful in that it resembles typical bindings and there can be multiple bindings on the same element without conflict. This makes it a better tool for reusable DOM element behavior.

A custom directive is a function taking arguments `(element, valueAccessor)`, where `element` is the DOM element with the `use:` attribute, and `valueAccessor` is a getter function for the value assigned to the attribute. As long as the function is imported in scope, you can use it with `use:`.

> Important: `use:` is detected by the compiler to be transformed, and the function is required to be in scope, so it cannot be part of spreads or applied to a component.

In the example, we are going to make a wrapper for basic click-outside behavior to close a popup or modal. First we need to import and use our `clickOutside` directive on our element:

```jsx
<div class="modal" use:clickOutside={() => setShow(false)}>
  Some Modal
</div>
```

Open `click-outside.tsx`, where we will be defining our custom directive. This directive defines a click handler that we bind to the body and cleanup when it is time:

```jsx
export default function clickOutside(el, accessor) {
  const onClick = (e) => !el.contains(e.target) && accessor()?.();
  document.body.addEventListener("click", onClick);

  onCleanup(() => document.body.removeEventListener("click", onClick));
}
```

Now you should be able to go back and forth between opening and closing the modal.


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
