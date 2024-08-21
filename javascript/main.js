//  number and its methods
// let num = 12;
// console.log(num);
// let n = Number(100);
// console.log(isFinite(num) = Number.isFinite(num)); // true
// console.log(Number.isInteger(n));

// console.log(Number.isNaN(n)); // check whether NotaNumber or not

// console.log(Number.isSafeInteger(9007199254740991)); // check whether number is max safe or not
// console.log(Number.MAX_SAFE_INTEGER); // maximux safe number

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MIN_VALUE);
// Number.parseInt -. convert into int
// Number.parseFloat -  convert into float integer
// let newNum = 100000;
// console.log(newNum.toLocaleString('IN'))

// let numObj = new Number(120);
// let num = numObj.valueOf();

// console.log(num);

// arithmetic and bitwise
// +, - ,* ,/ , % , & , | , ! , ^ , << , >> ,

// concat, charAt, substring, slice, indexOf, lastIndexOf, toUpperCase, toLowerCase, trim,

// ------------ HC

// let name;

// console.log(name);

// ("use strict");

// var ls = "lol";

// console.log(ls);

// let name = "js";

// console.log(typeof name);

// let age = 18;

// console.log(typeof age);

// let arr = [1,2,3];

// console.log(typeof arr);

// console.log(typeof null);
// console.log(typeof undefined);

// let score = "100";

// console.log(typeof score);
// console.log(typeof score);

// let newScore = Number(score);
// console.log(typeof newScore);

// let score = "why i am score";
// console.log(typeof score); // string

// let newScore = Number(score); // we are tryinhg to convert string variable into number
// // HOW IS THIS POSSIBLE ?
// console.log(typeof newScore); // number

// console.log(newScore);

// let x = undefined;
// let newX = Number(x);
// console.log(newX);

// let isLoggedIn = "1";
// let boolValue = Boolean(isLoggedIn);
// console.log(boolValue); //  true
// // for 0 numberic value its boolean value will be false

// let age = "Hello";

// let boolValue = Boolean(age);

// console.log(boolValue);

// let someNum = 10000;

// let strNum = String(someNum);

// console.log(strNum);
// console.log(typeof strNum);

// let num = 12;

// let negNum = -num;

// console.log(negNum);

// console.log(10 + 6);
// console.log(10 - 6);
// console.log(10 * 6);
// console.log(10 / 6);
// console.log(10 % 6);
// console.log(2 ** 3);

// console.log(isNaN("1")); // true due to type conversion
// console.log(isNaN("LOL")); // false

// let str1 = "Hello ";
// let str2 = "World !!!";

// let str3 = str1 + str2;

// console.log(str3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log(1 + +"2");
// console.log(typeof (1 + "2"));

// console.log(1 + 2 + "3"); // 33
// console.log("1" + 2 + 3); // 123
// console.log(+true); // boolean value true convert into 1

// console.log(undefined < 0); // false

// let arr = [
//   1,
//   3.14,
//   "Hello",
//   true,
//   [4, 5, 6],
//   {
//     // this is object
//     name: "Mark",
//     age: 17,
//   },
//   function () {
//     console.log("omg");
//   },
// ];

// let user = {
//   name: "Utsav",
//   age: 17,
//   marks: [1, 2, 3],

//   printName: function () {
//     console.log(user.name);
//     console.log(this.name);
//   },
// };

// user.printName()

// let name = "Utsav";

// let yName = name; // name value copy to yName
// yName = "Harry"; // here we try to change the value of a yName

// console.log(yName); // harry
// console.log(name); // utsav

// let userOne = {
//     name : "Utsav",
//     age : 17,
// }
// let userTwo = userOne ;
// userTwo.name = "Harry"
// console.log(userOne)
// console.log(userTwo)

// let name = "Utsav";

// console.log("Hello From " + name); // old way to concation
// console.log(`Hello From ${name}`); // new way

// let chai = "green";
// console.log(chai.__proto__); // GOD
// console.log(chai.toUpperCase()); // convert into upper case
// console.log(chai.toLowerCase()); // convert into upper case
// console.log(chai.charAt(1)); // r it print character at any index

// console.log(chai.charAt(chai.length + 1)); // if index is greater than string then " " will return
// console.log(chai.charCodeAt(2)); // we get asccii value of any index

// console.log(chai.indexOf("n")); // give index of sub string

// const subChai = chai.substring(0, 2); // ge start from g and end at e
// const newSubChai = chai.slice(0, 2); // same as above
// const negSubChai = chai.slice(-4, 3); //
// G R E E N
// 0 1 2 3 4

// -4 -> start from end of the string 'r'
// 3 -> start from the begining of the sting only 'e' due it last index will exclude

// console.log(negSubChai);

