[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/lifecycles_oncleanup?file=src/main.jsx)

## Lesson

Some frameworks pair their cleanup methods as return values of their side effects or lifecycle methods. Since everything in a Solid render tree is living inside a (possibly inert) Effect and can be nested, we made `onCleanup` a first-class method. You can call it at any scope and it will run when that scope is triggered to re-evaluate and when it is finally disposed.

Use it in your components or in your Effects. Use it in your custom directives. Use it pretty much anywhere that is part of the synchronous execution of the reactive system.

The Signal example from the introduction never cleaned up after itself. Let's fix that by replacing the `setInterval` call with this:

```js
const timer = setInterval(() => setCount(count() + 1), 1000);
onCleanup(() => clearInterval(timer));
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
