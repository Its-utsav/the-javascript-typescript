//
/*==================== higher oredr function  ================================
// -> higher order function is the function than accepts function as their parameter

// //eg1
// function hello() {}
// hello(function () {});
// // eg2
// function sayHello() {
//   return function () {};
// }


// in-bulit eaxample forEach . think about
*/

/* =========================== constructer function =========================== 
// -> a function that is called with 'new' keyword and return an object with all
properies and methods known as custructer function


// function User() {
//   this.username = "Utsav";
//   this.age = 17;
//   this.height = 5.3;
// }

// function User(username,age,height) {
//     this.username = username;
//     this.age = age;
//     this.height = height;
//   }

// let user1 = new User("utsav",17,5.3);

// console.log(user1);
*/

/* ========================  first class function ======================== 

//  a language is have first class function when the function in that laguage treat as normal value or variables, we can pass , save and use them as arugments to another function

let sum = function (a,b) {
  return a + b;
};

console.log(sum(2,3));
*/

/* ================== new kewyword ===================
// It is used to create an instance of an object base on a constructor function.
// The `new` keyword creates a new empty object and sets the `this` to point the new object

// step - 1 . whenever new kewyword  see imagine a empty objcet
// step 2 .  fill that objcet with its counstructor values

function User(name) {
  this.name = name;
}

let user1 = new User("Utsav");
let user2 = new User("Sam");

console.log(user1);
console.log(user2);


*/

/* ============================= iifo ============================ 
// Immediately INvoked Function Expression
-> it is a way to create  function and Immediately execute it without need of calling
//

(function () {
  let a = 12;
  console.log("value of an a is :", a); // work
})();

console.log(a); // throw an error
// used for prevanting them fro, polluting the gloable envirnment and interface with other parts of code


let ans = (function () {
  let num1 = 12;

  return {
    getter: function () {
      console.log(`values of number is ${num1}`);
      // now value can me access out of an IIFE
    },
    setter: function (num) {
      num1 = num;
      // now value can be change from outside of an IIFE
    },
  };
})();

console.log(ans.getter()); // works

ans.setter(90);

console.log(ans.getter()); // value is safely changed
*/

/* prototype


*/

/*====================prototype inheritance=====================
// in below human object defon and give some proprety

let human = {
  canFly: false,
  canTalk: true,
  canWalk: true,
  willDead: true,
  haveFourlegs: false,
};

//  supose we need to give same property to randomPerson object 
// do win copy paste , but bad parctise
// so we can borrow it from human object

let randomPerson = {
  goodInEnglish: true,
  masterInJs: true,
};


randomPerson.__proto__ = human;
// now human key are the part of randomPerson with borrow
// to check it run in v8-engine driect


// console.log(randomPerson);
// console.log(randomPerson.canFly);
// console.log(randomPerson.canTalk);
// console.log(randomPerson.willDead);
// console.log(randomPerson.canWalk);
*/

/* ===================this call  apply bind=============
this -> it talk about current contex


global => window
function => window
method => object

method -> function inside any object


any method this keyword refer to current parent object 
--------------------
call() , apply() & bind() use to change functions this value


function person() {
  console.log(this); // in node it give empty objcet & in browser it give window objcet
}

let harry = { name: "Harry" };


person.call(harry);


// apply is almost same as call but in apply we pass this and arugument in array
// because apply tackes only two argument 1. thisContax 2. arguments in form of array , it because my be aguments are multiple

function person(val1,val2,val3) {
  console.log(this,val1,val2,val3); // in node it give empty objcet & in browser it give window objcet
}

let harry = { name: "Harry" };


person.call(harry,11,12,13);
---------------

function abcd(val1,val2) {
  console.log(this,val1,val2);
}
const person = { name: "harry" };

const  bindFunction= abcd.bind(person,1,12);

bindFunction()

bind() -> create a new funtion with same body as the original function butwith fixed `this` value.

but bind won't invoke immediately, we need to store in a variable and call that variable



*/

