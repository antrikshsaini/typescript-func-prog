// Task 1 (Function implementations)
// Given a function signature, implement and name the function
// npx tsc task.ts       //command to compile and generate .js file
// node task1.js          //command to run js file
//***************************************************** */
// f: A -> [A] -> [A]
//***************************************************** */
var arrayRemove = function (a, b) { return b.filter(function (i) { return a !== i; }); };
var arr1 = [1, 2, 3, 4, 5, 6];
// console.log(arrayRemove(3,arr1))   Output: [ 1, 2, 4, 5, 6 ]
// returns an array by removing element passed as an argument
//***************************************************** */
// f: Number -> Number -> [A] -> [A]
//***************************************************** */
var sliceFunction = function (a, b, c) { return c.slice(a, b); };
var arr2 = [2, 4, 6, 7, 8];
// console.log(sliceFunction(2,4,arr2))  Output: [ 6, 7 ]
// extract from start to end, takes a: start point, b: end point, index 0 initial value
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//***************************************************** */
// f: [String] -> (String -> any) -> (String: any)
//***************************************************** */
var pushStringLength = function (a, g) { return function (c) { return a.push(g(c)); }; };
var stringLength = function (a) { return a.length; };
var stringArray = ['ab', 'abc', 'abcd'];
pushStringLength(stringArray, stringLength)('abc');
// console.log(stringArray)  Output: [ 'ab', 'abc', 'abcd', 3 ]
// returns array with pushing length of the string
//***************************************************** */
// f: [String] -> {String: any} -> {String: any}
//***************************************************** */
var convertToJson = function (a, g) {
    var json = Object.assign(g, a);
    return json;
};
var stringArray2 = ['ab', 'abc', 'abcd'];
// console.log(convertToJson(stringArray2,{"name": 2}))   //Output: { '0': 'ab', '1': 'abc', '2': 'abcd', name: 2 }
// console.log(convertToJson(stringArray2,{}))   //Output: { '0': 'ab', '1': 'abc', '2': 'abcd' }
// it takes string array convert to json object, an object can also be added
var filterByKey = function (a, g) {
    var asArray = Object.entries(g);
    var filterdArr = asArray.filter(function (_a) {
        var key = _a[0], value = _a[1];
        return a.indexOf(key) > -1;
    });
    // console.log(filterdArr)
    var obj = {};
    filterdArr.forEach(function (v) {
        // Extract the key and the value
        var key = v[0];
        var value = v[1];
        // Add the key and value to
        // the object
        obj[key] = value;
    });
    // Return the object
    return obj;
};
console.log(filterByKey(["a", "b"], { "a": 1, "c": 3, "b": 2 }));
//***************************************************** */
// f: [A] → [B] → [[A,B]]
//***************************************************** */
var concat = function (a, b) {
    var c = a;
    b.map(function (i) { return c.push(i); });
    return c;
};
var zip = function (a, b) {
    return a.map(function (val, i) { return [val, b[i]]; });
};
// console.log(zip([1, 3], ["a", "b"])) // [ [ 1, 'a' ], [ 3, 'b' ] ]
// console.log(concat(['a', 'b'], [1, 2])); //  Output: [ 'a', 'b', 1, 2 ]
// returns new array with combining first array to second array
