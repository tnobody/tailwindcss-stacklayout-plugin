// @ts-check

const TailWindStackPlugin = ({
    addUtilities,
    theme
}) => {
    const themeSpacing = theme('spacing') || {}
    const stacks = Object.keys(themeSpacing)
        .map(key => [key, themeSpacing[key]])
        .reduce((utilityStyles, [id, space]) => ({
            ...utilityStyles,
            [`.stack.stack-${id} > * + *`]: {
                'marginTop': `${space} !important`
            },
            [`.stack-horizontal.stack-${id} > * + *`]: {
                'marginLeft': `${space} !important`
            },
        }), {})

    addUtilities({
        '.stack': {
            display: 'flex',
            flexDirection: 'column'
        },
        '.stack-horizontal': {
            display: 'flex',
            flexDirection: 'row'
        },
        ...stacks
    }, ['responsive'])
}

module.exports = {
    TailWindStackPlugin
}
