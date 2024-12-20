[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/props_defaults?file=src/greeting.jsx,src/main.jsx)

## Lesson

Props are what we call the object that is passed to our component function on execution that represents all the attributes bound to its JSX. Props objects are readonly and have reactive properties which are wrapped in Object getters. This allows them to have a consistent form regardless of whether the caller used signals, signal expressions, or static values. You access them by `props.propName`.

For this reason it is also very important to not just destructure props objects, as that would lose reactivity if not done within a tracking scope. In general accessing properties on the props object outside of Solid's primitives or JSX can lose reactivity. This applies not just to destructuring, but also to spreads and functions like `Object.assign`.

Solid has a few utilities to help us when working with props. The first is `mergeProps`, which merges potentially reactive objects together (like a nondestructive `Object.assign`) without losing reactivity. The most common case is when setting default props for our components.

In the example, in `greetings.tsx`, we inlined the defaults in the template, but we could also use `mergeProps` to keep reactive updates even when setting defaults:

```jsx
const merged = mergeProps({ greeting: "Hi", name: "John" }, props);

return <h3>{merged.greeting} {merged.name}</h3>
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
