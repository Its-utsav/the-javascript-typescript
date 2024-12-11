# async await

- [async await](#async-await)
  - [what is async](#what-is-async)
  - [await with async](#await-with-async)
  - [working of async await](#working-of-async-await)
    - [from observation](#from-observation)
  - [error handling](#error-handling)
  - [async await vs promise than catch](#async-await-vs-promise-than-catch)

## what is async

- what is async function ?
- a function declared with `async` keyword before the function keyword
- `async function FunctionName`

```js
async function getData() {
  // function body
}
```

- async function always return promise
- Two possible case

1. Function return a promise - return promise

- not if we are returning the promise than it will nor wrapped inside another promise

```js
const p = new Promise(function (resolve, reject) {
  resolve("Promise resolved !!");
});
async function getData() {
  return p;
}
let data = getData();
data.then((d) => console.log(d));
```

2. Normal return a data - warp return data into promise object than return data

```js
async function getData() {
  return 1;
}
let data = getData();
console.log(data); // Promise {<fulfilled>: 1}
data.then((d) => console.log(d)); // 1
```

## await with async

- `async` and `await` are complementary to each other
- `await` keyword use before the `Promise` and than store the data into variable use inside the `async` function
- use of `await`
- simple example with `then`

```js
const p = new Promise(function (resolve, reject) {
  resolve("Promise resolved !!");
});

function getData() {
  p.then((data) => console.log(data));
}
getData();
```

- with `await`

```js
const p = new Promise(function (resolve, reject) {
  resolve("Promise resolved !!");
});

async function getData2() {
  let data = await p;
  console.log(data);
}
getData2();
```

- both code have same output `Promise resolved !!`
- we can only use `await` inside the `async` function

```js
await function lol() {};
```

- <center>output </center>

```js
Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules
```

## working of async await

- promise use for handling asynchronous operations like request API like etc

```js
const p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promised Resolved");
  }, 10000);
});
```

- normal promise consuming

```js
function getData() {
  console.log("Before consuming promise");
  p.then(function (data) {
    console.log(data);
  });
  console.log("After consuming promise");
}
getData();
```

- <center>output </center>

```txt
Before consuming promise
After consuming promise
Promised Resolved
```

- `Promised Resolved` will print after 10 second
- `Time Tide and JavaScript wait for none .`
- promise is asynchronous operation than it will capture the promise and continue to executing the next line of code
- later once promise is resolved it will print

- with `await`

```js
async function getData2() {
  console.log("Before the await");
  let val = await p;
  console.log("After the await");
  console.log(val);
}
getData2();
```

- <center>output </center>

```txt
Before the await
After the await
Promised Resolved
```

- after 10 second `After the await` , `Promised Resolved` will prints
- What ??? 😕
- Here we found the major different between async await and Promise.than / catch
- With async await JavaScript engine **wait** (**_looks like_**) for complete the promise . why ? looks like check the [Working of async await section](#working-of-async-await)
- But with Promise.then / catch we notice that JavaScript did not wait for promise to be complete it's execution

- two `await` in single `async` function

```js
async function getData2() {
  console.log("Hello World !!");
  let val = await p;
  console.log("first Promise Resloved");
  console.log(val);

  let val2 = await p;
  console.log("Second Promise Resloved");
  console.log(val2);
}
getData2();
```

- <center>output </center>

```txt
Hello World !!
first Promise Resloved
Promised Resolved
Second Promise Resloved
Promised Resolved
```

- after printing the `Hello World !!` JavaScript wait for 10 second for resolve promise
- In above both promises will it execute parallelly.
- It did not wait for first promise 10 second and latter than wait for another 10 second for second promise
- Lets try to create two different promises

```js
const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promised Resolved");
  }, 10000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promised Resolved");
  }, 2000);
});

async function getData2() {
  console.log("Hello World !!");
  let val = await p1;
  console.log("first Promise Resloved");
  console.log(val);

  let val2 = await p2;
  console.log("Second Promise Resloved");
  console.log(val2);
}
getData2();
```

- <center>output </center>

```txt
Hello World !!
first Promise Resloved
Promised Resolved
Second Promise Resloved
Promised Resolved
```

- `Hello World !!` will print immediately
- after 10 second both (first and second promise) resolve even though second promise have 2 second delay but second promise resolve immediately

- new example

```js
const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promised Resolved");
  }, 5000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promised Resolved");
  }, 10000);
});

async function getData2() {
  console.log("Hello World !!");
  let val = await p1;
  console.log("first Promise Resloved");
  console.log(val);

  let val2 = await p2;
  console.log("Second Promise Resloved");
  console.log(val2);
}
getData2();
```

- <center>output </center>

```txt
Hello World !!
first Promise Resloved
Promised Resolved
Second Promise Resloved
Promised Resolved
```

- `Hello World !!` will print immediately
- after 5 second delay `first Promise Resloved` , `Promised Resolved`
- and another 5 second delay `Second Promise Resloved`, `Promised Resolved`
- Hmm even though second promise will resolve after 10 second but in execution it will resolve after 5 second first promise resolve 5 (first promise delay) + 5 = 10 (second promise delay)

### from observation

- As we know _Time , Tide and JavaScript wait for none._
- Similarly in the case of `async-await` JavaScript engine did not wait for the compilation of promise , the `async` function suspend from callstack after the promise resolve function will again start executing from where it suspend , it will not block our thread , Not freeze our browser

```js
const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promised Resolved");
  }, 5000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promised Resolved");
  }, 10000);
});

async function getData2() {
  console.log("Hello World !!"); // will print immediately

  let val = await p1;
  // function suspend here and after 5 second it will resolve
  // after 5 second function will start the executing program from where it suspend
  console.log("first Promise Resloved"); // after 5 second
  console.log(val); // after 5 second

  // function suspend here and after 10  second it will resolve
  let val2 = await p2;
  console.log("Second Promise Resloved"); // after 10 second
  console.log(val2); // after 10 second
}
getData2();
```

- proof

```js
let t1p1, t2p1, t1p2, t2p2;

const p1 = new Promise(function (resolve, reject) {
  t1p1 = new Date().getSeconds();
  setTimeout(function () {
    console.log(t1p1);
    resolve("Promised Resolved");
    t2p1 = new Date().getSeconds();
  }, 5000);
});

const p2 = new Promise(function (resolve, reject) {
  t1p2 = new Date().getSeconds();
  setTimeout(function () {
    resolve("Promised Resolved");
    t2p2 = new Date().getSeconds();
  }, 10000);
});

async function getData2() {
  console.log("Hello World !!");

  let val = await p1;
  console.log("first Promise Resloved");
  console.log(val);

  let val2 = await p2;
  console.log("Second Promise Resloved");
  console.log(val2);

  console.log(
    `Total time takes for function execution ${
      t2p2 - t1p1
    }, first promise resolved in ${t2p1 - t1p1} , second promise resolved in ${
      t2p2 - t1p2
    } `
  );
}
```

## error handling

## async await vs promise than catch
