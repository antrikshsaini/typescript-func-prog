import { matchExhaustive } from "@practical-fp/union-types";
import { impl } from "@practical-fp/union-types";
const { Ok, Err } = impl();
const ok = Ok(24);
const err = Err("Something Wrong");
const ok1 = Ok(26);
const ok2 = Ok(28);
const arr = [ok, ok1, err, ok2];
const nums = arr.filter(Ok.is).map(n => n.value);
const match = (ok, err, d) => (result) => {
    if (result.tag) {
        switch (result.tag) {
            case "Ok":
                return ok(result.value);
            case "Err":
                return err(result.value);
            default:
                d();
        }
    }
    throw new Error("Unreachable state reached!");
};
const getStatus = (result) => {
    return matchExhaustive(result, {
        Ok: (x) => x * 2,
        Err: (y) => y.length
    });
};
//# sourceMappingURL=task2-practical-fp.js.map