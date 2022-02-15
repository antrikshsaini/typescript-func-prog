type NotStarted = {
    __tag: "notStarted"
}

type Finished<T> = {
    __tag: "finished", val: T
}

type Progress = {
    __tag: "progress"
}

type Fail<G> = {
    __tag: "fail", val: G
}

// Discriminated Union /////////////////////////////////////////////////

type ProgressOption<T, G> =
    | NotStarted
    | Finished<T>
    | Progress
    | Fail<G>

// access Methods  ////////////////////////////////////////////////////

const notStarted = <T, G>(): ProgressOption<T, G> => { return { __tag: "notStarted" } }

const progress = <T, G>(): ProgressOption<T, G> => { return { __tag: "progress" } }

let finishCount: number = 0
let failCount: number = 0

const finished = <T, G>(result: T): ProgressOption<T, G> => {
    function constructor() {
        finishCount = finishCount + 1
    }
    constructor()
    return { __tag: "finished", val: result }

}

const fail = <T, G>(error: G): ProgressOption<T, G> => {
    function constructor() {
        failCount = failCount + 1
    }
    constructor()
    return { __tag: "fail", val: error }

}


// typeGuards /////////////////////////////////////////////////////////

const isNotStarted = <T, G>(option: ProgressOption<T, G>): option is NotStarted => option.__tag == "notStarted"

const isProgress = <T, G>(option: ProgressOption<T, G>): option is Progress => option.__tag == "progress"

const isFinished = <T, G>(option: ProgressOption<T, G>): option is Finished<T> =>
    option.__tag == "finished"


const isFail = <T, G>(option: ProgressOption<T, G>): option is Fail<G> => option.__tag == "fail"

// Fold function   ///////////////////////////////////////////////////////

const fold = <T, G>(option: ProgressOption<T, G>, d: () => T | G): T | G => {
    if (isFinished(option)) {
        return option.val
    }
    else if (isFail(option)) {
        return option.val
    }
    else {
        return d()
    }
}

// console.log(fold(finished("done"), () => "none"))

// finished(2)
// finished("hello")
// console.log("Number of times progress finishes", finishCount)