// let stringArr = chai.split(""); // string convertinto array as per spliter
// we can optional give maxSplit (limit)

// console.log(stringArr);

// console.log(chai.search("g")); // this method serach charcter in string and return index
// if charcater not found than it return -1

// console.log(chai.startsWith("l")); // this method check string start with sub string or not it return boolean value
// same we have endsWith

// let str = "        utsav        ";

// console.log(str.trim()); // remove white space from start and end from the string
// // same we can rmove space from the only start and end

// let strX = "Hello World !!!";

// console.log(strX.replace("o", ")")); // replace only first occurences

// let str = "my name is utsav";

// console.log(str.includes("mark")); // this method check that string contains substring or not

// ---- - Numbers

// let num = 123; // normal variable decalraion
// console.log(num.__proto__);
// let numWithNumber = Number(123); // using  number keyword

// let numWithNewKewyword = new Number(123) // we create a number with number object with the help of new

// console.table([num,numWithNumber,numWithNewKewyword]) // both are same

// console.log(num.toString()); // now 123 convert into string so string method are can be apply

// console.log(num.toFixed(2)); // 123.00
// console.log(num.toFixed(3)); // 123.000

// let newNum = 3.14;
// console.log(newNum.toPrecision(1)); // 3
// console.log(newNum.toPrecision(2)); // 3.1
// console.log(newNum.toPrecision(3)); // 3.14
// console.log(newNum.toPrecision(4)); // 3.140

// let ranchosFatherSalary = 25000000; // from 3 idiots 😂
// bydefault it standard in us format
// we are unable to read it
// js : dont wory
// console.log(ranchosFatherSalary.toLocaleString("en-in")); // salary convert into as per indian starndard

// let max_num = Number.MAX_SAFE_INTEGER;
// let min_num = Number.MIN_SAFE_INTEGER;
// console.log(max_num, min_num);

// console.log(Math);

// console.log((Math.abs(-4))); // only egetive to posive
// console.log(Math.round(4.5)); // as per normal standard
// console.log(Math.ceil(4.5)); // value up
// console.log(Math.floor(4.5)); // value maintain 4

// console.log(Math.pow(2, 3) === 2 ** 3); // true that means both are same

// console.log(Math.min(1,2,3,4,5,6,7,8,9,0)); // give minmum number
// console.log(Math.max(1,2,3,4,5,6,7,8,9,0)); // give maximu number

// most important method

// Math.random() it give random number between 0 and 1

// console.log(Math.random() * 10); // now value b/w 0 to 10
// console.log(Math.random() * 10 + 1); // now value b/w 1 to 10

// let min = 10;

// let max = 100;

// console.log(Math.floor(Math.random() * (max - min + 1) + min));
// now value always be 10 to 100

// let date = new Date();
// console.log(typeof date); // object
// // console.log(date);
// // in node - 2024-05-03T09:27:51.563Z // ISO string
// // in browser may print somethign diffrent
// // console.log(date.toString());
// // Fri May 03 2024 14:59:35 GMT+0530 (India Standard Time)
// // now readble

// console.log(date.toDateString());
// // console.log(date.toISOString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());

// let myDate = new Date(2024, 1, 1); // this own date
// here month start from 0 (means 0 0 => jan , 1=> Feb)

// let myDate = new Date(2024, 1, 1, 22, 45, 90);
// note here second is 90 which is wrong but in output 30 second added to the minutes
// let indiaDate = new Date("2024-05-03");
// console.log(indiaDate);

// let timeNow = Date.now();

// console.log(Date(timeNow));

// we can retrive date, year , fullyear, month, date , time ,hour ,second etc // even in UTC

// console.log(Math.floor(Date.now() / 1000)); // we convert millisecond into second

// let date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());

// date.toLocaleString("default", {
//   weekday: "long",
//   month: "short",
// });

// console.log(date);

// ---------------------- array -----------

// let arr = [1, 2, 3.14, true];

// let hero = ["iron man", "shakiman", "super man"];

// const arrWithArr = new Array(1, 2, 3);

// console.table(hero[0]);
// console.table(hero[1]);
// console.table(hero[2]);
// console.table(hero[3]); // undefined
// let arr = [1, 2, 3];
// arr.push(8, 9, 10); // add element at last
// let t1 = performance.now();
// let removedLastEle = arr.pop(); // remove and return last element
// let t2 = performance.now();

// let t3 = performance.now();
// // wrost to method it take to much time to execute operation
// arr.unshift("x", "y"); // add element at first and change all existing element index

// let removedFirstEle = arr.shift(); // remove and return first element
// let t4 = performance.now();

