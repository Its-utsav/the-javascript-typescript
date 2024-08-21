# CallBack functions

- function are first class function

- we can pass function to any other function / function inside a function

- from this we can achieve `Asynchronous` world in `Synchronous` world (JavaScript) .

```js
function x(y) {}

x(function y() {}); // callback function

setTimeout(function () {
  // i am callback function
}, 1000);
```

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

- in javaScript only one call stack
- if any operation blocking call stack is known as blocking main thread
- It is good to use `async` function for all function operations
- `EventListener` are heavy (require more space) and even some ime create a closures , from preventing this wee remove the `EventListener`
- after removing even all variable that is associated with function are garbage collected
