[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/props_split?file=src/greeting.jsx,src/main.jsx)

## Lesson

Merging props isn't the only props operation we might want to do.

Often, we want to split props into groups, so that we can use some of them on 
the current component but split off others to pass through to child components.

For this purpose, Solid has [`splitProps`](/docs/latest/api#splitprops). It 
takes the props object 
and 
one or more arrays of keys that we want to extract into their own props objects. It returns an array of props objects, one per array of specified keys, plus one props object with any remaining keys. All returned objects preserve reactivity.

Our example doesn't update when we set the name because of lost reactivity when we destructure in `greeting.tsx`:
```jsx
export default function Greeting(props) {
  const { greeting, name, ...others } = props;
  return <h3 {...others}>{greeting} {name}</h3>
}
```

Instead, we can maintain reactivity with `splitProps`:
```jsx
export default function Greeting(props) {
  const [local, others] = splitProps(props, ["greeting", "name"]);
  return <h3 {...others}>{local.greeting} {local.name}</h3>
}
```
Now the button works as expected.

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