// console.log(arr);
// console.log(
//   `Last Element removed ${removedLastEle} and operation take ${t2 - t1},
//   First Element removed ${removedFirstEle} and operation take ${t4 - t3}`
// );

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr.includes(2)); // return booloean
// console.log(arr.indexOf(0)); // -1 because 0 not avialbel in arr

// console.log(arr.join()); /// join into one string

// // slice and splice

// console.log(arr.slice(1, 4)); // return a copy for start and end section
// // do not modify array

// let partOfArr = arr.splice(1, 4); // last index include
// console.log(arr); // hmm affect oribinal array
// console.log(partOfArr);

// const marvel_heros = ["thor", "Ironman", "spiderman"];
// const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); // go wrong array inside array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // flash
// let numArr = [1, 2, 3];
// let all_hero = marvel_heros.concat(dc_heros, numArr); // ok good

// console.log(all_hero);
// // new way  +++

// let hero_all = [...marvel_heros, ...dc_heros]; // spread operator

// console.log(hero_all);

// let arr = [1, 2, 3, [4, [5, 6, [7, [8, 9]]]], 0];
// array insside array , at 4 level

// console.log(arr);
// convert into 1 array

// let singleArr = arr.flat(5); // 5 nested level can convert into aarray

// arr.flat(Infinity); at all level
// console.log(singleArr);

// console.log(Array.isArray("Hello")); // return boolean value
// check given paramter is array or not

// console.log(Array.from("Hello")); // convert into array

// console.log(Array.from({ name: "Utsav" })); // most intersing case return []

// console.log(Array.of({ name: "Utsav" }));

// let num1 = 1;
// let num2 = 2;
// let num3 = 3;

// let newArray = Array.of(num1, num2, num3);

// console.log(newArray);

// Object.create()
// let car = {
//   name: "BMW", // in behinde name will treat as 'name'
//   model: "i3",
//   year: 2023,
// };

// console.log(car.name);
// console.log(car["year"]);

// let newObj = new Object({
//   name: "BMW",
//   model: "i3",
//   year: 2023,
// });

// console.log(newObj == car); // both object store at differnt memory
// console.log(Object.is(car, newObj));

// let gender = Symbol("male");
// let user = {
//   name: "Utsav",
//   age: 17,
//   isStudent: true,
//   // // gender: "male", // not working
//   [gender]: "male", // its a synatx and symboled key property
// };

// // console.log(typeof user.gender); // string insted of symbol
// // console.log(typeof user[gender]); // string insted of symbol

// user["email"] = "utsav@gmail.com"; // add at last

// // Object.freeze(user); // freeze the object no edit or n update

// user["age"] = 100;
// user["haveFourLeg"] = false;

// user.greet = function () {
//   console.log(`hello user`);
// };

// user.advanceGreet = function () {
//   console.log(`Hello , ${this.name}`);
// };

// console.log(user);
// user.greet();
// user.advanceGreet()

// let userOne = new Object(); // singletone object
// console.log(userOne);
// let user = {}; // non singletone object
// user.id = 101;
// user.name = "Sam";
// user.isLoggedIn = false;
// // console.log(user);

// let userTwo = {
//   id: 101,
//   fullName: {
//     userFullName: {
//       firstName: "Utsav",
//       lastName: "Dhimmar",
//     },
//   },
// };

// console.log(userTwo.fullName?.userFullName.firstName);
// merger two object
// let objOne = {
//   1: "a",
//   2: "b",
// };

// let objTwo = {
//   3: "c",
//   4: "d",
// };

// // let objThree = { objOne, objTwo }; // it create problem
// let objThree = Object.assign({}, objOne, objTwo);
// // here {} usefull when we have multiple object and it is optional
// // if we don't write `{}` than all second source object copy into first object scource
// let objFour = { ...objOne, ...objTwo }; // spread operator
// console.log(objThree);
// console.log(objFour);

// when we recive data from database majurly time data recevide in below formate

// let data = [
//   {
//     id: 101,
//     name: "Utsav",
//   },
//   {
//     id: 102,
//     name: "Sam",
//   },
//   {
//     id: 103,
//     name: "Mark",
//   },
// ];

// console.log(data[0].id);
// console.log(Object.keys(user)); // all key put in one array
// console.log(Object.values(user)); // all value put in one array
// console.log(Object.entries(user)); // all key value pair put in array // les use

// console.log(user.hasOwnProperty("gender")); // check any key avilable or not return boolean value

// // desctructiong object

// // let { name } = user;
// let { name : userNaem } = user; // same as above just we give alternative name

// console.log(name);

//       -  -------- function -----

// function addTwoNum(num1, num2) {
//   if ((typeof num1 !== "number" || typeof num2 !== "number") || (!num1 || !num2)) {
//     throw new Error(
//       `Both input ${typeof num1 !== "number" ? num1 : num2} must be number`
//     );
//   } else {
//     return num1 + num2;
//   }
// }

