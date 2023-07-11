[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/edivados/solid-tutorials/tree/main/tutorials/bindings_style?file=src/main.jsx)

## Lesson

The `style` attribute in Solid accepts either style strings or objects.
However the object form differs from `Element.prototype.style` and instead is a wrapper for calling `style.setProperty`. This means that keys take the dash-case form, like "background-color" rather than "backgroundColor", and that any units must be explicitly provided (e.g., `width: 500px` rather than `width: 500`). 


This also means that we have the ability to set CSS variables:

```js
<div style={{ "--my-custom-color": themeColor() }} />
```

Let's animate our div with a few inline styles:
```jsx
<div style={{
  color: `rgb(${num()}, 180, ${num()})`,
  "font-weight": 800,
  "font-size": `${num()}px`}}
>
  Some Text
</div>
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
