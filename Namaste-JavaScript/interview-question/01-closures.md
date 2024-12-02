# closures

- [closures](#closures)
  - [what is closures ?](#what-is-closures-)
  - [simple closures example](#simple-closures-example)
  - [will inner function have access of outer function parameter ?](#will-inner-function-have-access-of-outer-function-parameter-)
  - [is their is any restriction on the level of scope on closure ?](#is-their-is-any-restriction-on-the-level-of-scope-on-closure-)
  - [data hiding and encapsulation with closures](#data-hiding-and-encapsulation-with-closures)

## what is closures ?

- a function with its reference to the its outer environment together closures.
- combination of function and its lexical scope bundled together

## simple closures example

```js
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
outer(); // get inner function
outer()(); // inner function called

let z = outer();
z(); // same as above
```

- in the case of `var` , `let` , `const` variable declaration closures will created

- even below code is valid

```js
function outer() {
  function inner() {
    console.log(a);
  }
  var a = 10;
  return inner;
}
outer(); // get inner function
outer()(); // inner function called

let z = outer();
z(); // same as above
```

## will inner function have access of outer function parameter ?

- yes inner function have access of outer function parameter , all the outer function parameter are the part of outer function scope

```js
function outer(str) {
  function inner() {
    console.log(a, str);
  }
  var a = 10;
  return inner;
}
var z = outer("utsav");
z();
```

## is their is any restriction on the level of scope on closure ?

- no, any level of scope do not affected closure

```js
function outer(param1) {
  var a = 10;
  function innerOne(param2) {
    var b = 20;
    function innerTwo(param3) {
      var c = 30;
      console.log("Varibale of function scope ", a, b, c);
      console.table([
        `outer function parameter ${param1}`,
        `innerOne function parameter ${param2}`,
        `innerTwo function parameter ${param3}`,
      ]);
    }
    return innerTwo;
  }
  return innerOne;
}
var x = outer("hello");
x("world")("of js");
```

## data hiding and encapsulation with closures

- without data hiding and encapsulation

```js
var counter = 0;
function increment() {
  counter++;
}
```

- in above code any function can directly modify the `counter` variable

- hmm with the we safe the `counter` variable

```js
function counterFun() {
  var counter = 0;
  function increment() {
    counter++;
  }
}
```

- with closures

```js
function counterFun() {
  var counter = 0;
  return function increment() {
    counter++;
    console.log(counter);
  };
}
var a = counterFun();
a(); // 1
a(); // 2
a(); // 3
a(); // 4
a(); // 5
var b = counterFun();
b(); // 1
b(); // 2
```

- for `a` and `b` value of `counter` both are different
- but above code is good but not scalable

- with more scalable approach
- with the help of constructors

```js
function counter() {
  var count = 0;
  this.getCount = function () {
    console.log(count);
  };
  this.updateCounter = function (x) {
    count += x;
  };
}
var a = new counter();
a.updateCounter(5);
a.updateCounter(50);
a.getCount();
```
