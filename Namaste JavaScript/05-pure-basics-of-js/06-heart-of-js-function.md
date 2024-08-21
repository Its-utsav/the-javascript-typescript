# First Class Function and About Functions

- First Class Citizen

## TOC

- [First Class Function and About Functions](#first-class-function-and-about-functions)
  - [TOC](#toc)
  - [Function Statement](#function-statement)
  - [Function Expression](#function-expression)
  - [Anonymous Function](#anonymous-function)
  - [Named Function Expression](#named-function-expression)
  - [Function Parameter and Argument](#function-parameter-and-argument)
  - [First Class Function](#first-class-function)

## Function Statement

function statement is also known as function declarations

```js
function x() {
  // function body
}
```

## Function Expression

- we can assign function to the variable is known as function expression
- function act like a value

```js
let x = function () {
  // function body
};
```

- the difference between function expression and function statement is hoisting
- In function statement we can invoke function before function defined but in function expression we first define function then we can invoke the function

```js
a();

function a() {
  // function body
}
// x(); wont work cant access before initialization
x = function () {
  // function body
};

x(); // here work
```

## Anonymous Function

- a function without name
- function do not have their own identity
- used when function are treat as value in function expression

```js
function (){
    // raised ERROR
}
```

## Named Function Expression

- a function with name(function statement) and expression
- we ca print whole function statement using function name in function

```js
let a = function lol() {
  // function body
};
a();
// lol(); - won't work because lol don't have global scope
```

```js
// for second point
let a = function lol() {
  console.log(lol);
};
a();
```

## Function Parameter and Argument

- function parameter are just placeholder or identifier for any respected function

```js
function x(a, b) { // here a and b are parameter
  return a + b;
}

x(1,2); // argument
```


## First Class Function
- function are the heart ❤️ of the JavaScript.
- first class function is also known as **First Class Citizen**.

- first class function means we can pass function as argument for the any parameter
- we can return function from function
- the ability to use function as value or argument is known as FCF
- this concept available in some programming language



**NOTE** - all the above concept we can achieve by arrow function
```js
let x = () =>{
    // x function body
}

```