// console.log(addTwoNum(1, 12));

// function add(...num1) { // spread operator return array
//   return num1;
// }

// console.log(add(1, 1, 2, 3, 4));

// let arr = [1,2,3,4];

// function returnval (array){
//   return array[1];
// }

// console.log((returnval(arr)));

// function one() {
//   const name = "Utsav";

//   function two() {
//     const age = 17;

//     console.log(name);
//   } // all the statement of function two destory here
//   two();
//   // console.log(age); // throw error
// }

// one();

// let user = {
//   username: "Utsav",
//   age: 17,
//   welcomeMsg: function () {
//     console.log(`Hello ${this.username}`);
//   },
// };

// user.welcomeMsg()

// console.log(this);
// // in node this -> { }
// // in browser this -> window object
// const lol = () => ({ username: "Utsav" });
// console.log(lol())

// (function () {
//   let x = 12;
//   console.log(x);
// })();
// console.log(x); // raised error

// (
//   (name = "JS")=>{
//     console.log(name);
//   }
// )('utsav');
// var a= 123;
// let v1 = 10;
// let v2 = 5;

// function add(num1, num2) {
//   let ans = num1 + num2;
//   return ans;
// }

// console.log(add(v1, v2));
// console.log(add(100, 100));

// function one() {
//   console.log("Hello From Function one");
//   two()
// }

// function two() {
//   console.log("Hello From Function Two");
// }
// one();

// let num = [1, 2, 3, 4];

// for (let value of num) {
//   console.log(value);
// }

// let greet = "Hello World";

// for (let ch of greet) {
//   if (ch == " ") {
//     continue;
//   }
//   console.log(ch);
// }

// let map1 = new Map();

// map1.set("1", 1);
// map1.set("2", 2);
// map1.set("3", 3);
// map1.set("1", 1);

// console.log(map1);
// console.log(map1.get("1"));
// console.log(map1.get("z"));

// console.log(map1.keys());
// console.log(map1.values());
// console.log(map1.has('z'));
// let one = map1.entries();

// console.log(one.next().value);
// console.log(one.next("2"));
// console.log(map1.size);
//
// let mapvalues = map1.values()
// console.log( mapvalues);

// let map1 = new Map();

// map1.set("1", 1);
// map1.set("2", 2);
// map1.set("3", 3);
// map1.set("1", 1);

// for (let [key, value] of map1) {
//   console.log(`${key} :- ${value}`);
// }

// console.log(map1);

// let obj = {
//   name: "Utsav",
//   age: 17,
// };

// let arr = ['html','css','js','react js','next js','express js']

// for (let key in map1) {
//   console.log(key);
// }

// language.forEach(function (val) {
//   console.log(val);
// });

// let loopval = language.forEach((value, index, arr) => {
//   console.log(`${value} index is ${index} in ${arr}`);
//   if (value === "Java") {
//     return value
//   }
// });

// console.log(loopval);
// function printArr(value) {
//   console.log(value);
// }

// language.forEach(printArr);

// const users = [
//   {
//     id: 101,
//     name: "Utsav",
//   },
//   {
//     id: 102,
//     name: "Harry",
//   },
//   {
//     id: 103,
//     name: "Mark",
//   },
//   {
//     id: 104,
//     name: "Sam",
//   },
// ];

// users.forEach((user) => {
//   console.log(`at ${user.id} username is ${user.name}`);
// });

// let language = ["JavaScript", "C", "C++", "Java", "Python"];

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // let evenNumber = numberArray.filter((number) => {
// //   return number % 2 === 0;
// //   // number & 1 === 1
// // });

// let evenNumber = numberArray.filter((num) => num % 2 === 0); // implicit return
// console.log(evenNumber);
// // same with forEach

// let newNum = [];

// numberArray.forEach((num) => {
//   if (num % 2 === 0) {
//     newNum.push(num);
//   }
// });

// console.log(newNum);

// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
//   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
//   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
//   { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
// ];

// let userBook = books.filter((book) => {
//   return book.genre === "History";
// });

// console.log(userBook);

// let after2000 = books.filter((book)=>{
//     return book.publish >= 2000;
// })

