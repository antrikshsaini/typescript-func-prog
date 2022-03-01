"use strict";
const none = () => { return { __tag: "none" }; };
const some = (v) => { return { __tag: "some", val: v }; };
const isNone = (o) => o.__tag == "none";
const isSome = (o) => o.__tag == "some";
const fold1 = (o, d) => isSome(o) ? o.val : d();
const match2 = (o, f, d) => isSome(o) ? f(o.val) : d();
const isEmpty = (o) => isSome(o) ? false : true;
const contains = (o, v) => isSome(o) ? o.val === v : false;
const x = some(1);
const bar = (o) => {
    const x = match2(o, (v) => v.toString(), () => "none");
};
console.log(bar(some(2)));
const map = (o, f) => {
    if (isSome(o))
        return some(f(o.val));
    else
        return none();
};
const squareOption = (o) => map(o, (n) => n * n);
const cubeOption = (o) => map(o, (n) => n * n * n);
const square = (n) => {
    if (n === undefined)
        return undefined;
    else
        return n * n;
};
function area(s) {
    if (s.kind === "circle") {
        return Math.PI * s.radius * s.radius;
    }
    else if (s.kind === "square") {
        return s.x * s.x;
    }
    else {
        return (s.x * s.y) / 2;
    }
}
function height(s) {
    if (s.kind === "circle") {
        return 2 * s.radius;
    }
    else {
        return s.x;
    }
}
//# sourceMappingURL=helperClassWork.js.map