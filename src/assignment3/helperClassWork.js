var none = function () { return { __tag: "none" }; };
var some = function (v) { return { __tag: "some", val: v }; };
var isNone = function (o) { return o.__tag == "none"; };
var isSome = function (o) { return o.__tag == "some"; };
var fold1 = function (o, d) {
    return isSome(o) ? o.val : d();
};
var match = function (o, f, d) { return isSome(o) ? f(o.val) : d(); };
var isEmpty = function (o) { return isSome(o) ? false : true; };
var contains = function (o, v) { return isSome(o) ? o.val === v : false; };
// find
// filter
// map
// splice
// concatenate
var x = some(1);
//kind of cunstructor
var bar = function (o) {
    var x = match(o, function (v) { return v.toString(); }, function () { return "none"; });
    return x;
};
console.log(bar(some(2)));
var map = function (o, f) {
    if (isSome(o))
        return some(f(o.val));
    else
        return none();
};
var squareOption = function (o) { return map(o, function (n) { return n * n; }); };
var cubeOption = function (o) { return map(o, function (n) { return n * n * n; }); };
var square = function (n) {
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
        // s.kind: "square" | "triangle"
        return s.x;
    }
}
