declare type Some<T> = {
    __tag: "some";
    val: T;
};
declare type None = {
    __tag: "none";
};
declare type Option<T> = Some<T> | None;
declare const none: <T>() => Option<T>;
declare const some: <T>(v: T) => Option<T>;
declare const isNone: <T>(o: Option<T>) => o is None;
declare const isSome: <T>(o: Option<T>) => o is Some<T>;
declare const fold1: <T>(o: Option<T>, d: () => T) => T;
declare const match2: <T, T2>(o: Option<T>, f: (t: T) => T2, d: () => T2) => T2;
declare const isEmpty: <T>(o: Option<T>) => boolean;
declare const contains: <T>(o: Option<T>, v: T) => boolean;
declare const x: Option<number>;
declare const bar: (o: Option<number>) => void;
declare const map: <T, T2>(o: Option<T>, f: (n: T) => T2) => Option<T2>;
declare const squareOption: (o: Option<number>) => Option<number>;
declare const cubeOption: (o: Option<number>) => Option<number>;
declare const square: (n: number | undefined) => number | undefined;
declare type Shape = {
    kind: "circle";
    radius: number;
} | {
    kind: "square";
    x: number;
} | {
    kind: "triangle";
    x: number;
    y: number;
};
declare function area(s: Shape): number;
declare function height(s: Shape): number;
//# sourceMappingURL=helperClassWork.d.ts.map