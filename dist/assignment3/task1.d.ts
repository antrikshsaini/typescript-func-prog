declare type NotStarted = {
    __tag: "notStarted";
};
declare type Finished<T> = {
    __tag: "finished";
    val: T;
};
declare type Progress = {
    __tag: "progress";
};
declare type Fail<G> = {
    __tag: "fail";
    val: G;
};
declare type ProgressOption<T, G> = NotStarted | Finished<T> | Progress | Fail<G>;
declare let finishCount: number;
declare let failCount: number;
declare const notStarted: <T, G>() => ProgressOption<T, G>;
declare const progress: <T, G>() => ProgressOption<T, G>;
declare const finished: <T, G>(result: T) => ProgressOption<T, G>;
declare const fail: <T, G>(error: G) => ProgressOption<T, G>;
declare class notStarted2 {
    readonly __tag = "notStarted";
}
declare class progress2 {
    readonly __tag = "progress";
}
declare class finished2<T> {
    readonly __tag = "finished";
    val: T;
    constructor(val: T);
}
declare class fail2<G> {
    readonly __tag = "fail";
    val: G;
    constructor(val: G);
}
declare const isNotStarted: <T, G>(option: ProgressOption<T, G>) => option is NotStarted;
declare const isProgress: <T, G>(option: ProgressOption<T, G>) => option is Progress;
declare const isFinished: <T, G>(option: ProgressOption<T, G>) => option is Finished<T>;
declare const isFail: <T, G>(option: ProgressOption<T, G>) => option is Fail<G>;
declare const fold: <T, G>(option: ProgressOption<T, G>, d: () => T | G) => T | G;
declare const match: <T2, T, G>(option: ProgressOption<T, G>, finish: (t: T) => T2, fail: (g: G) => T2, notStart: () => T2, progress: () => T2) => T2;
declare const partialMatcher: <T2, T, G>(option: ProgressOption<T, G>, d: () => T2, finish?: ((t: T) => T2) | undefined, fail?: ((g: G) => T2) | undefined, notStart?: (() => T2) | undefined, progress?: (() => T2) | undefined) => T2;
//# sourceMappingURL=task1.d.ts.map