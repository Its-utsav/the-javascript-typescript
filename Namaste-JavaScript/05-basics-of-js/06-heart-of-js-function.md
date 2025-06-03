# First Class Function and About Functions and many more

- First Class Citizen

## TOC

- [First Class Function and About Functions and many more](#first-class-function-and-about-functions-and-many-more)
  - [TOC](#toc)
  - [Function Statement](#function-statement)
  - [Function Expression](#function-expression)
  - [different between function expression and function statement](#different-between-function-expression-and-function-statement)
  - [Anonymous Function](#anonymous-function)
  - [Named Function Expression](#named-function-expression)
  - [Function Parameter and Argument](#function-parameter-and-argument)
  - [First Class Function](#first-class-function)
  - [Arrow functions](#arrow-functions)

## Function Statement

- function statement is also known as function declarations

```js
function x() {
  // function body
}
```

## Function Expression

- we can assign function to the variable is known as function expression
- here function act like a value

```js
var x = function () {
  // function body
};
```

## different between function expression and function statement

- the difference between function expression and function statement is hoisting
- In function statement we can invoke function before we function defined but in function expression we first define function then we can invoke the function
- with function expression function treat like a normal variable , first phase of JS execution is memory creation phase which set `undefined` to the all variable by default
- in function expression first value set to `undefined` , if we try to call the function before we define the function expression it will just a normal variable with `undefined` value , due to code execution phase not reach the line function expression line
- If something is not a function then how we access it ?

```js
a();

function a() {
  // function body
}
// x(); wont work cant access before initialization
var x = function () {
  // function body
};

x(); // here work
```

## Anonymous Function

- a function without name
- Or function do not have their own identity
- used when function are treat as value in majority time with function expression

```js
function (){
  // raised ERROR
}
// Uncaught SyntaxError: Function statements require a function name
```

- as per the ECMAScript specification a function must have value
- additionally how we call or use anonymous function since it do not have their identity

```js
var x = function () {};
```

## Named Function Expression

- a function with name (function statement) and function expression
<!-- - we can print whole function statement using function name in function -->

```js
let a = function lol() {
  // function body
  console.log("Hello World !!");
};
a();
// lol(); - won't work because lol don't have global scope
// Uncaught ReferenceError: lol is not defined
```

- here function name is not have global scope , but it has local scope
- below code will print the function body

```js
// for second point
let a = function lol() {
  console.log(lol);
};
a();
```

## Function Parameter and Argument

- function parameter are just placeholder or identifier or label for any respected function
- argument are passed when we are invoking the functions

```js
function x(a, b) {
  // here a and b are parameter
  return a + b;
}

x(1, 2); // argument
```

## First Class Function

- function are the heart ❤️ of the JavaScript.
- first class function is also known as **First Class Citizen**.

- first class function means we can pass function as argument for the any parameter inside the function , we can return function from function

```js
function a(fun) {
  console.log(fun);
}
a(function () {
  console.log("say Hi");
});
```

---

- both are valid code

```js
function a(fun) {
  console.log(fun);
}
function hi() {
  console.log("say Hi");
}
a(hi);
```

---

```js
function a() {
  return function () {
    console.log("From returned function");
  };
}
a()();
```

- the ability to use function as value or argument is known as First Class Function
- this programming concept

**NOTE** - all the above concept we can achieve by arrow function

## Arrow functions

- It feature come in ES6 (ECMAScript 2015)
- New way to define the function .

```js
let x = () => {
  // x function body
};
```
