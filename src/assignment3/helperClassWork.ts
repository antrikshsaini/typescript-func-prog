type Some<T> = { __tag: "some", val: T };
type None = { __tag: "none" };
type Option<T> =
    | Some<T>
    | None

const none = <T>(): Option<T> => { return { __tag: "none" }; };
const some = <T>(v: T): Option<T> => { return { __tag: "some", val: v }; }
const isNone = <T>(o: Option<T>): o is None => o.__tag == "none";
const isSome = <T>(o: Option<T>): o is Some<T> => o.__tag == "some";

const fold = <T>(o: Option<T>, d: () => T): T =>
    isSome(o) ? o.val : d();

const match = <T, T2>(
    o: Option<T>,
    f: (t: T) => T2,
    d: () => T2
): T2 => isSome(o) ? f(o.val) : d();

const isEmpty = <T>(o: Option<T>) => isSome(o) ? false : true;
const contains = <T>(o: Option<T>, v: T) => isSome(o) ? o.val === v : false;
// find
// filter
// map
// splice
// concatenate

const x: Option<number> = some(1);

//kind of cunstructor
const bar = (o: Option<number>) => {
    const x: string = match(
        o,
        (v: number) => v.toString(),
        () => "none"
    );
}

const map = <T, T2>(o: Option<T>, f: (n: T) => T2): Option<T2> => {
    if (isSome(o)) return some(f(o.val))
    else return none()
}

const squareOption = (o: Option<number>): Option<number> => map(o, (n) => n * n)
const cubeOption = (o: Option<number>): Option<number> => map(o, (n) => n * n * n)

const square = (n: number | undefined): number | undefined => {
    if (n === undefined) return undefined;
    else return n * n;
}