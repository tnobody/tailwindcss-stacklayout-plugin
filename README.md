![Github Action CI](https://github.com/tnobody/tailwindcss-stacklayout-plugin/workflows/Node.js%20Build%20and%20Validate/badge.svg)

# Tailwindcss _Stack_ Plugin

Plugin for stacked layouts with [Tailwindcss](https://tailwindcss.com/).

Read more about Stack-Layout patterns and the problems they solve on [every-layout.dev](https://every-layout.dev/layouts/stack/)

**TL;DR** See the [examples](https://tnobody.github.io/tailwindcss-stacklayout-plugin/)

## Installation

First you have to add the plugin to your project:

```bash
yarn add tailwindcss-stacklayout-plugin -D
# or
npm i tailwindcss-stacklayout-plugin -D
```

In your `tailwind.config.js` file you have to add the actual plugin in the _plugins_ section:

```javascript
const stackPlugin =  require('tailwindcss-stack-plugin')

module.exports = {
  // ...
  plugins: [
    stackPlugin
  ],
}

```

That's it! Next time you generate your _CSS_ with Tailwind, the stack utilities will be added.

## Usage

To create a stack-layout you can apply either `stack` or `stack-horizontal` on your container element, this will basically force the container to be displayed as flex with direction `column` (.stack) respectivly `row` (.stack-horizontal)

## See Example

To run example locally run:

```bash
npm run prepages # Will generated css with tailwind styles
npx live-server examples/

# or

yarn prepages
npx live-server examples/

```

Live-Server will automatically open the example page in a browser. You can edit the example `examples/index.html` to play around with stacklayouts. To tell the stack about it's inner gap you have to apply an additional class `stack-*`

With the default tailwind settings the following classes are available:

| Class                         | Properties                |
|-------------------------------|---------------------------|
| `.stack`                      | `display: flex;`<br />`flex-direction: column` |
| `.stack.stack-0`              | `margin-top: 0;`          |
| `.stack.stack-1`              | `margin-top: 0.25rem;`    |
| `.stack.stack-2`              | `margin-top: 0.5rem;`     |
| `.stack.stack-3`              | `margin-top: 0.75rem;`    |
| `.stack.stack-4`              | `margin-top: 1rem;`       |
| `.stack.stack-5`              | `margin-top: 1.25rem;`    |
| `.stack.stack-6`              | `margin-top: 1.5rem;`     |
| `.stack.stack-8`              | `margin-top: 2rem;`       |
| `.stack.stack-10`             | `margin-top: 2.5rem;`     |
| `.stack.stack-12`             | `margin-top: 3rem;`       |
| `.stack.stack-16`             | `margin-top: 4rem;`       |
| `.stack.stack-20`             | `margin-top: 5rem;`       |
| `.stack.stack-24`             | `margin-top: 6rem;`       |
| `.stack.stack-32`             | `margin-top: 8rem;`       |
| `.stack.stack-40`             | `margin-top: 10rem;`      |
| `.stack.stack-48`             | `margin-top: 12rem;`      |
| `.stack.stack-56`             | `margin-top: 14rem;`      |
| `.stack.stack-64`             | `margin-top: 16rem;`      |
| `.stack-horizontal`           | `display: flex;`<br />`flex-direction: row` |
| `.stack-horizontal.stack-0`   | `margin-right: 0;`        |
| `.stack-horizontal.stack-1`   | `margin-right: 0.25rem;`  |
| `.stack-horizontal.stack-2`   | `margin-right: 0.5rem;`   |
| `.stack-horizontal.stack-3`   | `margin-right: 0.75rem;`  |
| `.stack-horizontal.stack-4`   | `margin-right: 1rem;`     |
| `.stack-horizontal.stack-5`   | `margin-right: 1.25rem;`  |
| `.stack-horizontal.stack-6`   | `margin-right: 1.5rem;`   |
| `.stack-horizontal.stack-8`   | `margin-right: 2rem;`     |
| `.stack-horizontal.stack-10`  | `margin-right: 2.5rem;`   |
| `.stack-horizontal.stack-12`  | `margin-right: 3rem;`     |
| `.stack-horizontal.stack-16`  | `margin-right: 4rem;`     |
| `.stack-horizontal.stack-20`  | `margin-right: 5rem;`     |
| `.stack-horizontal.stack-24`  | `margin-right: 6rem;`     |
| `.stack-horizontal.stack-32`  | `margin-right: 8rem;`     |
| `.stack-horizontal.stack-40`  | `margin-right: 10rem;`    |
| `.stack-horizontal.stack-48`  | `margin-right: 12rem;`    |
| `.stack-horizontal.stack-56`  | `margin-right: 14rem;`    |
| `.stack-horizontal.stack-64`  | `margin-right: 16rem;`    |

If you just want to see the example check out the [example page](https://tnobody.github.io/tailwindcss-stacklayout-plugin/)
