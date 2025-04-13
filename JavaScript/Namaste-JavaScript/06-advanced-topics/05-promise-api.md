# Promise APIs

- what is Promise ?
- Promise object represent a eventual completion or failure of an asynchronous operation and resulting a value .

- [Promise APIs](#promise-apis)

  - [promise all](#promise-all)
  - [promise allSettled](#promise-allsettled)
  - [promise race](#promise-race)

- majorly we have 4 promise APIs

1. `Promise.all([one ore Promise])`
2. `Promise.allSettled()`
3. `Promise.race()`
4. `Promise.any()`

## promise all

- `Promise.all([one or more Promise])`
- It take array of promise / iterable
- It make mentioned Promise API call in array and return the result of all promise in single aggregate array.
- It make all Promise API call in parallel . and wait for each Promise to be resolve ,
- if all the Promise are resolve than it it collect all Promise result into the single aggregate array and return the array
- if any of Promise rejected before the Promise resolve than it will immediately throw the error from rejected Promise
- It will not wait for other Promise to be resolved moreover other Promise wont cancelled but other Promise success or failure dependent on their fate , `Promise.all` wont care
- So either all Promise resolved or none are .

> To conclude, the Promise.all() waits for all the input promises to resolve and returns a new promise that resolves to an array containing the results of the input promises. If one of the input promises is rejected, the Promise.all() method immediately returns a promise that is rejected with an error of the first rejected promise.

- all promise resolve

```js
const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise one is resolved");
  }, 5000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise Two is resolved");
  }, 3000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise Three is resolved");
  }, 1000);
});

let prm = Promise.all([p1, p2, p3]);
prm
  .then(function (data) {
    console.log(data); // ['Promise one is resolved', 'Promise Two is resolved', 'Promise Three is resolved']
  })
  .catch(function (err) {
    console.error(err);
  });
```

- any one fail

```js
const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise one is resolved");
  }, 5000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve('Promise Two is resolved');
    reject("Promise Two is rejected");
  }, 3000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise Three is resolved");
  }, 1000);
});

let prm = Promise.all([p1, p2, p3]);
prm
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err); // Promise Two is rejected
  });
```

- `Promise Two is rejected` will fail after 3 second

## promise allSettled

- It is similar to the `Promise.all` like Wait for all Promise to be success but only different in failure part , if any of given Promise failed than it add into the return array along with other Promise output one after all promise settled it return array of object , that contains two things
- if Promise success than it give the value
- if Promise fail than it give the reason
- In other words we can say that `Promise.allSettled` iterable and return a new Promise that resolve after all the all inputted Promise have **settled** either resolve or rejected .
- `Promise.all` fail fast return the failure result of promise
- `Promise.allSettled` wait for all promise to be **settled**

- **settled** means to possibility

1. resolve -> success -> fulfilled <- common for promise
2. reject -> failure -> rejected <- common for promise

```js
const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise one is resolved");
  }, 5000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve('Promise Two is resolved');
    reject("Promise Two is rejected");
  }, 3000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise Three is resolved");
  }, 1000);
});

let prm = Promise.allSettled([p1, p2, p3]);
prm
  .then(function (data) {
    console.log(data); // will print array of object after 3 second see p2
    data.forEach(function (oneData) {
      if (oneData.status === "rejected") {
        console.error(oneData.reason);
      } else {
        console.log(oneData.value);
      }
    });
  })
  .catch(function (err) {
    console.error(err);
  });
```

## promise race

- As is name suggest `race` it will return the result from the given iterable promise that is settled first.
- `Promise.race` is a static method that takes iterable of Promise as input and return a single `Promise` .
- This returned promise settled with the eventual state of the first promise that settles .
- Simple Word it return the result (success or failure) of first settled promise . return a single promise
- Not wait for other promises .

```js
const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise one is resolved");
    // reject('Promise Two is rejected');
  }, 5000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve('Promise Two is resolved');
    reject("Promise Two is rejected");
  }, 3000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve('Promise Three is resolved');
    reject("Promise Three is rejected");
  }, 1000);
});

let prm = Promise.race([p1, p2, p3]);
prm
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err); // Promise Three is rejected
  });
```

- `Promise Three is rejected` will logged on console because it will settled after 1 second which is lowest from among the all promise

## promise any

- `Promise.any` accepts the iterable and return a promise that is success first if all promise fail than it will return AggregateError and we can access we can get array of errors that promise will give
  > - `Promise.any` is a static method that takes an iterable and return a single `Promise` .
  > - This return promise fulfils when any of input's promise fulfils , with this first fulfilment value .
  > - It reject when all the input's promises rejected (Even with empty iterable pass) , with AggregateError (Error for all the promise) containing the array of rejection reason
- seeking for the first success

```js
const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise one is resolved");
    // reject('Promise Two is rejected');
  }, 5000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise Two is resolved");
    // reject('Promise Two is rejected');
  }, 3000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve('Promise Three is resolved');
    reject("Promise Three is rejected");
  }, 1000);
});

let prm = Promise.any([p1, p2, p3]);
prm
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err);
  });
```

- `Promise Two is resolved` will logged after 3 second because it will resolved firstly

```js
const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve('Promise One is resolved');
    reject("Promise One is rejected");
  }, 5000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve('Promise Two is resolved');
    reject("Promise Two is rejected");
  }, 3000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve('Promise Three is resolved');
    reject("Promise Three is rejected");
  }, 1000);
});

let prm = Promise.any([p1, p2, p3]);
prm
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err); // AggregateError: All promises were rejected
  });
```

- all promise failed

```js
const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve('Promise One is resolved');
    reject("Promise One is rejected");
  }, 5000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve('Promise Two is resolved');
    reject("Promise Two is rejected");
  }, 3000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve('Promise Three is resolved');
    reject("Promise Three is rejected");
  }, 1000);
});

let prm = Promise.any([p1, p2, p3]);
prm
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err); // AggregateError: All promises were rejected
    console.error(err.errors); //  ['Promise One is rejected', 'Promise Two is rejected', 'Promise Three is rejected']
  });
```
