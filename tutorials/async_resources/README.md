[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/async_resources?file=src/main.jsx)

## Lesson

Resources are special Signals designed specifically to handle Async loading. Their purpose is to wrap async values in a way that makes them easy to interact with in Solid's distributed execution model. This is the opposite to `async`/`await` or generators which provide sequential execution models. The goal is for async to not block execution and not color our code.

Resources can be driven by a source signal that provides the query to an async data fetcher function that returns a promise. The contents of the fetcher function can be anything. You can hit typical REST endpoints or GraphQL or anything that generates a promise. Resources are not opinionated on the means of loading the data, only that they are driven by promises.

The resulting Resource Signal also contains reactive `loading` and `error` properties that make it easy to control our view based on the current status.

So let's replace our user signal with a resource:
```js
const [user] = createResource(userId, fetchUser);
```
It is driven by the `userId` Signal and calls our fetch method on change. Not much else to it.

The second value that comes back from `createResource` contains a `mutate` method for directly updating the internal Signal and a `refetch` method to reload the current query even if the source hasn't changed.

```js
const [user, { mutate, refetch }] = createResource(userId, fetchUser);
```

`lazy` uses `createResource` internally to manage its dynamic imports.


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
