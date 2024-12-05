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



console.log('Start');
setTimeout(function () {
    console.log('After 0 Second');
}, 0);
console.log('End');