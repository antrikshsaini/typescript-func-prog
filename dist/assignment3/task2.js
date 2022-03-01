import * as M from 'pattern-matching-ts/lib/match';
const matchMessage = M.match({
    Color: ({ value: { r, g, b } }) => `Choice of color is Red: ${r} | Green: ${g} | Blue: ${b}`,
    Rectangle: ({ value: { x, y } }) => {
        const z = x * y;
        return `Area of rectangle is ${z}`;
    },
    Message: ({ value: { text } }) => `Message is: ${text}`,
    _: () => 'Default message'
});
//# sourceMappingURL=task2.js.map