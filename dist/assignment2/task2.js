var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as R from 'ramda';
import { map as treemap } from "@antrikshsaini/tree-npm";
const fetchMockData = (option) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reponse = yield fetch(`https://jsonplaceholder.typicode.com/${option}`);
        const result = yield reponse.json();
        return { status: 'success', data: result };
    }
    catch (err) {
        return { status: "error", error: JSON.stringify(err) };
    }
});
const commentPath = (postId) => `comments?postId=${postId}`;
const fetchComments = R.compose(fetchMockData, commentPath)(3);
const postPath = (userId) => `posts?userId=${userId}`;
const fetchPosts = R.compose(fetchMockData, postPath)(3);
const match = (value) => {
    switch (value.status) {
        case "error":
            return value.error;
        case "success":
            return value.data;
    }
};
const match2 = (value, success, error, d) => {
    if (value.status === "error") {
        return error("Something Went Wrong");
    }
    else if (value.status === "success") {
        return success(value.data);
    }
    else {
        return d();
    }
};
const match3 = (success) => (error) => (d) => (value) => {
    if (value.status === "error") {
        return error("Something Went Wrong");
    }
    else if (value.status === "success") {
        return success(value.data);
    }
    else {
        return d();
    }
};
const fetchCommentsOfPost = () => {
    return new Promise(resolve => {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then((response) => response.json())
            .then((json) => {
            const obj = match({ status: 'success', data: json });
            resolve(obj);
        });
    });
};
const mapReduce = () => {
    let obj;
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((json) => {
        obj = { status: 'success', data: json };
        let count = 0;
        if (obj.status === "success") {
            let arr = obj.data.map(item => item.postId == 1 ? 1 : 0);
            count = arr.reduce((prev, curr) => prev + curr);
        }
        return count;
    }).catch(err => console.log(err));
};
const tree2 = {
    tag: 'branch',
    left: { tag: 'leaf', value: 2 },
    right: {
        tag: 'branch',
        left: { tag: 'leaf', value: 3 },
        right: { tag: 'leaf', value: 4 },
    },
};
console.log(treemap((i) => i + 1, tree2));
//# sourceMappingURL=task2.js.map