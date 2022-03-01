"use strict";
const arrayRemove = (a, b) => b.filter((i) => a !== i);
const arr1 = [1, 2, 3, 4, 5, 6];
const sliceFunction = (a, b, c) => c.slice(a, b);
const arr2 = [2, 4, 6, 7, 8];
const pushStringLength = (a, g) => (c) => a.push(g(c));
const stringLength = (a) => a.length;
const stringArray = ['ab', 'abc', 'abcd'];
pushStringLength(stringArray, stringLength)('abc');
const convertToJson = (a, g) => {
    const json = Object.assign(g, a);
    return json;
};
const stringArray2 = ['ab', 'abc', 'abcd'];
const filterByKey = (a, g) => {
    const asArray = Object.entries(g);
    const filterdArr = asArray.filter(([key, value]) => a.indexOf(key) > -1);
    let obj = {};
    filterdArr.forEach((v) => {
        let key = v[0];
        let value = v[1];
        obj[key] = value;
    });
    return obj;
};
const concat = (a, b) => {
    const c = a;
    b.map((i) => c.push(i));
    return c;
};
const zip = (a, b) => {
    return a.map((val, i) => [val, b[i]]);
};
//# sourceMappingURL=task1.js.map