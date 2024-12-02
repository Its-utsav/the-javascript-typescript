```js
function x(s) {
  setTimeout(function () {
    console.log(`Hello After ${s} second`);
  }, s * 1000);
  console.log(
    `I have nothing todo with freaking settimeout i will run imdiatly after function call`
  );
}
x(2);
```

- output

```txt
I have nothing todo with freaking settimeout i will run imdiatly after function call
Hello After 2 second
```

- inside the settimeout code execute could after some millisecond which mention, second parameter

```js
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Hello, World!!!");
}

x();
```

```js
Hello, World!!!
6
6
6
6
6
```

- 5 time 6 print
<!-- - why ?
- this is due to closures ,
- first hello world will print then
- when we use loop with setTimeout it create 5 separate callback and each callback run after certain delay . but they share same closure scope this means they references the same variable `i` not a value of an `i`
- after loop complete `i` became `6` and loop terminate
- and then each `setTimeout` callback run and it will print `6` due to `i` references
- for fix this we can use `let` or `const` (due to block scope)
- every time `setTimeout` run `i` will new variable all together -->

- It happen due to closures , and can be solve with closure
- but why ???? 5 times 6
- `var` have global scope for this case it has function scope
- for `i` every time new settimeout created and send to the priority queue and value of `i` is increase by one
- settimeout use the value of `i` so closures created with for loop lexical environment
- closure remember references of the value not a actual value
- seen `var` has function scope so every time new settimeout value of `i` increase by one , it do that until it reach termination condition in this case `i<=5` so `i=6`
- After that each (5) settimeout execute one by one , var has function scope , in every iteration `i` value increase by one
- so every settimeout will print `6` not `1`, `2`, `3`, `4`, `5`
- We can solve easily by using `let` or `const` , both have block scope

```js
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Hello, World!!!");
}
x();
```

- but if we want to still use `var` and print `1`, `2`, `3`, `4`, `5` we can achieved through closures
- before we solve with `var` we need to understand what problem here
- `var` has function scope not a block scope , we some how achieved block scope for `var` than we can do.

---

- but what if solve with `var`
- we can do with closures

```js
function a() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}
a();
```

- here we create a new function inside the loop called `close` that take `x` as parameter , inside function we are printing the value of `x` after `x * 1000` second delay
- for loop will run 1 to 5 and we are calling close function each time with the help of `i`
- close function create a closures which capture the value of `x` which is nothing just value of `i`
