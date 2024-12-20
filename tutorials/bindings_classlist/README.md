[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/bindings_classlist?file=src/style.css,src/main.jsx)

## Lesson

Solid uses `class` to set the `className` property on an element. However it is often convenient to conditionally set classes. For that reason, Solid has a built-in `classList` JSX attribute that takes an object where the key is the class name(s) and the value is a boolean expression. When true, the class is applied, and when false, it is removed.

In the example, we can replace:

```jsx
<button
  class={current() === 'foo' ? 'selected' : ''}
  onClick={() => setCurrent('foo')}
>foo</button>
```

with:

```jsx
<button
  classList={{selected: current() === 'foo'}}
  onClick={() => setCurrent('foo')}
>foo</button>
```

Remember that you can apply names dynamically like what you'd receive in CSS modules as well:

```jsx
import { active } from "./style.module.css"

<div classList={{ [active]: isActive() }} />
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
