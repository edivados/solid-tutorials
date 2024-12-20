[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/async_suspense_list?file=src/mock-api.jsx,src/profile.jsx,src/main.jsx)

## Lesson

Sometimes you have multiple `Suspense` Components that you want to coordinate. One possible approach is to put everything under a single `Suspense`, but that limits us to a single loading behavior. A single fallback state means that everything always needs to wait until the last thing is loaded. Instead, Solid introduces the `SuspenseList` Component to coordinate that.

Consider having multiple `Suspense` components like our example. If we wrap them with a `SuspenseList` configured with `revealOrder` of `forwards`, they will render in the order they appear in the tree regardless of the order they load. This reduces the page jumping around. You can set `revealOrder` to `backwards` or `together`, which, respectively, reverses the order or waits for all Suspense Components to load. In addition there is a `tail` option that can be set to `hidden` or `collapsed`. This overrides the default behavior of showing all fallbacks with either showing none or showing the next one in the direction set by `revealOrder`.

Our example currently is a bit of a mess in terms of loading placeholders. While it loads all the data independently we are often showing multiple placeholders depending on the order data loads in. Let's wrap our `ProfilePage` component's JSX in a `<SuspenseList>`:

```jsx
<SuspenseList revealOrder="forwards" tail="collapsed">
  <ProfileDetails user={props.user} />
  <Suspense fallback={<h2>Loading posts...</h2>}>
    <ProfileTimeline posts={props.posts} />
  </Suspense>
  <Suspense fallback={<h2>Loading fun facts...</h2>}>
    <ProfileTrivia trivia={props.trivia} />
  </Suspense>
</SuspenseList>
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
