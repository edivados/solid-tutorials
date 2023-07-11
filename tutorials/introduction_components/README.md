[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/introduction_components?file=src/nested.jsx,src/main.jsx)

## Lesson

As you build your applications, you will want to break apart your code for better modularity and reusability. In Solid, the main way of doing that is by creating components.

Components are just functions like the `HelloWorld()` one we've been using so far. What makes them special is that they typically return JSX and can be called by JSX in other components.

In this example, let's add our `Nested` component to our app. We've defined it in another file, though you can put multiple components in the same file. First we must import it:

```js
import Nested from "./nested";
```

Then we need to add the component to our JSX. Like before, we now have multiple elements we want to return, so we wrap them in a Fragment:

```jsx
function App() {
  return (
    <>
      <h1>This is a Header</h1>
      <Nested />
    </>
  );
}
```

When the parent component first renders, it will execute the `Nested()` function and won't call it ever again. All updates are applied by Solid’s reactivity system which we will cover in the next couple of lessons.


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
