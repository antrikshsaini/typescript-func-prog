type NotStarted = {
    __tag: "notStarted"
}

type Finished<T> = {
    __tag: "finished", val: T
}

type Progress = {
    __tag: "progress",
}






type ProgressOption<T> = NotStarted | Finished<T> | Progress<{ val: number }>;