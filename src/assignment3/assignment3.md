# Assignment 3

> Discriminated unions!

- [Assignment 3](#assignment-3)
  - [Task 1](#task-1)
    - [Background](#background)
    - [Deliverables](#deliverables)
    - [Extensions](#extensions)
    - [Example](#example)
  - [Task 2](#task-2)
    - [Background](#background-1)
    - [Deliverables](#deliverables-1)
    - [Constraints](#constraints)
    - [Extensions](#extensions-1)

## Task 1

> Create a three + state discriminated/tagged/disjoint union

### Background

[scala option](https://www.scala-lang.org/api/2.13.6/scala/Option.html)
[rust result](https://doc.rust-lang.org/std/result/)
[elm either](https://package.elm-lang.org/packages/toastal/either/latest/Either)

### Deliverables

- Create a three + state union type where two + of the states contain a value
- Implement constructors, discriminated union, typeguards, and other access methods
- Build a `fold` or `match` function for your type

### Extensions

- Implement some exotic mapping, applicative, folding, chaining, and helper methods
- Build a partial match with a default value

### Example

```typescript
type ProgressOption<T> = NotStarted | Finished<T> | Progress<{ val: number }>;
```

## Task 2

> Library use of discriminated/tagged/disjoint union

### Background

[scala option](https://www.scala-lang.org/api/2.13.6/scala/Option.html)
[rust result](https://doc.rust-lang.org/std/result/)
[elm either](https://package.elm-lang.org/packages/toastal/either/latest/Either)

### Deliverables

- Demonstrate implementation of a community library definition of a discriminated/tagged/disjoint union
- Demonstrate some exotic mapping, applicative, folding, chaining, and helper methods
- Demonstrate a `fold` or `match`

### Constraints

- You cannot use `Either` or `Option` from `fp-ts` as your target

### Extensions

- Use another language!
- Deliver a runnable app (CLI, web, script, binary, etc.) that uses your chosen library type