"use strict";
//////////////**************************************************************************** *////////////////
/////////////////// Using @practical-fp/union-types  library ////////////////////////////
//////////////**************************************************************************** *////////////////
exports.__esModule = true;
var union_types_1 = require("@practical-fp/union-types");
var union_types_2 = require("@practical-fp/union-types");
var _a = (0, union_types_2.impl)(), Ok = _a.Ok, Err = _a.Err;
var ok = Ok(24);
var err = Err("Something Wrong");
// 
// @type Guards are defined with ".is"  here "Ok.is" and "Err.is"
//
// console.log(Ok.is(ok))  // true
// console.log(Ok.is(err))  // false
// console.log(Ok.tag)  // "Ok"  
// console.log(Err.tag) // "Err"
// lets do something exciting using filter
var ok1 = Ok(26);
var ok2 = Ok(28);
var arr = [ok, ok1, err, ok2];
// need only numbers of Ok
var nums = arr.filter(Ok.is).map(function (n) { return n.value; });
// console.log(nums) // [ 24, 26, 28 ]
// Match function
var match = function (ok, err, d) { return function (result) {
    if (result.tag) {
        switch (result.tag) {
            case "Ok":
                return ok(result.value);
            case "Err":
                return err(result.value);
            default:
                d();
        }
    }
    throw new Error("Unreachable state reached!");
}; };
//
//  Implement matchExhaustive()  match all cases same like match above
//
var getStatus = function (result) {
    return (0, union_types_1.matchExhaustive)(result, {
        Ok: function (x) { return x * 2; },
        Err: function (y) { return y.length; }
    });
};
