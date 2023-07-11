[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/reactivity_batch?file=src/main.jsx)

## Lesson

Solid's reactivity is synchronous which means, by the next line after any change, the DOM will have updated. And for the most part this is perfectly fine, as Solid's granular rendering is just a propagation of the update in the reactive system. Unrelated changes "rendering" twice don't actually mean wasted work.

What if the changes are related? Solid's `batch` helper allows to queue up multiple changes and then apply them all at the same time before notifying their observers.

In this example, we are assigning both names on a button click and this triggers our rendered update twice. You can see the logs in the console when you click the button. So let's wrap the `set` calls in a batch.

```js
 const updateNames = () => {
    console.log("Button Clicked");
    batch(() => {
      setFirstName(firstName() + "n");
      setLastName(lastName() + "!");
    })
  }
```
And that's it. Now we only notify once for the whole changeset.

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