/* ============================= pure and impure funcyion======
--
pure function
1. same output for same input
2. will never change value of global variable


//pure function

function sum(a, b) {
  return a + b;
}


let ans1 = sum(1,2);
let ans2 = sum(1,2);

console.log((ans1 + "    " + ans2));


let anyValue = 12
// impur function
function random(value){
  anyValue = 120
  return Math.random() * value;
}


let ans1 = random(12);
let ans2 = random(12);

console.log((ans1 + "    " + ans2));

*/

// clousers

// this is improtant in ES-6

/* let and const - new way to  variables

// with var,lat , const we declare variables but with const we can't change value for that variable 
// we must provide value of constans variables , 

var z;
z = 34;

let o;
o = 9;
let a = 23;

const x ; // not valid


var is function scope

var added in window object

let and const are block scope { }

*/

/* arrow function - new way to write function
`this` keyword not work with arrow function
main 3 differnt function in js(OLD) 
1. function statements:-
  use function keyword while define
    example:-
      function abcd(){
        //do some task
      }

2. function expression :-
  function store in variables:
  example:-
   let abcd = function(){
    // do some task
   }

3. anonymos function:
   callback function or IIFE

-----
in new js arrow function came (3 varionse)
1. basic fat arrow function ; () =>{ }
let a = () =>{}

2. arow function with one parameter
let b = (a) =>{ " value of b is " +a};
// for only one parameter
let b = a =>{ " value of b is " +a};
3. arrow function  with implicit return 
e.g 1. let b = (a) => " value of b is " +a; // if only statemet
e.g 2. let b = (a) =>{ return " value of b is " +a};

let fun = () => 123;

console.log(fun());
*/

/*  templet literals - write whatever in `` backteicks

console.log(`hey 1-1  is ${1 - 1}`);

*/

/* default parameter - defualt value for function
default value for function - this value used when we don't provide function argument

// when sum function is called then we need to provide two argument a and b but if don't provide  anyone value that give undefined 
// in default parameter we can give anything 
let sum = (a, b = 5) => {
  return a + b;
};

console.log(sum(10, 1));

*/

/* rest and speard - ... for differnt purpose
... is rest and also spread operator

let arr1 = [1, 2, 3, 4, 5];
// let arr2 = arr1; // this is referense based copy so any change in orignale array automatic effect in copy of the orignale array


let arr2 = [...arr1];
// this is an example of spread operator ;
// explaintion in short ... tack elements of arr1 and spread them in to arr2 variale i
// it can be used with array or object  

// why it is spread operator -> it spread or copy operator into another variable 
// so what is rest operator -> rest operator used to store any n th numbers of elements in single variable(mostly) in form of array 


// function abcd(a, b, c) {
//   console.log(a, b, c);
// no rest operator so magicle number 69 was ignore
// }

// abcd(10, 15, 20 , 69);

function abcd(a, b, c, ...d) {
  console.log(a, b, c, d);
  // now value(array) of d(value can be upto n) print
}

abcd(10, 15, 20, 69, 82,96);
*/

/*  destructuring - retirve  data from array or objcet


let arr = [1, 2, 3, 4, 5, 6];

// now we need to store value 1 in onther variabes easy
// let first = arr[0];

// but what if we need to store multiple value from onther array so  write with above is very boring and time consuming process
// so destructuring help

let [a, b, c, d, e, f, i, j, k] = arr; // this create new variables to store value of arr in continus 

console.log(a); // 1
console.log(b); // 2 
console.log(c); // 3
console.log(d); // 4
console.log(e); // 5
console.log(f); // 6
// we(below) three are udefind because we are not in array name arr
console.log(i); 
console.log(j);
console.log(k);



// let user = { name: "harry", age: 27 };

// let { age } = user; // so don't need to write user.age

// console.log(age);

//  NOTE :- if we perform destructing on array than we used [] AND for object than we used {}
*/

