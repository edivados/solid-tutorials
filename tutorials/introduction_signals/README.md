[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/introduction_signals?file=src/main.jsx)

## Lesson

_Signals_ are the cornerstone of reactivity in Solid. They contain values that change over time; when you change a signal's value, it automatically updates anything that uses it.

To create a signal, let's import `createSignal` from `solid-js` and call it from our Counter component like this:
```jsx
const [count, setCount] = createSignal(0);
```

The argument passed to the create call is the initial value, and the return value is an array with two functions, a getter and a setter. By [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), we can name these functions whatever we like. In this case, we name the getter `count` and the setter `setCount`.

It is important to notice that the first returned value is a getter (a function returning the current value) and not the value itself. This is because the framework needs to keep track of where that signal is read so it can update things accordingly.

In this lesson, we'll use JavaScript's `setInterval` function to create a periodically incrementing counter. We can update our `count` signal every second by adding this code to our Counter component:

```jsx
setInterval(() => setCount(count() + 1), 1000);
```

Each tick, we read the previous count, add 1, and set the new value.

> Solid's signals also accept a function form where you can use the previous value to set the next value.
> ```jsx
> setCount(c => c + 1);
> ```

Finally, we need to read the signal in our JSX code:

```jsx
return <div>Count: {count()}</div>;
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
