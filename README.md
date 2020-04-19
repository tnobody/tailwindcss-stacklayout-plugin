# Tailwindcss _Stack_ Plugin

Plugin for stacked layouts with Tailwindcss.

Read more about Stack-Layout patterns and the problems they solve on [every-layout.dev](https://every-layout.dev/layouts/stack/)

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


