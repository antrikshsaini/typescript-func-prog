# Assignment 2

> Function Implementations, data fetching, FP identifications

- [Assignment 2](#assignment-2)
  - [Task 1 (Function implementations)](#task-1-function-implementations)
    - [Background](#background)
    - [Deliverables](#deliverables)
    - [Extension](#extension)
  - [Task 2 (Data fetching & FP patterns)](#task-2-data-fetching--fp-patterns)
    - [Background](#background-1)
    - [Deliverables](#deliverables-1)
    - [Extensions](#extensions)
    - [Important Links](#important-links)

## Task 1 (Function implementations)

> Given a function signature, implement and name the function

### Background

- map

`f: (A->B) -> List<A> -> List<B>`

```typescript
const map = <A, B>(f: (a: A) => B, l: Array<A>): Array<B> => l.map(f);
```

- identity

`f: A -> A`

```typescript
const identity = <A>(a: A) => a;
```

- apply

`f: (A -> B) -> A -> B`

```typescript
const apply =
  <A, B>(f: (a: A) => B) =>
  (a: A) =>
    f(a);
```

### Deliverables

1. Implement and name the following functions

   a. `f: A -> [A] -> [A]`
   b. `f: Number -> Number -> [A] -> [A]`
   c. `f: [String] -> {String: any} -> {String: any}`
   d. `f: [A] → [B] → [[A,B]]`

### Extension

Which ones of these can have multiple implementations? Create an alternate implementation that satisfies the type constraints

## Task 2 (Data fetching & FP patterns)

> Employing functional programming in an application

### Background

Our frontend blog application needs to fetch some data from an API. The server API format was decided to be the following: In case of success: `{ status: 'success', data: RESPONSE_DATA }`, In case of error: `{ status: 'error', error: ERROR_MESSAGE }`.

```typescript
interface Entity {
  id: string;
}

interface Post extends Entity {
  __tag: "post";
  userId: number;
  title: string;
  body: string;
}

interface Comment extends Entity {
  __tag: "comment";
  postId: number;
  name: string;
  email: email;
  body: string;
}

type ApiResponse<T extends Entity> =
  | { status: "success"; data: T[] }
  | { status: "error"; error: string };
```

### Deliverables

1. Implement a `fetchMockData` function that can fetch either posts or comments
2. Create a `fetchComments` function and a `fetchPosts` function that extends from `fetchMockData`
   - Use a principle of function composition (pipe,compose,flow etc.) or partial application to create `fetchComments` and `fetchPosts`
3. Build a `match` or `fold` function for determining the presence of a `success` or `error`
   - Or use.implement an existing match or fold implementation from a library
4. Assemble this into a small script or program that obtains posts & comments in a format of your choosing
   - e.g. Get all comments of a post, get all posts and their comments etc.
5. Use `mapreduce` to obtain some meta data on the fetched comments/posts
   - e.g. Number of comments by author, number of comments on each post etc.

### Extensions

- How are errors handled in the program? How can `Result`, `Either`, or `Option` be used to model errors?
- How can this program be written in a loop that incorporates user input/feedback?
- How pure is this program? Which parts are pure/impure?
- Write a naive `RemoteData` ADT for use in this program

### Important Links

[JSON Placeholder](https://jsonplaceholder.typicode.com/)

### Important Links

[react composition vs inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)
