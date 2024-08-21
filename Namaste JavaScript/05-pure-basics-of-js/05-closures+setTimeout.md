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

```js
Hello, World!!!
6
6
6
6
6
```

- WTF 5 time 6 print
- why ?
- this is due to closures ,
- first hello world will print then
- when we use loop with setTimeout it create 5 separate callback and each callback run after certain delay . but they share same closure scope this means they references the same variable `i` not a value of an `i`
- after loop complete `i` became `6` and loop terminate
- and then each `setTimeout` callback run and it will print `6` due to `i` references
- for fix this we can use `let` or `const` (due to block scope);
- every time `setTimeout` run i will new variable all together

---

- but what if solve with `var`
- we can do with closures

```js
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
}
x();
```
