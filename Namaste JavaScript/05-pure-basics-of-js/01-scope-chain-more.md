## undefined vs not defined

- JavaScript memory allocate to variable before the single line of code execute and set value to the variable is `undefined` by default.
- JavaScript is loosely ( means weakly) type language so we don't need to defined the data type of variable explicitly

---

## scope chain and lexical environment

- Whenever GEC is created Lexical Environment is also created

- Lexical Environment = Local Memory + References to the parent Lexical Environment and ... so on Lexical Environment

code

```js
a();
function a() {
  console.log(b); // print 10
  // due to LE.ENV. and var
}
var b = 10;
a();
```

output

```txt
undefined
10
```

- why ?
- We are trying to call function before the function is declared , it is allow in JS with the help of hoisting
- for the first function call the code execution not reach the `b` variable actual values , so variable in JS by default hold `undefined`
- But in the second function call the value of `b` is assigned `10` and `undefined` is removed , that why it print `10` on console
- Even though `b` is declared in global scope
- for the above code lexical environment = local memory (in this case empty) + Reference to the its parents lexical environment in this case global

```js
function a() {
  b();
  function b() {
    console.log(x); // print 10
    // due to LE.ENV. and var
  }
}
var x = 10;
a();
```

- Same with here , in above code we just add another function so for this lexical environment
- Lexical Environment = b + a + global

```js
function a() {
  b();
  function b() {
    var x = 10;
    console.log(x); // print 10
    // find in local memory
  }
}
a();
```

```js
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b); // print 10
    // due to LE.ENV.
  }
}
a();

console.log(b); // REFERENCES ERROR
// b function is finished so there is no `b`  thats why it raise error
```

- So, Lexical Environment = local memory + lexical env of its parent. Hence, Lexical Environment is the local memory along with the lexical environment of its parent

- Lexical: In hierarchy, In order

- Whenever an Execution Context is created, a Lexical environment(LE) is also created and is referenced in the local Execution Context(in memory space).

- The process of going one by one to parent and checking for values is called scope chain or Lexical environment chain.
- The process of try to accessing the variables in one parent to another parent , one by one is known as scope chain or lexical environment chain
- **An inner function can access variables which are declared in the outer functions scope even if inner function is any level of deeply nested . In any other case, a function can't access variables not in its scope.**

---
