// function x() {
//   let a = 10;
//   function y() {
//     console.log(a); // a references not a 10 value
//   }
//   a = 100;
//   return y;
// }
// let z = x();

// z();

// closure and settimeout

// function x() {
//   let a = 10;
//   setTimeout(function () {
//     console.log(a);
//   }, 3000);
//   console.log("Namaste JavaScript");
// }

// function x() {
//   let a = 0;
//   function printAndAdd() {
//     if (a < 5) {
//       console.log(a);
//       a++;
//     }
//   }
//   setInterval(printAndAdd, 1000);
// }

// x();

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Hello, World!!!");
// }

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Hello, World!!!");
// }

// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//       return
//     }
//     close(i); // when this function call it create a new copy of i
//   }
//   console.log("Hello, World !!");
// }

// x();

// function outer(str) {
//   // let a = 12;
//   function inner() {
//     console.log(a,str);
//   }
//   let a = 12; // it also create a closure even with var , const due to Memory creation
//   return inner;
// }

// outer("Hello World")();
// but here a can't access with let

// function level1() {
//   let a = 12;
//   function level2(y) {
//     let b = 22;
//     function leve3() {
//       let c = 33;
//       console.log(a, b, c, "--", y); // can  access all the nested function
//       // if we a comment which is in level1 function then it will print 100 from script scope
//     }
//     return leve3;
//   }
//   return level2;
// }

// let a = 100; // comptelty new variable

// level1()("Hello World ")();

// let counter = 1;

// function updateCounter(){
//   counter++; // problem - anyone can modify the value of counter
// }

// function count() {
//   let counter = 0;
//   return function updateCounter() {
//     counter++;
//     console.log(counter);
//   };
// }
// // this good but not a best way what if we need to decriment

// let count1 = count();
// count1()
// count1()

// let count2 = count();
// count2() // for this counter is completly new variable

// function Counter() {
//   let count = 0;

//   this.incrementCount = function () {
//     count++;
//     console.log(count);
//   };

//   this.decrementCount = function () {
//     count--;
//     console.log(count);
//   };
// }

// let count1 = new Counter();
// count1.incrementCount() // 1
// count1.incrementCount() // 2
// count1.incrementCount() // 3
// count1.incrementCount() // 4
// count1.decrementCount() // 3

// function a() {
//   let x = 90,
//     z = 30; // not used of z so z will be grabage collecetd by smart javascript grabage collecteor
//   return function b() {
//     console.log(x);
//   };
// }
// a()()

// a();

// function a() {
//   // function body
// }
// // x(); // wont work
// let x = function () {
//   // function body
// };

// x(); // here work

// setTimeout(() => {
//   console.log("From timer after 5 second");
// }, 5000);

// function x(y) {
//   console.log("X called");
//   y();
// }

// x(function y() {
//   console.log("Y is called");
// });
// let i = 1; // not a good idea anyone can modify this i
// document.getElementById("btn").addEventListener("click", function xyz() {
//   console.log("Button clicked", i++);
// });

// function attachEvent() {
// let btn = document.getElementById('btn')
// let c = 0;
// btn.addEventListener('click', function xyz() {
//   console.log('button clicked', c++)
// })
// }

// attachEvent()

// console.log('Start')
// document.getElementById('btn').
//   addEventListener('click', function cb() {
//     console.log('Button Clicked')
//   })
// console.log('End')



// console.log('Start');
// setTimeout(function () {
//     console.log('After 0 Second');
// }, 0);
// console.log('End');

const radius = [2, 4, 6, 10];
/*
const calculateArea = function (radius) {
    let n = radius.length;
    let ans = [];
    for (let i = 0; i < n; i++) {
        ans.push(Math.PI * radius[i] * radius[i]);
    }
    return ans;
}

const calculateCircumference = function (radius) {
    let n = radius.length;
    let ans = [];
    for (let i = 0; i < n; i++) {
        ans.push(2 * Math.PI * radius[i]);
    }
    return ans;
}

const calculateDiameter = function (radius) {
    let n = radius.length;
    let ans = [];
    for (let i = 0; i < n; i++) {
        ans.push(2 * radius[i]);
    }
    return ans;
}
    */

