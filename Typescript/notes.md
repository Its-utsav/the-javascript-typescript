# TypeScript

## TOC

- [TypeScript](#typescript)
  - [TOC](#toc)
  - [Intro To TypeScript](#intro-to-typescript)
  - [Installation of TS](#installation-of-ts)
  - [Types In TS](#types-in-ts)
  - [Variable](#variable)
  - [Any](#any)
  - [Functions](#functions)
  - [Object](#object)
  - [Type Aliases](#type-aliases)
  - [Arrays](#arrays)
  - [Union Type](#union-type)
  - [Enum](#enum)
  - [Interface](#interface)
  - [Class](#class)
  - [Production Level](#production-level)

## Intro To TypeScript

- before going to learn about typescript we must need about JavaScript
- because
  [![superset of js and TypeScript](https://i.postimg.cc/pTRHwCF5/shapes-at-24-06-03-13-13-05.png)](https://postimg.cc/8FK9WhwT)
- `TypeScript` is superset of `JavaScript`.

- everything in `JavaScript` that we can do `JavaScript` that is already available in `TypeScript` and lot more available .
- it allow to write `js` more precise / strict manner so our code face less error while development.
- lastly all `TypeScript` convert into `js` than run that js code .
- `TypeScript` give code type safety .
  but from where type safety

```js
2 + "2";
null + 2;
undefined + 2;

// this is typescript this is not allow
```

1. what typescript does

- static checking (variable datatype)
- analyse the code and give hint about error code

- in TypeScript we write more code than `js` and that TypeScript code convert into `js` code
- `TypeScript` is a development tool , it a just a layer on `js`

- here is the example of TypeScript code convert into js and so error with TypeScript code
  [![Screenshot-2024-06-03-155919.png](https://i.postimg.cc/t4YLRKBF/Screenshot-2024-06-03-155919.png)](https://postimg.cc/MnJsdF2G)

- in above Image we declare a just `user` object and it have two property `name` and `age` and try to access the email which is not available in user object and `ts` transpiler just giver mark error but code still convert into js

```ts
let num1 = 12;
let num2 = "12";
let sum = num1 + num2;
console.log(sum); //OUTPUT 1212
```

- converted js code

```js
"use strict";
let num1 = 12;
let num2 = "12";
let sum = num1 + num2;
console.log(sum); //OUTPUT 1212
```

- here both number (n1 and n2) have different data type but we can still perform addition no one can stop

## Installation of TS

1. global installation (Ignore it)

- core installation

```cmd
npm install -g typescript
```

and for converting TypeScript to JavaScript

```cmd
tsc <path-to-the-file>
```

- and secondly we can setup or installation

## Types In TS

- primitives

1. Number
2. String
3. Boolean
4. null
5. undefined
6. Void
7. Object
8. Array
9. Tuples
   .....

- and many more

- don't use these anywhere in TypeScript code here we are miss types from TypeScript :- `any` , `never` , `unknown`

```js
function add(num1, num2) {
  if (typeof num1 == "number" && typeof num2 == "number") {
    return num1 + num2;
  } else {
    throw "Type miss match";
  }
}
```

```ts
function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(1, 2);
```

## Variable

```
const/let/var <variableName>:<type> = value(optional);
```

```ts
let myName: string = "Utsav"; // now only suggest string methods

let num = 12; // let num: number = 12;

let isMale = true;
```

- every time we don't need to define the type of the variable , TypeScript transpiler can automatic detect the type of the data 😊 known Type inference

## Any

- we have variable and we don't have any idea of which type of the variable
  `let hero;`
- here TypeScript transpiler set hero type as any and we can do anything with this variable like we do in js.
- If we use `any` in TypeScript than we lose the real power of TypeScript.
- We should try to avoid using `any` in TypeScript.

- better way

```ts
let hero: string;
function getHero() {
  return "Thor";
  // return true; // give error
}
hero = getHero();
```

- `any` is a not a special type a it is a just marker for not checking type of the variable

> When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.

> You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag `noImplicitAny` to flag any implicit any as an error.

## Functions

- this is how we write function is TypeScript with function return type and parameter type

```ts
function addTwo(num: number): number {
  return num + 2;
}

addTwo(2);
```

```ts
function signUpUser(name, email, password) {} // name , email and password mark as any so why use ts
signUpUser(1, 2, 3); // here name probely string not number
```

- solution of above and default parameter

```ts
function signUpUser(name: string, email: string, isPaid: boolean = false) {}

let logIn = (name: string, email: string, isPaid: boolean = false) => {};
signUpUser("Utsav", "Utsav@example.com", false);
```

TypeScript Code:-

```ts
function addTwo(num: number): number {
  return num + 2;
}

function getUpper(str: string) {
  return str.toUpperCase();
}

addTwo(2);
getUpper("Hello World");

function signUpUser(name: string, email: string, isPaid: boolean = false) {}

let logIn = (name: string, email: string, isPaid: boolean = false) => {};
signUpUser("Utsav", "Utsav@example.com", false);
```

Converted JavaScrip

```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
  return num + 2;
}
function getUpper(str) {
  return str.toUpperCase();
}
addTwo(2);
getUpper("Hello World");
function signUpUser(name, email, isPaid) {
  if (isPaid === void 0) {
    isPaid = false;
  }
}
var logIn = function (name, email, isPaid) {
  if (isPaid === void 0) {
    isPaid = false;
  }
};
signUpUser("Utsav", "Utsav@example.com", false);
```

- ok but why here `logIn` function with `var` key word we can modify with the help of `tsconfig`

- this can create a problem

```ts
function getValue(val: number): boolean {
  return val > 5 ? true : "Status code 200";
}
```

- we will solve in future

```ts
const heros = ["Iron man", "Thor", "Spidy"];
// here wee dont need to define the hero parameter type ts will automatcally detect the type of parameter
heros.map((hero): string => {
  return `Hero name is ${hero}`;
});
```

```ts
let nums = [1, 2, 3, 4, 5];

nums.map((num): string => {
  return `The numbers is ${num}`;
});
```

- `void` functions

```ts
function consoleErrMSG(msg: string) {
  console.log(msg);
  // not returning the value than void function but we define explicitly can be better
}

function consoleErrMSG(msg: string): void {
  console.log(msg);
}
```

- `never` return value
- some function never return a value than it can be helpful

```ts
function handleError(msg: string): never {
  throw new Error(msg);
}
```

## Object

- in JavaScript we used Object most of the time
- in TypeScript the syntax of object is same as JavaScript

```ts
let User = {
  name: "Utsav",
  age: 18,
  gender: "male",
};
```

- but we won't use like this
- the use case of the Object id through the function either pass as argument or return a object

## Type Aliases

- it is used for creating new name for a type useful more making code simple and more readable .

- example 1

```ts
type Point = {
  x: number;
  y: number;
};

let point1: Point = {
  x: 10,
  y: 12,
};
```

- 🤡🤡🤡🤡🤡🤡🤡🤡

```ts
type Name = string;

let anyName: Name = "Utsav";
```

- example 3 intersection and union

```ts
type Person = {
  name: string;
  age: number;
  isMale: boolean;
};

type Student = Person & {
  // we can union multiple type with &
  course: string;
};

let Student1: Student = {
  name: "Utsav",
  age: 18,
  isMale: true,
  course: "Bca",
};

type Id = number | string;

let userId: Id = 123;
userId = "abc123";
```

- for function

```ts
type Greet = (name: string) => string;

const greeting: Greet = (name) => `Hello ${name}`;

console.log(greeting("utsav"));
```

## Arrays

- nothing to much just we set type of the array

```ts
const arr: number[] = [1, 2, 3];
const newNums: Array<number> = [1, 2, 3, 4]; // both same
const names: string[] = ["utsav", "joy", "harray", "sam"];

const matrixArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// const lol = [];

export {};
```

- fixed size tuple array `let tuple: [number, string, boolean] = [1, "utsav", true];`
- read only array `const newNums: ReadonlyArray<number> = [1, 2, 3, 4];`
- tuples : almost similar to array but fix values and length

## Union Type

-  combination of multiple datatype

```ts
let score: number | string = 12;
score = "11";
score = 12; // all are valid but use visily

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let utsav: User | Admin = {
  userName: "Utsav",
  id: 121,
};

utsav = {
  name: "utsav",
  id: 123,
};

function getDBdata(id: number | string) {
  // complex programming
  console.log(id);
  // id.toLowerCase(); // wont work
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    console.log(`${id} is number.`);
  }
}

getDBdata("2");
getDBdata(2);
```

- array
  `let arr: number[] = [1, 2, 3]; ` - "4" not allow
  `let arrNumOfString: number[] = ['1', '2', 3'];` - 4 (Number) not allow
  `let data: string[] | number[] = [1, 2, 3];` - here still problem array can only have number or array can be string
  `let data1: (string | number | boolean)[] = [1, "LOL", true];` - this is far better than `:any[]` here array can contains data type of number ,string or boolean

- WTF
- 
```ts
let pi: 3.14 = 3.14;
pi = 3.145;
```
- useful case

```js
let seatType: "aisle" | "middle" | "window";
seatType = "window";
// seatType = 'creaw'; // not allow
```

## Enum

- Enumeration
- Use to restrict the choice
- `enums` allow you to define a set of named constants

for this

```ts
enum seatType {
  // default value is zero , than 1 than 2 and so on ..
  first,
  AISLE = -1,
  MIDDLE = 12,
  WINDOW, // auto 13
}

const seat = seatType.MIDDLE;

export {};
```

Converted JavaScript code 

```js
var seatType;
(function (seatType) {
  // default value is zero , than 1 than 2 and so on ..
  seatType[(seatType["first"] = 0)] = "first";
  seatType[(seatType["AISLE"] = -1)] = "AISLE";
  seatType[(seatType["MIDDLE"] = 12)] = "MIDDLE";
  seatType["WINDOW"] = "lol";
})(seatType || (seatType = {}));
var seat = seatType.MIDDLE;
```

---

- for this

```ts
const enum seatType {
  // default value is zero , than 1 than 2 and so on ..
  first,
  AISLE = -1,
  MIDDLE = 12,
  WINDOW, // auto 13
}

const seat = seatType.MIDDLE;

export {};
```

- this js code

```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var seat = 12; /* seatType.MIDDLE */
```

## Interface

- a quite similar to `type` but one type of loose `class`
- shape of an class.

## Class

- not valid ts

```js
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
}
```

## Production Level

1. `npm init -y`
2. `tsc --init`
3. `tsc -w` - in watch mode auto convert into js
