"use strict";
let finishCount = 0;
let failCount = 0;
const notStarted = () => { return { __tag: "notStarted" }; };
const progress = () => { return { __tag: "progress" }; };
const finished = (result) => {
    function constructor() {
        finishCount = finishCount + 1;
    }
    constructor();
    return { __tag: "finished", val: result };
};
const fail = (error) => {
    function constructor() {
        failCount = failCount + 1;
    }
    constructor();
    return { __tag: "fail", val: error };
};
class notStarted2 {
    constructor() {
        this.__tag = "notStarted";
    }
}
class progress2 {
    constructor() {
        this.__tag = "progress";
    }
}
class finished2 {
    constructor(val) {
        this.__tag = "finished";
        this.val = val;
    }
}
class fail2 {
    constructor(val) {
        this.__tag = "fail";
        this.val = val;
    }
}
const isNotStarted = (option) => option.__tag == "notStarted";
const isProgress = (option) => option.__tag == "progress";
const isFinished = (option) => option.__tag == "finished";
const isFail = (option) => option.__tag == "fail";
const fold = (option, d) => {
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
const match = (option, finish, fail, notStart, progress) => {
    switch (option.__tag) {
        case "finished":
            return finish(option.val);
        case "fail":
            return fail(option.val);
        case "notStarted":
            return notStart();
        case "progress":
            return progress();
    }
};
const partialMatcher = (option, d, finish, fail, notStart, progress) => {
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
//# sourceMappingURL=task1.js.map