/*
const area = function (radius) {
    return Math.PI * radius * radius
}
const diameter = function (radius) {
    return 2 * radius
}
const Circumference = function (radius) {
    return 2 * Math.PI * radius;
}
Array.prototype.calculate = function (logic) {
    let n = this.length;
    let ans = [];
    for (let i = 0; i < n; i++) {
        ans.push(logic(this[i]));
    }
    return ans;
}
// console.log(calculate(radius, area))
// console.log(calculate(radius, Circumference))
// console.log(calculate(radius, diameter))
console.log(radius.map(area))
console.log(radius.calculate(area))
*/

// const arr = [5, 8, 1, 4];

// const double = function (ele) {
//     return ele * 2;
// }
// const triple = function (ele) {
//     return ele * 3;
// }
// const binary = function (ele) {
//     return ele.toString(2)
// }

// const output = arr.map(binary)
// // console.log(output)
// console.log(arr.map((e) => e * 2))
// console.log(arr.map((e) => e * 3))
// console.log(arr.map(function (el) {
//     return el.toString(2);
// }))

// let a = [45, 1, 7, 3, 0, 14000, 34, 12, 890]

// function sumOfArr(a) {
//     let ans = 0;
//     for (let i = 0; i < a.length; i++) {
//         ans += a[i]
//     }
//     return ans;
// }

// console.log(sumOfArr(a));

// console.log(a.reduce(function (accumulator, current) {
//     return accumulator + current
// }, 0))

// console.log(a.reduce(function (max, current) {
//     if (current > max) {
//         max = current;
//     }
//     return max;
// }, a[0]))


// const data = [
//     { firstName: "Utsav", lastName: "Dhimmar", age: 18 },
//     { firstName: "Elon", lastName: "Musk", age: 53 },
//     { firstName: "John", lastName: "Musk", age: 39 },
//     { firstName: "Sam", lastName: "Altman", age: 39 },
//     { firstName: "Roy", lastName: "Jason", age: 18 },
// ]

// // create a variable that have firstname+ " " + lastname

// const names = data.map(function (person) {
//     return `${person.firstName} ${person.lastName}`
// })

// // console.log(names)


// // Avearge of ages

// const avgAge = data.reduce(function (age, current) {
//     return age += current.age / 3;
// }, 0)

// // console.log(avgAge)

// const ageBasedData = data.reduce((obj, person) => {
//     if (obj[person.age] > 0) {
//         obj[person.age]++
//     } else {
//         obj[person.age] = 1;
//     }
//     return obj;
// }, {});
// // console.log(ageBasedData)

// // first name of the all user whose age is less tham 30

// const output = data
//     .filter((person) => {
//         if (person.age < 30) {
//             return person;
//         }
//     })
//     .map((person) => {
//         return person.firstName;
//     })

// console.log(output)



// console.log(data.reduce((acc, cur) => {
//     if (cur.age < 30) {
//         acc.push(cur.firstName)
//     }
//     return acc;
// }, []));

// let cart = ["shoes", "pants", "keyboard"]

// const orderId = createOrder(cart)
// orderId.
//     then(function (orderId) {
//         makePayment(orderId)
//     })
//     .then(function (paymentInfo) {
//         paymentSummary(paymentInfo)
//     })
//     .then(function (balacnce) {
//         updateBalcne(balacnce)
//     })
// makeAPayment(orderId)

// createOrder(cart, function (orderId) {
//     makePayment(orderId)
// })

// const promises = createOrder(cart);
// promises.then(function () {
//     makePayment()
// })


// const GITHUB_URL = "https://api.github.com/users/Its-utsav";
// const user = fetch(GITHUB_URL)
// console.log(user)


// user.then(function (data) {
//     console.log(data)
// })

// let cart = ["shoes", "pants", "keyboard"]

// let orderId = createOrder([]);

// // console.log(orderId); // Promise {<pending>}

// orderId
//     .then(function (orderId) {
//         console.log(orderId)
//         return orderId;
//     }).catch(function (err) {
//         console.log(err.message);
//     })
//     .then(function (orderID) {
//         return makePayment(orderID)
//     }).then(function (paymentInfo) {
//         console.log(paymentInfo)
//     })



// function createOrder(cart) {
//     const promiseRef = new Promise(function (sesolve, reject) {
//         // we need to handle to part 
//         // 1. for the resolve that means succesfull creation of orderId
//         // 2. for the reject that means failed to create a orderId,  so need to return usefull error (may be) info to promise consumer 
//         // first we need to validate cart , create cart than if everything on right track than we need to return the order ID
//         // for this we need to known the Backend ... 
//         // just dummy code

