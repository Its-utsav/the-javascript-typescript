# closures with setTimeout

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

## trust issue with setTimeout

- suppose we are executing this code

```javascript
console.log("start");
setTimeout(function () {
  console.log("Print After the 5 Second");
}, 5000);
console.log("end");

// 1 million line of code
```

- above code have console.log and setTimeout which will going to be execute in 5 second , and assume we have 1 million line of code .

- suppose 1 million line of code take 10 second to execute till execution on going timer for setTimeout will also reduce
- We expect that setTimeout callback function should execute after 5 second .

- But 1 million line of code take 10 second to execute so setTimeout function need to wait for 10 second due to callstack is not empty

- so we can say that setTimeout will wait for certain amount of time but we can not guarantied it will definitely execute after mention amount of time

- Know as concurrency model of JS . this is the logic behind trust issue with setTimeout

- simple example for blocking the thread for `10` second

```js
console.log("Start");
setTimeout(function () {
  console.log("Hello From setTimeout");
}, 5000);

console.log("End");

let startTime = new Date().getTime();
let endTime = startTime;

while (endTime < startTime + 10000) {
  endTime = new Date().getTime();
}

console.log(`${endTime - startTime} second after setTimeout execute`);
```

---

```javascript
console.log("Start");
setTimeout(function () {
  console.log("After 0 Second");
}, 0);
console.log("End");
```

- Here setTimeout out has 0 millisecond delay.

- Even though setTimeout out has 0 millisecond delay , it is asynchronous task , so call back will go in callback queue . and will enter after callstack is empty .

- It is rarely used only when we need to defer some piece of code
- once everything in callstack is execute and then we need to execute some piece of code than it may help .
