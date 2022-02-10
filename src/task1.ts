// Task 1 (Function implementations)
// Given a function signature, implement and name the function
// npx tsc task.ts       //command to compile and generate .js file
// node task1.js          //command to run js file

//***************************************************** */
// f: A -> [A] -> [A]
//***************************************************** */


const arrayRemove = <A>(
    a: A,
    b: Array<A>,
  ): Array<A> => b.filter((i) => a !== i);

  const arr1 = [1,2,3,4,5,6]


// console.log(arrayRemove(3,arr1))   Output: [ 1, 2, 4, 5, 6 ]
// returns an array by removing element passed as an argument


//***************************************************** */
// f: Number -> Number -> [A] -> [A]
//***************************************************** */


const sliceFunction = <A>(
  a: number,
  b: number,
  c: Array<A>,
): Array<A> => c.slice(a, b);
const arr2 = [2, 4, 6, 7, 8];

// console.log(sliceFunction(2,4,arr2))  Output: [ 6, 7 ]

// extract from start to end, takes a: start point, b: end point, index 0 initial value
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice


//***************************************************** */
// f: [String] -> (String -> any) -> (String: any)
//***************************************************** */


const pushStringLength = (
  a:string[],
  g:(b:string)=>any,
): (c:string)=> any => (c:string):any => a.push(g(c));

const stringLength = (a:string):any => a.length;
const stringArray = ['ab', 'abc', 'abcd'];

pushStringLength(stringArray, stringLength)('abc');

// console.log(stringArray)  Output: [ 'ab', 'abc', 'abcd', 3 ]

// returns array with pushing length of the string


//***************************************************** */
// f: [String] -> {String: any} -> {String: any}
//***************************************************** */


const convertToJson = (
  a:string[],
  g:{[key:string]:any},     // g:Record<string,any>
): {[key:string]:any} => {
    const json:{[key:string]:any}  = Object.assign(g,a);
    return json
}

const stringArray2 = ['ab', 'abc', 'abcd'];
// console.log(convertToJson(stringArray2,{"name": 2}))   //Output: { '0': 'ab', '1': 'abc', '2': 'abcd', name: 2 }
// console.log(convertToJson(stringArray2,{}))   //Output: { '0': 'ab', '1': 'abc', '2': 'abcd' }

// it takes string array convert to json object, an object can also be added


//***************************************************** */
// f: [A] → [B] → [[A,B]]
//***************************************************** */


const concat = <A, B>(
  a:Array<A>,
  b:Array<B>,
):Array<A | B> => {
  const c:Array<A | B> = a;
  b.map((i) => c.push(i));
  return c;
};

// console.log(concat(['a', 'b'], [1, 2]));  Output: [ 'a', 'b', 1, 2 ]
// returns new array with combining first array to second array