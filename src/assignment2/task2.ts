// Task 2 (Data fetching & FP patterns)
// Employing functional programming in an application

import * as R from 'ramda'
// import * as tree from "@antrikshsaini/tree-npm"
import { map as treemap, Tree } from "@antrikshsaini/tree-npm"

interface Entity {
    id: string;
}

interface Post extends Entity {
    __tag: 'post';
    userId: number;
    title: string;
    body: string;
}

interface Comment extends Entity {
    __tag: 'comment';
    postId: number;
    name: string;
    email: string;
    body: string;
}

type ApiResponse<T extends Entity> =
    | { status: 'success'; data: T[] }
    | { status: 'error'; error: string };

type Combine = Post | Comment;


const fetchMockData = async (option: string): Promise<ApiResponse<Combine>> => {

    try {
        const reponse = await fetch(`https://jsonplaceholder.typicode.com/${option}`)
        const result: Combine[] = await reponse.json()
        // console.log(result)
        return { status: 'success', data: result }
    } catch (err) {

        return { status: "error", error: JSON.stringify(err) }
    }

    // return new Promise(resolve => {
    //       fetch(`https://jsonplaceholder.typicode.com/${option}`)
    //           .then((response) => response.json())
    //           .then((json: Combine[]) => resolve({status: 'success', data: json}))
    //           .catch(err => resolve({status: 'error', error: JSON.stringify(err)}));
    //   });


};

// fetchMockData("comments")

// fetchMockData("posts")


// *************************Part 2nd****************************** //

const commentPath = (postId: number): string => `comments?postId=${postId}`

const fetchComments = R.compose(fetchMockData, commentPath)(3)

// console.log(fetchComments)

// return all comments of postId given

const postPath = (userId: number): string => `posts?userId=${userId}`

const fetchPosts = R.compose(fetchMockData, postPath)(3)

// console.log(fetchPosts)

// This will return all the posts that belong to the userId given

// *************************Part 3rd****************************** //


type Left = { status: 'error'; error: string }

type Right<T> = { status: 'success'; data: T[] }

type Either<T> = Left | Right<T>

const match = <T>(value: Either<T>): string | T[] => {

    switch (value.status) {
        case "error":
            return value.error
        case "success":
            return value.data
    }

}

// simple match //

const match2 = <T extends Entity, T2>(
    value: ApiResponse<T>,
    success: (data: T[]) => T2,
    error: (err: string) => T2,
    d: () => T2): T2 => {
    if (value.status === "error") {
        return error("Something Went Wrong")
    }
    else if (value.status === "success") {
        return success(value.data)
    }
    else {
        return d()
    }
}

// currying //

const match3 = <T extends Entity, T2>(success: (data: T[]) => T2) => (error: (err: string) => T2) => (d: () => T2) => (value: ApiResponse<T>): T2 => {
    if (value.status === "error") {
        return error("Something Went Wrong")
    }
    else if (value.status === "success") {
        return success(value.data)
    }
    else {
        return d()
    }
}
// *************************Part 4th****************************** //

const fetchCommentsOfPost = (): Promise<Comment[] | string> => {

    return new Promise(resolve => {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then((response) => response.json())
            .then((json: Comment[]) => {
                const obj = match({ status: 'success', data: json })
                resolve(obj)
            })
    });

}

// *************************Part 5th****************************** //

const mapReduce = () => {

    let obj: ApiResponse<Comment>
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((json: Comment[]) => {
            obj = { status: 'success', data: json }
            let count: number = 0
            if (obj.status === "success") {
                let arr: number[] = obj.data.map(item =>
                    item.postId == 1 ? 1 : 0
                )
                count = arr.reduce((prev, curr) => prev + curr)
            }
            return count
        }).catch(err => console.log(err))


}
const tree2: Tree<number> = {
    tag: 'branch',
    left: { tag: 'leaf', value: 2 },
    right: {
        tag: 'branch',
        left: { tag: 'leaf', value: 3 },
        right: { tag: 'leaf', value: 4 },
    },
};
console.log(treemap((i: number) => i + 1, tree2));