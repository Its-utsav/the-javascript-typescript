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