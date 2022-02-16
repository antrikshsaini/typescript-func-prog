// access Methods  ////////////////////////////////////////////////////
var finishCount = 0;
var failCount = 0;
var notStarted = function () { return { __tag: "notStarted" }; };
var progress = function () { return { __tag: "progress" }; };
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
// class implementation ///////////////////////////////////////////////
var notStarted2 = /** @class */ (function () {
    function notStarted2() {
        this.__tag = "notStarted";
    }
    return notStarted2;
}());
var progress2 = /** @class */ (function () {
    function progress2() {
        this.__tag = "progress";
    }
    return progress2;
}());
var finished2 = /** @class */ (function () {
    function finished2(val) {
        this.__tag = "finished";
        this.val = val;
    }
    return finished2;
}());
var fail2 = /** @class */ (function () {
    function fail2(val) {
        this.__tag = "fail";
        this.val = val;
    }
    return fail2;
}());
// typeGuards /////////////////////////////////////////////////////////
var isNotStarted = function (option) { return option.__tag == "notStarted"; };
var isProgress = function (option) { return option.__tag == "progress"; };
var isFinished = function (option) {
    return option.__tag == "finished";
};
var isFail = function (option) { return option.__tag == "fail"; };
// Fold function   ///////////////////////////////////////////////////////
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
// console.log(new finished2(2).val)
var match = function (option, finish, fail, notStart, progress, d) {
    switch (option.__tag) {
        case "finished":
            return finish(option.val);
        case "fail":
            return fail(option.val);
        case "notStarted":
            return notStart();
        case "progress":
            return progress();
        default:
            return d();
    }
};
var partialMatcher = function (option, d, finish, fail, notStart, progress) {
    switch (option.__tag) {
        case "finished":
            if (finish !== undefined) {
                return finish(option.val);
            }
            else {
                return d();
            }
        case "fail":
            if (fail !== undefined) {
                return fail(option.val);
            }
            else {
                return d();
            }
        case "notStarted":
            if (notStart !== undefined) {
                return notStart();
            }
            else {
                return d();
            }
        case "progress":
            if (progress !== undefined) {
                return progress();
            }
            else {
                return d();
            }
        default:
            return d();
    }
};
