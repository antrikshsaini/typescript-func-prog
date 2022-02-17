//////////////**************************************************************************** *////////////////
/////////////////// Using @practical-fp/union-types  library ////////////////////////////
//////////////**************************************************************************** *////////////////

import { matchExhaustive, Variant, WILDCARD } from "@practical-fp/union-types"
import { impl } from "@practical-fp/union-types"

// type Shape =
//     | { tag: "Circle", value: { radius: number } }
//     | { tag: "Square", value: { sideLength: number } }

// 
// Using Library it can be defined as below using Variant
//

type Shape =
    | Variant<"Circle", { radius: number }>
    | Variant<"Square", { sideLength: number }>

// 
// Example from Task 1 
//

//              type NotStarted = {
//                  __tag: "notStarted"
//              }

//              type Finished<T> = {
//                  __tag: "finished", val: T
//              }

//              type Progress = {
//                  __tag: "progress"
//              }

//              type Fail<G> = {
//                  __tag: "fail", val: G
//              }

//              type ProgressOption<T, G> =
//                  | NotStarted
//                  | Finished<T>
//                  | Progress
//                  | Fail<G>

// 
// Using Library it can be defined as below using Variant
//

type ProgressOption<T, G> =
    | Variant<"NotStarted">
    | Variant<"Progress">
    | Variant<"Finished", T>
    | Variant<"Fail", G>

// For implementation, make constructor function This Lib uses {impl}

type Result<T, E> =
    | Variant<"Ok", T>
    | Variant<"Err", E>

const { Ok, Err } = impl<Result<unknown, unknown>>()

const ok: Result<number, string> = Ok(24)
const err: Result<number, string> = Err("Something Wrong")

// 
// @type Guards are defined with ".is"  here "Ok.is" and "Err.is"
//

// console.log(Ok.is(ok))  // true
// console.log(Ok.is(err))  // false

// console.log(Ok.tag)  // "Ok"  
// console.log(Err.tag) // "Err"

// lets do something exciting using filter

const ok1: Result<number, string> = Ok(26)
const ok2: Result<number, string> = Ok(28)

const arr: Result<number, string>[] = [ok, ok1, err, ok2]

// need only numbers of Ok

const nums: number[] = arr.filter(Ok.is).map(n => n.value)

// console.log(nums) // [ 24, 26, 28 ]

// Match function

const match = <T, G, T2>(
    ok: (r: T) => T2,
    err: (e: G) => T2,
    d: () => T2
) => (result: Result<T, G>): T2 => {
    if (result.tag) {
        switch (result.tag) {
            case "Ok":
                return ok(result.value)
            case "Err":
                return err(result.value)
            default:
                d()
        }
    }
    throw new Error("Unreachable state reached!")
}

//
//  Implement matchExhaustive()  match all cases same like match above
//

const getStatus = (result: Result<number, string>) => {
    return matchExhaustive(result, {
        Ok: (x: number) => x * 2,
        Err: (y: string) => y.length
    })
}
