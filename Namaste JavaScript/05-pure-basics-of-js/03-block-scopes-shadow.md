

## BLOCK

1. what is `block ` ?
   - it group multiple js statement inside `{ }`
2.

```js
{
  // block statements
  // compound statements
}

if (true) console.log("Hello"); // correct for only one statement

if (true) {
  // for multiple statements
}

{
  let a = 12;
  const b = 14;
  // a and b only access in this block
  var oops = 89; // global scope
  // but this oops can access anywhere
}
// here a and b variable not available
// but oops can access
console.log(oops) // -> 89
console.log(a)   //  -> ReferenceError: a is not defined
// execution stop here
console.log(b)
```

- hmm

```js
var a = 10;

console.log(a); // 10
{
  var a = 100;
  // shadowing the value of a
  let b = 90;
  const c = 45;
  console.log(a); // 100
}
console.log(a); // 100
// 10 became 100 due to global scope
```

```js
let a = 10; // in script
{
  let a = 100; // in block scope
  var b = 80; // global scope
  const c = 70; // in block scope
  console.log(a); // 100 shadowing
}

console.log(a); // 10
```

- shadowing even work with functions
-
- illegal shadowing

```js
let a = 12;
{
  var a = 12; // won't work
}
// -------------------------------
var a = 90;
{
  let a = 80; // it will work
}
// -------------

let a = 12;
function x() {
  var a = 12;
}
```

```js
let a = 12;
{
  let a = 90;
}
```