// classes -
// modules  - import export
//
/*  promises - async js

in real world, when we need to do some task in future and we have no 100% sureity that
we can do some task in future may be we can't do that in future
// e.g. on 10 feb i need go college  , i am go college and attend lectures (promis resolve ),but due to illniness i am unable to go college (promis rejected), 


// creating promise
let ans = new Promise((resolve, reject) => {
  if (true) {
    return resolve(); // () -invoke is imp
  } else {
    return reject();
  }
});

// consuming promise

ans
  .then(() => {
    console.log("promise reslove"); // run when promise reslove
  })
  .catch(() => {
    console.log("promise reject "); // run when promise reject
  })
  .finally(() => {
    console.log(
      "ya something happened may be promise reslove or may be promies reject"
    ); // run always either promise reslove or reject
  });


  ----


  // get random number , if number is less than 5 it resolve but greater than 5 it reject

// creating function
let ans = new Promise((res, rej) => {
  let num = Math.floor(Math.random() * 10);

  if (num < 5) {
    return res(num);
  } else {
    return rej(num);
  }
});

// consuming promises

ans
  .then((a) => {
    console.log(`${a} is less than 5`);
  })
  .catch((a) => {
    console.log(`${a} is greater than 5`);
  })
  .finally((a) => {
    console.log(`i think a is${a}`);
  });

*/

/* async await  - async js but more elegently
-- it is simlilar like promies - but in differnt way 

Async/await in JavaScript: Simplifying Promise Chaining

async/await is a powerful syntax introduced in ES2017 that makes working with promises in JavaScript much easier and more intuitive. It helps overcome the nested callback hell often encountered while using traditional promise chaining.
Here's a breakdown of its key features:

1. async functions:

Functions declared with the async keyword have the ability to pause their execution and wait for promises to resolve.
You can use regular synchronous code within an async function, making it easier to read and understand.
2. await keyword:

Placed before a promise-returning expression, await tells the function to pause its execution until the promise resolves.

Once the promise resolves, the resolved value is assigned to the variable following await.
Benefits:

Improved readability: Code becomes clearer and less prone to errors compared to nested callbacks.

Error handling: You can use regular try/catch blocks within async functions to handle promise rejections.

Sequential execution: await ensures promises are executed one after the other, maintaining order and simplifying logic.

async function fetchAndPrintRecipe(url) {
  try {
    const response = await fetch(url);

    const recipe = await response.json();

    console.log(`Recipe name: ${recipe.name}`);

    console.log(`Ingredients: ${recipe.ingredients.join(", ")}`);
  } catch (error) {
    console.error(`Error fetching recipe: ${error}`);
  }
}
fetchAndPrintRecipe('https://example.com/recipes/pizza');
Resources:
MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

freeCodeCamp tutorial: https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/

 


function getDataWithPromies() {
  fetch("https://randomuser.me/api/")
  .then((rowata)=>{
    return rowata.json();
  }).then((Data)=>{
    console.log(Data);
  })
}



getDataWithPromies();

async function getDataWithAsync() {
  let raw = await fetch("https://randomuser.me/api/"); // this task is async task so wait for to fetch data
  // let data =  raw.json(); // this dependece on async task but execute imidiatly // so we must made this task also async
  let data = await raw.json();
  console.log(data);
}

getDataWithAsync();

*/
// https://randomuser.me/api/

/* * try and catch - async js
// js is a interpreter based language so it run code line by line after detect error it stop exection code when
// errot found , but when we need to run code after that error without try and catch so it is not posianle

// without try and catch

// console.log("Hey 1");
// console.log(Hey); // give error because hey variable not defined -- and stop execution
// console.log("Hey 2"); // not execute

//with try and catch

console.log("Hey 1"); 
try {
  console.log(Hey); 
} catch (err) {
  console.log(err); // print that error but don't stop exection of program
}
console.log("Hey 2"); // this will print

*/


