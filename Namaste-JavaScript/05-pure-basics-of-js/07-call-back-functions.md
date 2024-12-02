# CallBack functions

- function are **first class function**
- so it can take as parameter for function
- we can pass function to any other function / function inside a function
- from this we can achieve `Asynchronous` world in `Synchronous` world (JavaScript) .
- callback allow us to use `asynchronous` task in single threaded `Synchronous` JavaScript

---

- Why it Called as callback function ?

```js
function x(y) {}

x(function y() {}); // callback function
```

- for above code `x` function take `y` as parameter , while calling the function we just pass function as an argument
- Now `x` has responsibility to use `y` parameter function which may be call later in our program

---

```js
function x(y) {}

x(function y() {}); // callback function

setTimeout(function () {
  // i am callback function
}, 1000);
```

---

```js
setTimeout(function () {
  console.log("I am From timer");
}, 5000);

function x(y) {
  console.log("Hi am X");
  y();
}
x(function y() {
  console.log("hi iam Y ");
});
```

```txt
Hi am X
hi iam Y
I am From timer
```

- first `x` function is called with callback function (function as argument)
- inside the first `Hi am X` will print after that we are invoking the `y` function which will print `hi iam Y`
- For this code call stack can be like this

1. `anonymous` by default
2. `x` for `x` function
3. `y` f

---

- in javaScript only one call stack which can be called main thread
- if any operation blocking call stack is known as blocking main thread
- It is good to use `async` function for all function operations
- `EventListener` are heavy (require more space) and even some may be create a closures , from preventing this wee remove the `EventListener`
- after removing even all variable that is associated with function are garbage collected
