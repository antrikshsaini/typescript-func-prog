// /* eslint-disable no-unused-vars */
// /* eslint-disable no-console */
// /* eslint-disable max-len */
// // f: (A->B) -> List<A> -> List<B>

// // const map = <A, B>(
// //   f: (a: A) => B,
// //   l: Array<A>,
// // ): Array<B> => l.map(f);

// const arr = [1, 3, 4, 5];
// // console.log(arr.map((i) => `hello ${i}`));

// // f: A -> A
// const identity = <A>(
//   a: A,
// ): A => a;

// // console.log(identity("hello"))

// // f: (A -> B) -> A -> B

// const apply = <A, B>(
//   g: (a:A) => B,
//   a: A,
// ): B => g(a);

// //  console.log(Math.max.apply(null, arr))

// //* ************************************************************************************************* */

// // f: A -> [A] -> [A]

// // const arrayRemove = <A>(
// //   a: A,
// //   b: Array<A>,
// // ): Array<A> => b.filter((i) => a !== i);

// // console.log(arrayRemove(3,arr))

// // f: Number -> Number -> [A] -> [A]
// const splice = <A>(
//   a: number,
//   b: number,
//   c: Array<A>,
// ): Array<A> => c.splice(a, b);
// const arr2 = [2, 4, 6, 7, 8];
// // console.log(arr2.splice(2,2))

// // f: [String] -> {String: any} -> {String: any} ////////////////////////////////////////////////////////

// /// First way //////
// // const foo1 = (a:string[]) => (b:string): any => (c:string):any => {}

// /// Second Way using Interfaces /////
// // interface IFunction {
// //     a: string[],
// //     g:(b:string) => any
// // }
// // interface IReturnFunction {
// //     w:(c:string) => any
// // }
// // const foo2 = ({a,g}:IFunction): IReturnFunction => { return

// // }

// /// // third way ////////////////////////

// // const foo3 = (
// //     a:string[],
// //     g:(b:string)=>any
// // ): (c:string) => any => {return (c:string):any => g(c)}

// // console.log(foo3(["ab","abc","abcd"], stringLength("abc"))("abc"))

// /// /// fourth way ///////////////
// // f: [String] -> {String: any} -> {String: any}

// const stringLength = (a:string):any => a.length;
// // type funcTest = (b:string) => any
// const stringArray = ['ab', 'abc', 'abcd'];
// const pushStringLength = (
//   a:string[],
//   g:(b:string)=>any,
// ): (c:string
//   )=> any => (c:string):any => a.push(g(c));
// pushStringLength(stringArray, stringLength)('abc');
// // console.log(stringArray)
// // console.log(foo4(stringArray,stringLength)("abc"))
// // foo4(stringArray,stringLength("adasdas"))
// // console.log(stringArray)
// // console.log(foo4(stringArray,stringLength("adasdas")))

// // let stringArray = ["ab", "abc", "abcd"]
// // console.log(foo4(stringArray,stringLength("abc"))("abc"))
// // foo4(stringArray,stringLength("abcd")("abcd"))
// // console.log(stringArray)
// // console.log(foo4(["ab","abc","abcd"],stringLength("ds"))("sd"))
// // a.push(g(b))

// // f: [A] → [B] → [[A,B]]

// // const concat = <A, B>(
// //   a:Array<A>,
// //   b:Array<B>,
// // ):Array<A | B> => {
// //   // type arr = Array<A | B>
// //   const c:Array<A | B> = a;
// //   // let arr = b.map((i)=> )
// //   b.map((i) => c.push(i));
// //   return c;
// // };

// // console.log(concat(['a', 'b'], [1, 2]));
