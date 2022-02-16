//////////////**************************************************************************** *////////////////
/////////////////// Using pattern-matching-ts  library ////////////////////////////
//////////////**************************************************************************** *////////////////
import * as M from 'pattern-matching-ts/lib/match'


interface Color<T = number> {
    readonly _tag: 'Color'
    readonly value: {
        readonly r: T
        readonly g: T
        readonly b: T
    }
}
interface Rectangle<T = number> {
    readonly _tag: 'Rectangle'
    readonly value: {
        readonly x: T
        readonly y: T
    }
}
interface Message {
    readonly _tag: 'Message'
    readonly value: {
        readonly text: string
    }
}

type Options = Color<number> | Rectangle<number> | Message
const matchMessage = M.match<Options, string>({
    Color: ({ value: { r, g, b } }) => `Choice of color is Red: ${r} | Green: ${g} | Blue: ${b}`,
    Rectangle: ({ value: { x, y } }) => {
        const z: number = x * y
        return `Area of rectangle is ${z}`
    },
    Message: ({ value: { text } }) => `Message is: ${text}`,
    _: () => 'Default message'
})





