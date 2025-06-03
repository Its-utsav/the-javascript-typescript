# callback

- [callback](#callback)
  - [overview](#overview)
  - [Good Part](#good-part)
  - [Bad Part](#bad-part)

## overview

- callback are useful while achieving the asynchronous code of execution
- JavaScript is single threaded synchronous language , It means it execute code line by line without waiting for any part of code .
- example of synchronous code

```js
console.log("Hello world");
console.log("without Callaback");
console.log("code");
```

- example of asynchronous code

```js
console.log("Hello World!!!");
function printAfter5s() {
  setTimeout(function () {
    console.log("Print After 5 second");
  }, 5000);
}
console.log("With asynchronous code");
printAfter5s();
```

- let's understand with the help of E-Commerce Application situation

- assume while testing we need to but shoes , pants , keyboard

1. we add to the cart and create an order `api.createOrder()`
2. need to make payment `api.makePayment()`
3. than we need to show order summary `api.orderSummary()`

- order should be like this

```txt
creating order -> make Payment -> show summary
```

- for payment to need to first create order
- for showing summary first need to make payment , for payment order is must created
- lastly we need to update wallet also
- This all are dependent to each other from below to top

```js
api.createOrder(cart, function () {
  api.makePayment(function () {
    api.showSummary(function () {
      api.updateWallet();
    });
  });
});
```

## Good Part

- due to callback we can do asynchronous task in JS .

## Bad Part

1. **callback hell**
   - callback hell is scenario where callback function are passed to the another callback function which lead function to grow horizontally instead of vertically
   - Also know as a **Pyramid of Doom**
2. **Inversion of Control**
   1. Second and most important disadvantages of callback is Inversion of Control
   2. ```js
      api.createOrder(cart, function () {
        api.makePayment();
      });
      ```
      - In above code we are giving to control of `makePayment` API to the `createOrder`
      - And now `createOrder` responsibility of call `makePayment`
      - We loose to all control of `makePayment`
      - What if `createOrder` did not execute `makePayment` or fail to execute ? possible
      - We will solve this problem in [promises](02-promises.md)
