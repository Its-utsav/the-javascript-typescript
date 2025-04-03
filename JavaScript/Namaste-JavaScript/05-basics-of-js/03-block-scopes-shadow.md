# Block scopes

## BLOCK

1. what is `block ` ?
   1. - it group multiple JS statement inside `{ }`

```js
{
  // block statements
  // compound statements
}
```

---

```js
if (true) console.log("Hello"); //
```

- correct for only one statement

---

```js
if (true) {
  //
}
```

- for multiple statements

---

```js
{
  let a = 12;
  const b = 14;
  // a and b only access in this block
  var oops = 89; // global scope
  // but this oops can access anywhere
}
// here a and b variable not available
// but oops can access
console.log(oops); // -> 89
console.log(a); //  -> ReferenceError: a is not defined
// execution stop here due to above error
console.log(b);
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

- `10` became `100` due to `var` have global scope , even though shadowing can't stop it.

---

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

- but in the case of `let` declaration , variable inside the scope and outside the scope both are different
- for the outside of scope declaration variable it will go on script scope
- but variable inside the scope (even with same name as global variable) new scope is created name as global scope

---

- shadowing even work with functions
- illegal shadowing

```js
let a = 12;
{
  var a = 12; // won't work
}
```

- in above code `a` is already declared with the help of `let`
- so we can't redeclare variable with `var` but reverse is possible
- but it will work with `const` due to it has block scope

```js
// -------------------------------
var a = 90;
{
  let a = 80; // it will work
}
// -------------
```

---

```js
let a = 12;
function x() {
  var a = 12;
}
```

- For function all variable are block scope

```js
let a = 12;
{
  let a = 90;
}
```
