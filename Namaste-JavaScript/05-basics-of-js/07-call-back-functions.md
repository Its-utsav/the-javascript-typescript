# CallBack functions

- [CallBack functions](#callback-functions)
  - [what is ... ?](#what-is--)
  - [thread blocking](#thread-blocking)
  - [eventlistener](#eventlistener)
    - [closures with eventlistener](#closures-with-eventlistener)

<!-- https://alok722.github.io/namaste-javascript-notes/dist/lectures.html#episode-14--callback-functions-in-js-ft-event-listeners -->

## what is ... ?

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
- Now `x` has responsibility to use `y` parameter function which may be call later in our program this is how callback word came into the picture .

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
- call stack like anonymous + x + y
- after the executing the function call stack is empty
- after 5000 millisecond 5 second directly setTimeout push onto to the call stack and remove when it finish its execution

## thread blocking

- 🧵
- it is programming concepts where a program execution stuck .
- It can be happened due to complex logic , I/O operations etc.
- JavaScript has only single thread so anything very complex operation can block the its execution
- With the help of callback function we can do `Asynchronous` task without blocking the main thread .

## eventlistener

- simple click event

```html
<button id="btn">click me</button>
```

```js
btn.addEventListener("click", function () {
  // call back function
  console.log("button clicked");
});
```

- for this whenever the user click on the button the function associate function push onto the call stack

### closures with eventlistener

- simple closure with eventlistener

```js
let count = 0;
btn.addEventListener("click", function () {
  console.log("button clicked", count++);
});
```

- here `count` variable can be modify by any function we need to hide it .
- we can hide the `count` variable by closure

```js
function attachEvent() {
  let btn = document.getElementById("btn");
  let c = 0;
  btn.addEventListener("click", function () {
    console.log("button clicked", c++);
  });
}

attachEvent();
```

- here event function create a closure with its lexical env.

---

- eventlistener are heavy , due to closures and user can do any event at any time so callback function need to always ready
- even when call stack is empty it take too much memory due to above reason .
- If we have many event than events make page load , render slow
- So it is always good to remove event when event are not required to use every time .
- after removing the all the event automatically values are garbage collected free memory .

---

- in javaScript only one call stack which can be called main thread
- if any operation blocking call stack is known as blocking main thread
- It is good to use `async` function for all function operations
- `EventListener` are heavy (require more space) and even some may be create a closures , from preventing this wee remove the `EventListener`
- after removing even all variable that is associated with function are garbage collected