// console.log(after2000);

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let valuePlus10 = numberArray.map((num) => {
//   return num + 10;
// });

// let newArray = [];

// numberArray.forEach((num) => {
//   newArray.push(num + 10);
// });

// console.log(valuePlus10);
// console.log(numberArray);
// console.log(newArray);

// let newNumArr = numberArray
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num > 60);

// console.log(newNumArr);

//

// let num = [1, 2, 3, 4, 5];

// let sum = 0;

// let totalArr = num.reduce((acc, cValue) => {
//   console.log(`${acc} :- ${cValue}`);
//   return acc + cValue;
// }, sum); // the whole reduce method start from here init value , it start form inital value than reduce method start

// console.log(totalArr);
// console.log(sum);

// const shoppingCart = [
//   {
//     itemName: "js course",
//     price: 2999,
//   },
//   {
//     itemName: "py course",
//     price: 999,
//   },
//   {
//     itemName: "mobile dev course",
//     price: 5999,
//   },
//   {
//     itemName: "data science course",
//     price: 12999,
//   },
// ];

// const total = shoppingCart.reduce((acc, cValue) => acc + cValue.price, 0);

// console.log(total);

// let h1Ele = document.querySelector('h1');
// // let h1Ele = document.querySelectorAll('h1');
// console.log(h1Ele.innerText);
// console.log(h1Ele.textContent);
// console.log(h1Ele.innerHTML);

// let weekDiv = document.querySelector(".weekday");

// console.log(weekDiv.children);

// const div = document.createElement("div");

// div.innerText = "Hello World from JS";
// div.setAttribute("title", "hello from js");
// div.style.backgroundColor = "red";
// div.style.padding = "4rem";
// let txt = document.createTextNode('Hello World from js');
// div.append(txt); //  multiple element or can be string
// weekDiv.appendChild(div); // only one element can add

// const t1 = performance.now();

// function addListItems(langauge) {
//   let li = document.createElement("li");
//   li.textContent = `${langauge}`;
//   document.querySelector(".langauges").appendChild(li);
// }

// // addListItems("C")
// addListItems("C");
// addListItems("C++");
// addListItems("Golang");

// const t2 = performance.now();

// console.log(t2 - t1);

// const t3 = performance.now();
// function addListItems(langauge){
//     let li = document.createElement('li');
//     li.appendChild(document.createTextNode(langauge))
//     document.querySelector('.langauges').appendChild(li)
// }

// addListItems("C")
// addListItems("C++")
// addListItems("Golang")
// const t4 = performance.now();
// console.log(t4 - t3);

// edit

// const secLangauge = document.querySelector("li:nth-child(2)");
// console.log(secLangauge);
// secLangauge.textContent = "Mojo"

// document.getElementById("owl").addEventListener(
//   "click",
//   function (e) {
//     console.log(e);
//   },
//   false
// );

// document.addEventListener("click", (e) => {
//   console.log(e.altKey, e.ctrlKey, e.shiftKey);
// });

// document.addEventListener("keydown", (e) => {
//   console.log();
// });

// document.querySelector(".box1").addEventListener(
//   "click",
//   () => {
//     console.log("Box 1 Clicked from parent");
//   },
//   true
// );

// document.querySelector(".box2").addEventListener(
//   "click",
//   () => {
//     console.log("Box 2 Clicked from child");
//   },
//   true
// );

// document.getElementById("google").addEventListener(
//   "click",
//   (e) => {
//     console.log("google clicked");
//     e.preventDefault();
//     e.stopPropagation();
//   },
//   false
// );

// // remove image when we click

// document.getElementById("images").addEventListener(
//   "click",
//   (e) => {
//     if (e.target.tagName === "IMG") {
//       let remEle = e.target.parentNode;
//       remEle.remove();
//     }
//   },
//   false
// );

// function one() {
//   console.log("1. hello  from function one");
//   function two() {
//     console.log("2. hello  from function two");
//     setTimeout(function () {
//       console.log("Hello From setTimeout !!!");
//     }, 2000);
//   }
//   two()
// }

// one();

// const changeH2 = function () {
//   document.querySelector(
//     "h2"
//   ).innerHTML = `JavaScript is best for web develpoment`;
//   console.log("start ");
// };

// const change = setTimeout(changeH2, 5000);

// document.getElementById("stop").addEventListener("click", () => {
//   console.log("now stoped");
//   clearTimeout(change);
// });

// setTimeout(function () {
//   console.log("after 2 second i will print");
// }, 2000);

// change color in every second
// with the help of hex value

// function genrateColor() {
//   let colorHex = `0123456789ABCDEF`;
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += colorHex[Math.floor(Math.random() * 16)];
//   }
//   console.log(color);
//   return color;
// }

// // first genrate color

// // than tack a referensec fot the two button
// const startBtn = document.querySelector("#start");
// const stopBtn = document.querySelector("#stop");
// // start change background color

// let interval = null;

// let startBGchange = () => {
//   if (!interval) {
//     // from preveing multiple chnage color when user click nultiple time on start
//     interval = setInterval(changeColor, 1000);
//   }
//   function changeColor() {
//     document.body.style.backgroundColor = genrateColor();
//   }
// };

// let stopBGchnage = () => {
//   clearInterval(interval);
//   interval = null; // good pratice
//   // edge case DSA
// };

// startBtn.addEventListener("click", startBGchange);
// stopBtn.addEventListener("click", stopBGchnage);

// const GITHUBURL = "https://api.github.com/users/hiteshchoudhary";
// let xhr = new XMLHttpRequest();

// xhr.open("GET", GITHUBURL, true);

// xhr.send();

// function displayOnPage(url, imgURl, name, followers, bio) {
//   document.body.innerHTML = `<section class="h-screen w-screen flex items-center justify-center text-black">
//   <div class="max-w-screen-sm m-4 flex flex-col rounded-xl bg-slate-300 p-2 duration-300 h-72">
//     <div class="m-3 flex items-center justify-center">
//       <a href=${url} target="_blank">
//         <img src=${imgURl} alt="img" class="w-24 rounded-xl hover:cursor-pointer hover:shadow-2xl" title="visit gihub url" />
//       </a>
//     </div>
//     <div class="bg-green-400 p-4 text-center font-semibold">
//       ${name}
//       <p><span class="font-normal capitalize"> followers </span> : ${followers}</p>
//     </div>
//     <div class="flex items-center py-2 text-center">
//       <p class="text-lg">Bio:-</p>
//       <p class="ml-3 hover:shadow">${bio}</p>
//     </div>
//   </div>`;
// }

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     let data = JSON.parse(this.response); // get string conver into object
//     displayOnPage(
//       GITHUBURL,
//       data.avatar_url,
//       data.name,
//       data.followers,
//       data.bio
//     );
//   } else {
//     document.body.innerHTML = `<div class="h-screen w-screen bg-slate-900 flex items-center justify-center ">
//     <h2 class="text-center text-4xl capitalize p-4 text-white font-bold">unable to load data from github status code :- ${xhr.status}</h2>
//   </div>`;
//   }
// };

// xhr.onerror = function () {
//   document.body.innerHTML = `<div class="h-screen w-screen bg-slate-900 flex items-center justify-center ">
//   <h2 class="text-center text-4xl capitalize p-4 text-white font-bold">unable to load data from github status code :- ${xhr.status}</h2>
// </div>`;
// };

// const primoseOne = new Promise(function (resolve, reject) {
//   // async task
//   // DB call
//   // cryptography, network

//   setTimeout(function () {
//     console.log(`async task complete successfuly`);
//     resolve(); // connet with .than
//     // if this line we didn't write than .than never execute
//   }, 1000);
// });
// primoseOne.then(function () {
//   console.log(`promises consumed`);
// });

// new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log(`async task 2 complete`);
//   }, 1000);
//   res();
// }).then(() => {
//   console.log(`promises 2 consumed`);
// });

// let promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "Utsav", email: "utsav@example.com" });
//   }, 1000);
// });

// promiseThree.then((user) => {
//   console.log(user.username);
// });

// let promiseFour = new Promise((res, rej) => {
//   setTimeout(() => {
//     let err = false;
//     if (!err) {
//       res({ username: "Utsav", age: 17 });
//     } else {
//       rej("something wrong");
//     }
//   }, 2000);
// });

// promiseFour
//   .then((data) => {
//     if ("username" in data) {
//       return data.username;
//     } else {
//       return "JavaScript";
//     }
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     console.log(`promise Four complete successfully or with error`);
//   });

// const promiseFive = new Promise((res, rej) => {
//   setTimeout(() => {
//     let err = false;
//     if (!err) {
//       res({ username: "utsav", age: 17 });
//     } else {
//       rej("SOMETHING WRONG");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     let res = await promiseFive;
//     let username = "JavaScript";
//     if ("username" in res) {
//       username =  res.username;
//     }
//     console.log(username);
//   } catch (err) {
//     console.error(err);
//   }
// }

// consumePromiseFive();

// async function apifunction() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonData = await response.json();
//     console.log(jsonData);
//   } catch (err) {
//     console.error(err);
//   }
// }

// // apifunction();

// const APIURL = "https://jsonplaceholder.typicode.com/users";

// fetch(APIURL)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// fetch(APIURL, {
//   method: "post",
// });

// const user = {
//   name: "Utsav",
//   age: 17,
//   gender: "male",
//   getUserInfo: function () {
// console.log(
//   `Hi ${this.name} and ${this.gender == "male" ? "his" : "her"} age is ${
//     this.age
//   }`
// );
//     console.log(this);
//   },
// };

// console.log(user); // whole object
// user.getUserInfo(); // function called

// function User(userName, age, gender) {
//   // variable   = value
//   this.userName = userName;
//   this.age = age;
//   this.gender = gender;

//   this.greet = function () {
//     console.log(
//       `Hi ${this.name} and ${this.gender == "male" ? "his" : "her"} age is ${
//         this.age
//       }`
//     );
//   };

//  // return this; // optional
// }

// let userOne = new User("utsav", 17, "male");

// let userTwo = new User("Sam",23,'male');

// console.log(userOne.constructor); // reference to itself
// console.log(userTwo);
// console.log(userOne instanceof User);

function multiplyBy5(num, x, name) {
  this.x = x;
  this.name = name;
  return Number(num * 5);
}

multiplyBy5.power = 10;

// console.log(multiplyBy5(5, 10)); // 25
// console.log(multiplyBy5.power); // 10
// console.log(multiplyBy5.prototype); // why {}
// console.log(multiplyBy5); // whole function definition

// let x = new multiplyBy5(10, 1000, "harry");
// let y = new multiplyBy5(10, 1000, "raju");

// function createUser(username, score) {
//   this.username = username;
//   this.price = score;
// }

// createUser.prototype.increment = function () {
//   // score++; // not work because current context is missing
//   this.price++;
// };

// createUser.prototype.printPrice = function () {
//   console.log(`price is ${this.price}`);
// };

// console.log(createUser);
// console.log(createUser.prototype);
// let one = new createUser("Utsav", 100);

// one.printPrice();

// one.increment();
// one.printPrice();

// one.increment();
// one.printPrice();

let myName = "Utsav     ";

// console.log(myName.length); // give 10 but their is only 5 character and 5 spaec
// for removing space and for real length for string i need to use trim() method like this

// console.log(myName.trim().length); // remove white space and give length

// what if i need to make function for this

// answer

// String.prototype.trueLengthOfString = function () {
//   console.log(this);
//   return console.log(Number(this.trim().length));
// };

// myName.trueLengthOfString();

// let heroArr = ["Thor", "Spider man"];

// let heroPower = {
//   thor: "Hammer",
//   spiderman: "spidy",

//   getSpiderPower: function () {
//     console.log(`spider man power is ${this.spiderman}`);
//   },
// };

// Object.prototype.UtsavSayHello = function () {
//   console.log(`Hello from Utsav `);
// };

// // heroPower.getSpiderPower();
// // heroArr.getSpiderPower()

// heroPower.UtsavSayHello();
// heroArr.UtsavSayHello();

// let human = {
//   canFly: false,
//   canTalk: true,
//   willDead: true,
// };

// let itsMe = {
//   name: "Utsav",
//   // __proto__: human, // older syntax
// };

// // itsMe.__proto__ = human
// Object.setPrototypeOf(itsMe,human); // newer syntax

// console.log(itsMe);

// console.log(this)

// function x() {
//   console.log(this);
// }
// x();

// let user = {
//   name: "Utsav",
//   age: 17,

//   printUserInfo: function () {
//     console.log(`i am ${this.name} , i am ${this.age}`);
//     console.log(this);
//   },
// };

// user.printUserInfo()

// function setUser(username) {
//   this.username = username;
//   console.log("called");
// }
// // problem is that above function is called but its execution context destrory
// function createUser(username, email, password) {

//   // setUser(username); // not working

//   setUser.call(this, username);
//   this.email = email;
//   this.password = password;
// }

// let userOne = new createUser("Utsav", "utsav@example.com", "123");
// console.log(userOne);

// function one(name, age) {
//   console.log(`${name} age is ${age}`);
// }
// one.apply(this, ["utsav", 17]);

// function one() {
//   console.log(this);
// }
// let harry = { username: "harray" };
// one.call(harry);

// function person(name, age) {
//   console.log(`${name} age is ${age}`);
// }
// let itsMe = { name: "Utsav" };

// const bindFunction = person.bind(this, itsMe.name, 90);

// bindFunction();

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPass() {
//     return console.log(`${this.password}${Math.random() * 10}`);
//   }
// }

// let userOne = new User("Utsav", "utsav@example.com", 123);

// console.log(userOne);

// userOne.encryptPass();

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPass = function () {
//   return console.log(`${this.password}${Math.random() * 100}`);
// };

// let userOne = new User("Utsav","utsav@example.com",123);

// console.log(userOne);

// userOne.encryptPass()

// class User {
//   constructor(username) {
//     this.username = username;
//   }

//   printUserInfo() {
//     console.log(this.username);
//   }
// }

// class Teacher extends User {
//   constructor(username, email, password) {
//     super(username); // same as call method

//     this.email = email;
//     this.password = password;
//   }

//   TeacherInfo() {
//     console.log(`teacher name is ${this.username} and email ${this.email}`);
//   }
// }

// const ht = new Teacher("hitesh houdhary","ht@example.com",123);

// console.log(ht);

// ht.TeacherInfo();

// const userOne = new User("Utsav");

// console.log(userOne);

// userOne.printUserInfo();

// ht.printUserInfo()
// console.log(ht instanceof Teacher);
// console.log(ht instanceof User);

// // userOne.TeacherInfo(); // it will not work

/**
 * User Class that contains username and static method for only class
 * @param User (username)
 */
// class User {
//   constructor(username) {
//     this.username = username;
//     User.userCount++;
//   }

//   logMe() {
//     return console.log(this.username);
//   }
//   static userCount = 0;
//   static TotalUser() {
//     return console.log(`total user ${this.userCount}`);
//   }
// }

// let userOne = new User("utsav");
// let userTwo = new User("Sam");

// console.log(userOne);
// console.log(userTwo);

// User.TotalUser();

// class itsMe extends User {
//   constructor(username, email) {
//     super(username);
//     this.email = email;
//   }
// }

// let utsav = new itsMe("utsav", "utsav@exmpale.com");

// console.log(utsav);

// itsMe.TotalUser()

// class React {
//   constructor() {
//     this.library = "React";
//     this.server = "https://localhost:3000";

//     document
//       .getElementById("btn")
//       .addEventListener("click", this.handleClick.bind(this));
//   }
//   handleClick() {
//     console.log("Button Click server: ", this);
//   }
// }

// new React();

const info = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(info);

// console.log(Math.PI);

// Math.PI = 5;

// console.log(Math.PI);

// const chai = {
//   name: "Green Tea",
//   price: 250,
//   isAvailable: true,

//   printInfo: function () {
//     console.log(`${this.name} - price ${this.price}`);
//   },
// };

// console.log(Object.getOwnPropertyDescriptor(chai, "price"));

// Object.defineProperty(chai, "price", {
//   writable: false, // now we can't write
//   enumerable: false, // price can't loop
// });

// console.log(Object.getOwnPropertyDescriptor(chai, "price"));

// chai.price = 2000;

// console.log(chai);

// for (let [key, value] of Object.entries(chai)) {
//   if (typeof value !== "function") {
//     console.log(`${key} : ${value}`);
//   }
// }

// class User {
//   constructor(username, email) {
//     this.username = username;
//     this.email = email;
//   }

//   get username() {
//     return this._username.toUpperCase(); // geting value
//   }

//   set username(value) {
//     this._username = value; // seting the value
//   }

//   get email() {
//     return this._email.toUpperCase();
//   }

//   set email(value) {
//     this._email = value;
//   }
// }

// const utsav = new User("Utsav", "utsav@example.com");
// console.log(utsav);
// console.log(utsav.username);

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   get firstName() {
//     return this._fname;
//   }

//   set firstName(fname) {
//     this._fname = fname.toUpperCase();
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// let utsav = new Person("Utsav", "Dhimmar");

// console.log(utsav.fullName);

// function User(username, pass) {
//   this._username = username;
//   this._pass = pass;

//   Object.defineProperty(this, "username", {
//     get: function () {
//       return this._username.toUpperCase();
//     },
//     set: function (value) {
//       this._username = value;
//     },
//   });

//   Object.defineProperty(this, "pass", {
//     get: function () {
//       return this._pass.toUpperCase() + 123;
//     },
//     set: function (value) {
//       this._pass = value;
//     },
//   });
// }

// let User = {
//   _username: "Utsav",
//   _pass: "abc",
//   get: function () {
//     return this._pass.toUpperCase() + 123;
//   },
//   set: function (value) {
//     this._pass = value;
//   },
// };
// //
// const utsav = Object.create(User)

// console.log(utsav._username);

// let arr = [1,2,3];

// arr.length = 0;

// console.log(arr);
// function init() {
//   var name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// }
// init();

// function outer() {
//   let username = "utsav";

//   function inner() {
//     let num = 123;
//     console.log(username);
//   }
//   function innerTwo() {
//     console.log(username);
//     console.log(num); /// give error
//   }
//   inner();
//   innerTwo();
// }

// outer();
// console.log(username); // give error

// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// console.log(myFunc());
// myFunc();

// document.getElementById("orange").onclick = function () {
//   document.body.style.backgroundColor = "orange";
// };
// document.getElementById("green").onclick = function () {
//   document.body.style.backgroundColor = "green";
// };

function clickHandler(color) {
  // return function () {
  //   document.body.style.backgroundColor = color;
  // };
  function changecolor() {
    document.body.style.backgroundColor = color;
  }
  return changecolor;
}

let colors = ["red", "green", "blue", "pink"];

let cColor = colors.map((c) => {
  return c;
});

document.getElementById("orange").onclick = clickHandler(cColor);
document.getElementById("green").onclick = clickHandler("green");

colors.map((c) => {
  console.log(c);
});
