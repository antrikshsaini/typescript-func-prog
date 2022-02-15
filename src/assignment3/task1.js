// access Methods  ////////////////////////////////////////////////////
var notStarted = function () { return { __tag: "notStarted" }; };
var progress = function () { return { __tag: "progress" }; };
var finishCount = 0;
var failCount = 0;
var finished = function (result) {
    function constructor() {
        finishCount = finishCount + 1;
    }
    constructor();
    return { __tag: "finished", val: result };
};
var fail = function (error) {
    function constructor() {
        failCount = failCount + 1;
    }
    constructor();
    return { __tag: "fail", val: error };
};
// typeGuards /////////////////////////////////////////////////////////
var isNotStarted = function (option) { return option.__tag == "notStarted"; };
var isProgress = function (option) { return option.__tag == "progress"; };
var isFinished = function (option) {
    return option.__tag == "finished";
};
var isFail = function (option) { return option.__tag == "fail"; };
var fold = function (option, d) {
    if (isFinished(option)) {
        return option.val;
    }
    else if (isFail(option)) {
        return option.val;
    }
    else {
        return d();
    }
};
// console.log(fold(finished("done"), () => "none"))
// finished(2)
// finished("hello")
// console.log("Number of times progress finishes", finishCount)
