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

Live-Server will automatically open the example page in a browser. You can edit the example `examples/index.html` to play around with stacklayouts

If you just want to see the example check out the [example page](https://tnobody.github.io/tailwindcss-stacklayout-plugin/)
