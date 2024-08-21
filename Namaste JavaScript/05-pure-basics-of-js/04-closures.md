# what is closures ?

- function bundled with its lexical environment
- simple words :- a closure function is a function that has access to its outer function scope even after a function return 
WTF
- a closures can remember and access the variables and argument references of its outer function even after a function has returned 

```js
function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  y();
}
x();
```

```js
function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  return y;
  // sane as above
  //   return function y(){
  //     console.log(a);
  //   }
}

let z = x(); // y whole function return

console.log(z); // y function print
z(); // y function call and print the 10
// they maintain lexical env
```

```js
function x() {
  let a = 10;
  function y() {
    console.log(a); // a references not a 10 value
  }
  a = 100;
  return y;
}
let z = x();

z();
```
