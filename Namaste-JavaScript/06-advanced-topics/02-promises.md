# promise

- [promise](#promise)
  - [why need of promise](#why-need-of-promise)
  - [promise](#promise-1)
  - [real API](#real-api)
  - [definitions](#definitions)
  - [promise chain](#promise-chain)

## why need of promise

- before promise
- we are dependent on callback function
- callback function used for achieving asynchronous operations create more flexible and modular code

- problem with callback

1. callback hell - horizontal grow code instead of vertical
2. inversion of control - we loose the control of the callback function

## promise

> promise used for handle async operation in JavaScript .

```javascript
let cart = ["shoes", "pants", "keyboard"];
const orderId = createOrder(cart);
makeAPayment(orderId);
```

- `makeAPayment` API is dependent on the `createOrder` , so firstly `createOrder` should execute than `makeAPayment`
- Both are asynchronous operation we do not known how must time after `createOrder` will return the orderId

- for solve this we can use the callback we learn in callback

```js
let cart = ["shoes", "pants", "keyboard"];
createOrder(cart, function (orderId) {
  makePayment(orderId);
});
```

- ⚠️ but here we loose the control of `makePayment` function it will executed by `createOrder` function , and if we add new API's like `showSummray ` , `updateWallet` , that are dependent on `makePayment` and `makePayment` is dependent on `createOrder`
- Two big problem 1. Callback hell also known as pyramid of doom 2. Inversion of control

---

- with promise

- `createOrder` will return a promise that will capture into the `variabel`
- Promise is like simple empty object (have many things) with some data into it , and this data value will hold whatever this `createOrder` function will return .
- `createOrder` is an asynchronous function and we do not know how much time will take this function to be execute
- so initially `createOrder` function start to execute it will return object with its properties with `undefined` like this `{data : undefined}`
- after the some time orderId is ready than it will return into the object and replace orderId with undefined

- In simple word when we execute the `createOrder` , it immediately return the promise object with set default value to `undefined` , than JavaScript will continue to execute other line of code . after some time `createOrder` finish its execution and orderId is ready than that orderId will automatically assign to our promise object value which were undefined earlier.

```js
let cart = ["shoes", "pants", "keyboard"];
const promise = createOrder(cart);
promise.then(function () {
  makePayment();
});
```

- here we are attaching the function to the promise object , all control in our hand
- but in callback we are passing the function and we need to trust on function to be execute
- In promise guarantee us it will execute the attached function at least one time after data is fulfilled

## real API

```js
const GITHUB_URL = "https://api.github.com/users/Its-utsav";
const user = fetch(GITHUB_URL);
console.log(user); // Promise {<pending>}
```

- `Promise {<pending>}` object will logged in console
- It have three things `Prototype` , `PromiseState` ,`PromiseResult`
- `PromiseState` - state for promise three possible values `pending` , `fulfilled` , `rejected`
- `PromiseResult` - empty object , its default value in `undefined` after fetch function return some data it will store in `PromiseResult`

- output of that code

```js
Promise {<pending>}
[[Prototype]]:Promise
[[PromiseState]]:"fulfilled"
[[PromiseResult]]:Response
```

---- only for chromium based browser -----

- but why `pending` and `fulfilled`
- when this line is encounter `fetch(GITHUB_URL)` , `PromiseState` is `pending` because it will take some time to get data and than fill into the promise object as we know JavaScript will not wait for it , it will continue to execute the program line by line .
- next line is `console.log(user);` so it will directly will log the promise object that why we get `Promise {<pending>}` as soon as data got (in few millisecond GitHub API's are very fast) , `PromiseState` will change to the `fulfilled`
- once `PromiseState` is `fulfilled` than `PromiseResult` value to will replace by the `undefined` and we can see the meta data of promise , in which we have `body` property it have readable stream , it hold the result of the promise we can't see directly

- callback attached to promise object

```js
const GITHUB_URL = "https://api.github.com/users/Its-utsav";
const user = fetch(GITHUB_URL);
console.log(user);
user.then(function (data) {
  console.log(data);
});
```

- promise objects are immutable we can't change it.

## definitions

- A container for a future value .

<center>or</center>

- A `promise` object is a placeholder for certain amount of time until we receive value from the asynchronous operations

<center>or</center>

- A `promise` object represents the eventual completion or failure of n asynchronous operation and its resulting value.

## promise chain

- from above we solve the problem of Inversion of control now time to reed of from the pyramid of doom

```js
api.createOrder(cart, function () {
  api.makePayment(orderId, function (paymantInfo) {
    api.showSummary(paymantInfo, function () {
      api.updateWallet();
    });
  });
});
```

- with promise chain

```js
let cart = ["shoes", "pants", "keyboard"];
const orderId = createOrder(cart);
orderId
  .then(function (orderId) {
    makePayment(orderId);
  })
  .then(function (paymentInfo) {
    paymentSummary(paymentInfo);
  })
  .then(function (balacnce) {
    updateBalcne(balacnce);
  });
```

- pitfall ⚠️⚠️⚠️⚠️ some time we forget to write `return` while Channing the promise

```js
let cart = ["shoes", "pants", "keyboard"];
const orderId = createOrder(cart);
orderId
  .then(function (orderId) {
    return makePayment(orderId);
  })
  .then(function (paymentInfo) {
    return paymentSummary(paymentInfo);
  })
  .then(function (balacnce) {
    return updateBalcne(balacnce);
  });
```

- more shorter way with the help of arrow function

```js
let cart = ["shoes", "pants", "keyboard"];
const orderId = createOrder(cart);
orderId
  .then((orderId) => makePayment(orderId))
  .then((paymentInfo) => paymentSummary(paymentInfo))
  .then((balacnce) => updateBalcne(balacnce));
```
