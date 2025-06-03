# Promise Part - 2

- in this we are going to build our own promise majority time we consume the promise but knowing how to create promise make us better developer 😎

- [Promise Part - 2](#promise-part---2)
  - [creating the promise](#creating-the-promise)
  - [promise chaining](#promise-chaining)
  - [catching the error with catch](#catching-the-error-with-catch)

## creating the promise

- lets again take example of cart

```js
let cart = ["shoes", "pants", "keyboard"];

let orderId = createOrder(cart); // <- will return promise consuming the promise

orderId.then(function (orderId) {
  makePayment(orderId); // consuming the promise with chaning
});
```

- creating promise we have `Promise` constructor with `new` keyword

```js
const promiseRef = new Promise(function (resolve, reject) {});
```

- `Promise` constructor takes callback function , function have two parameter `resolve` , `reject` given by JavaScript
- `resolve` - for success part of the promise
- `reject` - for the failure part of the promise
- whenever we create a promise we need to handle `resolve` and `reject` part of a promise

```js
let cart = ["shoes", "pants", "keyboard"];
let orderId = createOrder(cart);
function createOrder(cart) {
  const promiseRef = new Promise(function (sesolve, reject) {
    // we need to handle to part
    // 1. for the resolve that means succesfull creation of orderId
    // 2. for the reject that means failed to create a orderId,  so need to return usefull error (may be) info to promise consumer
    // first we need to validate cart , create cart than if everything on right track than we need to return the order ID
    // for this we need to known the Backend ...
    // just dummy code

    if (!validateCart(cart)) {
      let error = new Error("Invalid Cart Info");
      reject(error);
    }

    // get orderID

    let orderId = Math.floor(Math.random() * 100000);

    if (orderId) {
      setTimeout(function () {
        sesolve(orderId);
      }, 3000);
    }
  });
  return promiseRef;
}

function validateCart(cart) {
  return cart.length !== 0;
}
```

- rejecting the promise with the help of `.catch`

```javascript
let cart = ["shoes", "pants", "keyboard"];

let orderId = createOrder([]); // for handling errors

console.log(orderId); // Promise {<pending>}

orderId
  .then(function (orderId) {
    console.log(orderId); // will get ID
    // makePayment(orderId);
  })
  .catch(function (err) {
    console.log(err.message); // handling the errors
  });

function createOrder(cart) {
  const promiseRef = new Promise(function (sesolve, reject) {
    if (!validateCart(cart)) {
      let error = new Error("Invalid Cart Info");
      reject(error);
    }

    let orderId = Math.floor(Math.random() * 100000);

    if (orderId) {
      setTimeout(function () {
        sesolve(orderId);
      }, 3000);
    }
  });
  return promiseRef;
}

function validateCart(cart) {
  return cart.length !== 0;
}
```

## promise chaining

- passing one `then` block data (can be promise itself) to the next block of promise
- we achieve through the `then` and with the help of `return` keyword
- one `then` block return data to the immediate next `then` block and so on....

```js
orderId
  .then(function (orderId) {
    console.log(orderId); // will get ID
    return orderId;
  })
  .then(function (orderID) {
    return makePayment(orderID); // return direct promise
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  });
```

- suppose we are returning the promise we can write like this

```js
orderId
  .then(function (orderId) {
    console.log(orderId); // will get ID
    return orderId;
  })
  .then(function (orderID) {
    return makePayment(orderID).then(function (paymentInfo) {
    console.log(paymentInfo);
  };
  });
```

- but we are at promise hell 🤣
- we have promise due to callback hell
- it is good to use `.then` for return data (even promise) and handle into next `then` block

## catching the error with catch

- `catch` block is used for handling the `reject` part of the promise
- from any level of `then` block code did not resolve than it is handled in any of first `catch` block
- It only concern with above `then` block from the `catch` block
- if any `then` block after `then` block than all the `then` block will executes .

```js
let cart = ["shoes", "pants", "keyboard"];

let orderId = createOrder([]);

orderId
  .then(function (orderId) {
    console.log(orderId);
    return orderId; // <--- will fail here due to cart is empty so it will handle in first catch block
  })
  .then(function (orderID) {
    return makePayment(orderID);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  });
```

- Invalid the cart but still we have make payment
- usually we do not like this but for learning it is good .

```js
orderId
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log(err.message);
  }) // still execute
  .then(function (orderID) {
    return makePayment(orderID);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  });
```

## HW

- Write a API's for `createOrder` , `proceedToPayment` ,`showOrderSummary` , `updateWallet`

```js
thank you for creating amazing playlist . homework answer

let balacnce = 100000;

let cart = [
    {
        item: "keyboard",
        price: 3000
    },
    {
        item: "Mouse",
        price: 300,
    },
    {
        item: "Web Cam",
        price: 5000,
    },
    {
        item: "Iphone 16",
        price: 80000,
    },
]

function createOrder(cart) {
    function validateCart(cart) {
        return cart.length !== 0;
    }
    return new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            let error = new Error('Cart is Empty');
            reject(error);
        }
        let orderId = Math.floor(Math.random() * 10000) + 'store@123';
        let total = cart.reduce(function (total, current) {
            total += current.price
            return total;
        }, 0)
        if (orderId && total) {
            resolve({
                orderId,
                total
            });
        }
    })
}

function proceedToPayment(orderInfo) {
    function enoughCheckBalnce(totalAmount) {
        return totalAmount <= balacnce;
    }
    return new Promise(function (resolve, reject) {
        if (enoughCheckBalnce(orderInfo.total) == false) {
            reject(new Error('Not Enough Balance'))
        } else {
            resolve({
                orderId: orderInfo.orderId,
                total: orderInfo.total,
                status: 'Payment successfully completed',
                isPaymentDone: true,
            })
        }
    })
}

function showOrderSummary(paymentInfo) {
    return new Promise(function (resolve, reject) {
        if (paymentInfo.isPaymentDone) {
            let onlyProductNames = cart.map(function (product) {
                return product.item;
            })
            resolve({
                products: onlyProductNames,
                total: paymentInfo.total,
            })
        } else {
            reject(new Error("Can't show summary :("))
        }
    })
}

function updateWallet(paymentInfo) {
    return new Promise(function (resolve, reject) {
        balacnce = balacnce - paymentInfo.total;
        if (balacnce >= 0) {
            resolve({
                status: "Wallet update",
                balacnce
            })
        } else {
            reject(new Error("unable to update wallet"))
        }
    })
}

let orderInfo = createOrder(cart)

orderInfo
    .then(function (orderInfo) {
        return proceedToPayment(orderInfo)
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo)
    })
    .then(function (paymentInfo) {
        return updateWallet(paymentInfo)
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo)
    })
    .catch(function (err) {
        console.error(err)
    })
```
