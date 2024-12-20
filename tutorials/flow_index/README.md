[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/flow_index?file=src/main.jsx)

## Lesson

You now know how to render lists in Solid with `<For>`, but Solid also provides the `<Index>` component, which will cause less rerenders in certain situations. 

When the array updates, the `<For>` component uses referential equality to compare elements to the last state of the array. But this isn't always desired. 

In JavaScript, primitives (like strings and numbers) are always compared by value. When using `<For>` with primitive values or arrays of arrays, we could cause a lot of unnecessary rendering. If we used `<For>` to map a list of strings to `<input>` fields that could edit each, every change to that value would cause the `<input>` to be recreated. 

The `<Index>` component is provided for these cases. As a rule of thumb, when working with primitives use `<Index>`. 

```jsx
<Index each={cats()}>{(cat, i) =>
  <li>
    <a target="_blank" href={`https://www.youtube.com/watch?v=${cat().id}`}>
      {i + 1}: {cat().name}
    </a>
  </li>
}</Index>
```

 It has a similar signature to `<For>`, except this time the item is the signal and the index is fixed. Each rendered node corresponds to a spot in the array. Whenever the data in that spot changes, the signal will update.

`<For>` cares about each piece of data in your array, and the position of that data can change; `<Index>` cares about each index in your array, and the content at each index can change.


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
