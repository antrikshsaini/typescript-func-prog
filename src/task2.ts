// Task 2 (Data fetching & FP patterns)
// Employing functional programming in an application

import * as R from 'ramda'

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

type Either = Post | Comment;


const fetchMockData = async (option: string): Promise<ApiResponse<Either>> => {

    try {
        const reponse = await fetch(`https://jsonplaceholder.typicode.com/${option}`)
        const result: Either[] = await reponse.json()
        console.log(result)
        return { status: 'success', data: result }
    } catch (err) {

        return { status: "error", error: JSON.stringify(err) }
    }

    // return new Promise(resolve => {
    //       fetch(`https://jsonplaceholder.typicode.com/${option}`)
    //           .then((response) => response.json())
    //           .then((json: Either[]) => resolve({status: 'success', data: json}))
    //           .catch(err => resolve({status: 'error', error: JSON.stringify(err)}));
    //   });


};

// fetchMockData("comments")

// fetchMockData("posts")


// *************************Part 2nd****************************** //

const commentPath = (postId: number): string => `comments?postId=${postId}`

const fetchComments = R.compose(fetchMockData, commentPath)(3)

console.log(fetchComments)

// return all comments of postId given

const postPath = (userId: number): string => `posts?userId=${userId}`

const fetchPosts = R.compose(fetchMockData, postPath)(3)

console.log(fetchPosts)

// This will return all the posts that belong to the userId given

// *************************Part 3rd****************************** //

const match = <T extends Entity>(a: ApiResponse<T>): T[] | string => {
    if (a.status === "success") {
        return a.data
    }
    else {
        return a.error
    }
}


