const {
    TailWindStackPlugin
} = require('./plugin')
describe('TailwindStackPlugin', () => {
    let themeMock
    let addUtilitiesMock
    beforeEach(() => {
        themeMock = jest.fn();
        addUtilitiesMock = jest.fn()

    })

    it('should retrieve spacing from theme', () => {
        TailWindStackPlugin({
            addUtilities: addUtilitiesMock,
            theme: themeMock
        })
        expect(themeMock).toHaveBeenCalledWith('spacing')
    })

    it('should create at least .stack and .stack-horizontal', () => {
        TailWindStackPlugin({
            addUtilities: addUtilitiesMock,
            theme: themeMock
        })
        expect(addUtilitiesMock).toHaveBeenCalledWith({
            '.stack': expect.objectContaining({}),
            '.stack-horizontal': expect.objectContaining({}),
        }, expect.arrayContaining(['responsive']))
    })

    it('should create stacks for theming-spaces', () => {
        themeMock.mockReturnValue({
            '4': '1rem',
            '8': '2rem'
        })
        TailWindStackPlugin({
            addUtilities: addUtilitiesMock,
            theme: themeMock
        })
        expect(addUtilitiesMock).toHaveBeenCalledWith(expect.objectContaining({
            '.stack.stack-4 > * + *': {
                'marginTop': "1rem !important"
            },
            '.stack-horizontal.stack-4 > * + *': {
                'marginLeft': "1rem !important"
            },
            '.stack.stack-8 > * + *': {
                'marginTop': "2rem !important"
            },
            '.stack-horizontal.stack-8 > * + *': {
                'marginLeft': "2rem !important"
            }
        }), expect.anything())
    })
})
