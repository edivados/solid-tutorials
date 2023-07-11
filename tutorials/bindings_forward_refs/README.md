[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/bindings_forward_refs?file=src/style.css,src/canvas.jsx,src/main.jsx)

## Lesson

On many occassions, you might want to expose a ref from inside a component to a parent. The way we do this is still by using the `ref` attribute. From the outside, using `ref` on a component works very similar to using `ref` on a native element. You can pass it a variable to be assigned or a callback function.

However, it is the component author's responsibility to connect that `ref` to an internal element to forward it back up. To do so, we leverage `props.ref`. This is a callback form of `ref` if either type of `ref` is given, but this detail is mostly hidden from you as you will more than likely just be assigning it directly to the `ref` attribute of one of the elements or components in this component's JSX.

To get the logo animating again, we need to forward the ref from `canvas.jsx`:

```jsx
<canvas ref={props.ref} width="256" height="256" />
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