//         if (!validateCart(cart)) {
//             let error = new Error('Invalid Cart Info');
//             setTimeout(function () {
//                 reject(error);
//             }, 3000)
//         }

//         // get orderID 

//         let orderId = Math.floor(Math.random() * 100000);

//         if (orderId) {
//             setTimeout(function () {
//                 sesolve(orderId)
//             }, 3000)
//         }
//     })
//     return promiseRef;
// }


// function validateCart(cart) {
//     return cart.length !== 0;
// }

// function makePayment(orderId) {
//     return new Promise(function (resolve, reject) {
//         resolve("Paymant Done");
//     })
// }

// thank you for creating amazing playlist . homework answer 
/*
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

    */

// let ans = prompt('Are you over 18 ?', 'no');
// const p = new Promise(function (resolve, reject) {
//     resolve('Promise resolved !!');
// })

// function getData() {
//     p.then((data) => console.log(data))
// }
// getData()


// async function getData2() {
//     let data = await p;
//     console.log(data)
// }
// getData2()
/*
const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promised Resolved');
    }, 5000)
})

// function getData() {
//     console.log('Before consuming promise');
//     p.then(function (data) { console.log(data) });
//     console.log('After consuming promise');
// }
// getData()
const p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promised Resolved');
    }, 10000)
})

async function getData2() {
    console.log('Hello World !!');
    // let t1 = new Date().getSeconds();
    let val = await p1;
    console.log('first Promise Resloved');
    console.log(val);
    // let t2 = new Date().getSeconds();
    // console.log(t2 - t1, t1, t2);

    // let l1 = new Date().getSeconds();
    let val2 = await p2;
    console.log('Second Promise Resloved');
    console.log(val2);
    // let l2 = new Date().getSeconds();
    // console.log(l2 - l1, l1, l2)

    // console.log(l2 - t1)
}
getData2();

*/
/*
let t1p1, t2p1, t1p2, t2p2;

const p1 = new Promise(function (resolve, reject) {
    t1p1 = new Date().getSeconds()
    setTimeout(function () {
        console.log(t1p1)
        resolve('Promised Resolved');
        t2p1 = new Date().getSeconds()
    }, 5000)
})

// function getData() {
//     console.log('Before consuming promise');
//     p.then(function (data) { console.log(data) });
//     console.log('After consuming promise');
// }
// getData()

const p2 = new Promise(function (resolve, reject) {
    t1p2 = new Date().getSeconds();
    setTimeout(function () {
        resolve('Promised Resolved');
        t2p2 = new Date().getSeconds()
    }, 10000)
})

async function getData2() {
    console.log('Hello World !!');
    // let t1 = new Date().getSeconds();
    let val = await p1;
    console.log('first Promise Resloved');
    console.log(val);
    // let t2 = new Date().getSeconds();
    // console.log(t2 - t1, t1, t2);

    // let l1 = new Date().getSeconds();
    let val2 = await p2;
    console.log('Second Promise Resloved');
    console.log(val2);
    // let l2 = new Date().getSeconds();
    // console.log(l2 - l1, l1, l2)

    // console.log(l2 - t1)
    console.log(`Total time takes for function execution ${t2p2 - t1p1}, first promise resolved in ${t2p1 - t1p1} , second promise resolved in ${t2p2 - t1p2} `);
}

getData2();

*/
/*
const GITHUB_URL = "https://api.github.com/users/Its-utsav"

async function getDataFromGithub() {
    // fetch(GITHUB_URL)
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))
    //     .catch((err) => console.error(err))


    let response = await fetch(GITHUB_URL);
    let data = await response.json();
    console.log(data)
    // return data
}

// getDataFromGithub()
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

getDataFromGithub()
*/


const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // resolve('Promise One is resolved');
        reject('Promise One is rejected');
    }, 5000)
})

const p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // resolve('Promise Two is resolved');
        reject('Promise Two is rejected');
    }, 3000)
})

const p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // resolve('Promise Three is resolved');
        reject('Promise Three is rejected');
    }, 1000)
})

let prm = Promise.any([p1, p2, p3])
prm.then(function (data) {
    console.log(data)
}).catch(function (err) {
    console.error(err)
    console.error(err.errors)
}) 