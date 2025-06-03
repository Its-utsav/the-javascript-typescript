/*=========================== VARIABLE =================

const name = "Javascript"; // constant so it can't be change 
let age = 17; // it can change 
var name2 = "Node JS"; // it can change

// console.log(name);  // this will print name variable value 
console.table([name,age,name2])

*/
///
/* =============================== DATATYPES ====================
"use strict"; // treat all JS code as newer version

// in programming readablity is king 
// console.log("hello") console.log("Hi") // this is 100% error + non raedable

// console.log("hello"); console.log("Hi") // this will run but not raedable 

// console.log(3
//     +
//     3
//     ); // this is also not readable

 ======================= datatypes ==============================
 javascrript is Dynamically typed languages so we don't need to specifiy variable datatype.
// Primitives datatypes
let name = "Hello"; // string datatype
let age = 50; // number
let name2 = "hello"; // string
let bol = true; // boolean datatype
let what = null; // standalone value
let hoho ; // undefined
// symbol => uniqe
// BigInt
console.log(Number.MIN_SAFE_INTEGER); //
console.log(Number.MAX_SAFE_INTEGER); // task safely perform till this 2 number
let sy = Symbol('@');
let sy2 = Symbol('@');
console.log(sy==sy2); // it return fasle 

// if we cross the number limit & we need to perform task than use bigint 

console.log(BigInt(3)); // 3n

// object
let age = 12;
console.log(typeof age); // number type

console.log(typeof null); // object
console.log(typeof undefined); // undefined


Non-primitives (or Reference types):- Object, Array, function
Array:-
let names = ["Utsav","Harry","Mark" ];
Object:-
let bio = {
    name : "Mark",
    age : 12
} 
Function:-
function f1() {
    console.log("i am in function");
}
f1();
*/
//
/* ================== type conversion ================
// let num = 45; // number
// let num1= '45'; // string

// let newNum = Number(num1); // now num1 became number that all rigth
// console.log(typeof newNum);

// let reNum = "45 rohit";
// // // console.log(typeof reNum); // it retuen string
// // let reReNum = Number(reNum); // became number
// // console.log(typeof reReNum); //it retuen number in spite of having  'rohit' in variable
// // console.log(reReNum); // oops !!! it retuen NaN means it is a Not a Number WTF ??????
// // let num = 23;
// // console.log(isNaN(num)); // if givan parameter is number than it return false if other tahn number it return true
// console.log(isNaN(reNum)); // true

// 1 => true; 0 => false
// "" => false
// "utsav" => true

// let num = 33;
// let stringnum = String(num); // now string 
// console.log(stringnum); 
// console.log(typeof stringnum); // 

// 
*/
//
/* =============== opretions
let a = 20;
let b = 30;
console.log(a + b); // simple opreations 
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(2**3); // return 8 = 2*2*2

===================  addition + MEME
let name = "Mark";
let surName = "Div";
console.log(name + " " + surName);
console.log(name + " " + surName);

// MEME start here


console.log('a'+'b'); // ab
console.log('a'+ + 'b'); // aNaN  // a will print than js try to convert second oprands to number but in this b so it cant 


console.log(1+2); // 3
console.log('1'+ 2); // 12 hahahahahaah 
console.log('1'+ + 2); // still 12 first is string but second is number , string will print than it try to convret 2 biu it cant convert 


// console.log(2 + +"2"); // 4 because second operands is string os conversion is possiable 
console.log("1" + 2 + 2); // first is string so it concinate string
console.log(2 + 2 + "0"); // first addtion than add 0
console.log("2" + +"2" + +"3"); // 233
console.log(2 + +"2" + +"3"); // 7
console.log("2" + + 2 + +"3"); // still string 
============= meme over while writing  

// Relational operators return Boolean values
let a = 12;
let b = 24;
console.log(a==b);  // check 12=24 of cource not 
console.log(a===b);  // check 12=24 of cource not an even check datatype  
console.log(a<b); // 12<24 true
console.log(a<=b); // 12<=24 true
console.log(a>b); // 12>24 false 
console.log(a>=b); // 12>=24 false 
console.log(a!==b); // 12!= 24 yes even check datatype

console.log(null > 1);  // 0 > 1 false
console.log(null < 1); // 0 < 1 true
console.log(undefined < 1); // this Comparison not Possible mean false
console.log(undefined > 1);

// Bitwise  operators perforem at binary level
// Bitwise shift operators

let a = 2;
let b = 3;
console.log(a<<b); // 16
console.log(a>>b);  // 0


// Bitwise operators 
let a = 12;
let b = 24;
console.log(a&b);  //  8 AND
console.log(a^b); //  20 WOR
console.log(a|b); // 28 OR
*/
//
/*  ======    Stack & Heap ==============
Stack (primitive),
Heap (Non - primitive).

Stack:

->The stack is a region of memory that is used for storing function call information, local variables, and management of function invocation.
->Each time a function is called, a new stack frame is created, which includes information such as local variables and the return address.
->The stack operates in a Last In, First Out (LIFO) fashion, meaning that the last function called is the first one to finish, and its stack frame is removed.
not ditect change in orignal 


Heap:
->The heap is a larger region of memory that is used for dynamic memory allocation. It is where objects and data with a longer lifetime are stored.
->Objects in the heap are not automatically deallocated when they are no longer needed, and it's the responsibility of the JavaScript runtime (e.g., the garbage collector) to manage memory and reclaim unused space.
->Variables in the heap are accessed through references, and these references are stored in the stack.
chage direct to orignal 
*/
//
/* ========== STRING ================= 
2 way to decare strings
1. is " " & 2.  is ' ' 

addition string
let name = "utsav";
let age = 17;
// console.log(name + " is " + age + " year old boy."); // oh shitttt!!!!!!!! old way

//console.log(`${name} is ${age} year old boy.`); // new way 😎

// console.log(name[0]); 
// console.log(typeof name);
let name = "Hello";    U_U
just an example so many imptant method are pandding 
// console.log(name.anchor()); //  it return anchor tag
// console.log(name.at(1)); // it return charcter at index postion  bydefault 0 , strt from left
// console.log(name.at(-1)); // it return charcter at index postion  bydefault 0 , strt from right
// console.log(name.big()); // it return big tag
// console.log(name.blink()); //it return blink tag
// console.log(name.bold()); //it return bold tag
// console.log(name.charAt(-)); // same as at but dont take negative values
// console.log(name.charCodeAt(1));  // return character code at index number
// console.log(name.charCodeAt(-1));  // return character code at index number  NaN
// console.log(name.codePointAt(1)); // same as charCodeAt
// console.log(name.codePointAt(-1)); // same as charCodeAt undefined
// console.log(name.concat(" hi")); // concat two string 
// console.log(name.endsWith("o")); // retuen boolean datatypes if given parameter ends with string
// console.log(name.constructor("o")); //
// console.log(name.fixed());   // return tt tag
// console.log(name.fontcolor()); //<font color="undefined">Hello</font> 
// console.log(name.includes("H")); // retuen true if given string present in orignal string casesencitve if 
// console.log(name.indexOf("l")); // reurn first index, if string is  casesensitive it return -1
// console.log(name.isWellFormed()); // return true
// console.log(name.italics()); // return italic tag of html
// console.log(name.lastIndexOf("o")); // return last index if string is  casesensitive it return -1
// console.log(name.link()); // return achonr tag
// console.log(name.localeCompare("hello")); //
// console.log(name.match("e")); // return array with character,index , string, group 
// console.log(name.matchAll("H")); //
// console.log(name.normalize()); //



*/
//
/* ========= NUMBER ==========

let num = 23;
let newNum = new Number (23);
console.log(newNum);

let num = 36;

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(isNaN(num));
console.log(Number.POSITIVE_INFINITY);


let num = 360000;

// console.log(num.valueOf);  // 360000
// console.log(num.toLocaleString()); // 3,60,000
// console.log(num.toLocaleString('en-us')); // 360,000
let newNum = 36.25;
// console.log(newNum.toFixed(1)); // 36.3
// console.log(newNum.toFixed(10)); // 36.2500000000
// console.log(newNum.toExponential(1));
// console.log(newNum.toPrecision(5)); // 36.250
*/
//
/*     ========= MATH ===========
console.log(Math);

// let num1 = 32;
// let num2 = 32.32;
// let num3 = -32.32;
// console.log(Math.abs(num3)); // retuen abs value if number is negitive than it give positive value
// console.log(Math.acos(0.3)); // parameter beteen -1 to 1
// console.log(Math.acosh(num1)); // parameter  1 or grater than 1
// console.log(Math.round(num2)); // math rounf
// console.log(Math.ceil(num2)); //  + 1 round
// console.log(Math.floor(num2)); //  round
// console.log(Math.pow(2,3)); // 8
// console.log(Math.random()); // random number between -1 to 1
// console.log(Math.random()*10); // random number from 0 to infinty but
// console.log((Math.random()*10)+1); // random number from 1 to infinty but

// =========================
// random number between any to number
// let max = 20;
// let min = 10;
// console.log(Math.random() * (max - min + 1) + min); //10 to 20 
// console.log(Math.trunc(Math.random() * (max - min + 1) + min)); //10 to 20 only integer number 

*/
//
/* ===================  DATEs

let tarikh = new Date();  // get today date and time
// console.log(tarikh);
// console.log(tarikh.toString()); // now in format
// console.log(tarikh.toLocaleDateString()); // only date in local format
// console.log(tarikh.toLocaleTimeString()); // only time in local string
// console.log(tarikh.toLocaleString()); // date and time

// with Date constructor
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
let day = new Date(Date()) 
// let newDay = new Date(2020,10,11); // specifice date
// console.log(newDay.toLocaleString());
// let newDayWithTime = new Date(2020,10,11,10,44,11); // specifice date with time
// console.log(newDayWithTime.toLocaleString());
// let myCreatedDate = new Date("2023-01-14")
// // let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


// let date = Date.now(); // return date in millisecond from 1 jan 1970
// console.log(date);


// console.log(Math.floor(Date.now()/1000));

// let new2 = date.toLocaleString('default',{
//     weekday: "short",
// })

// console.log(new2); // eleeeee 




*/
//
/* ============ INTRO To arrays
//  Array operation create shallow copy so change in orignal array
// let arr = [1, "utsav", true, null, "*"];
// with constructor
//let arr = new Array(1,"utsav","hi");
// console.log(arr[2]);//acces purticular index elemnt
// console.log(arr.length);

// let arr = [1, 2, 3, 4, 5, 6];

// arr.push(90, 40); // add at last
// let nikalo = arr.pop(); // remove one element  from last 
// arr.shift(); // remove one element  from first
// arr.unshift(88);  //add at  first
// let newArr = arr.slice(1,3) // give copy of array but dont include last index element
// arr.splice(1,0,40); // do task on array 
// console.log(arr); 
// console.log(newArr); 

// join two array
// let arr = [1, 2, 3, 4, 5];
// let arr2 = [11,22,33,44,55];
// // let tempArr = [21,22,23]

// arr.push(arr2) // add aray but [ 1, 2, 3, 4, 5, [ 11, 22, 33, 44, 55 ] ] so indexing Difficult
// let arr3 = arr.concat(arr2,tempArr); // it all right
// let papaArr =[...arr,...arr2]
// best way
// console.log(arr);
// console.log(arr2);
// console.log(papaArr);
// console.log(arr);
// console.log(arr[5][0]); // indexing for push
// 4 index from 1 array than second arrays index start from 5 than second array 0 index element

// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// // console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const ne = [1, 2, 3, [4, 5, 6, [7, 8, 9], [10]]];
// const neNew = ne.flat(Infinity); // return new array with concatineting all array
// console.log(ne);
// console.log(neNew);
//check array
// console.log(Array.isArray("Hello")) // return boolean
//cretaing array
// console.log(Array.from("Utasv"));

// let a = 1;
// let b = 12;
// let c = 123;
// let d = 1234;
// console.log(Array.of(a,b,c,d));

*/
//
/* ======     OBJECT =========

// const obj = {
//     name:"utsav",
//     "lName":"dhimmar",
//     age:17,
//     dob:'27-05-2006',
//     email:'utsav@gmail.com'
    
// }
// // console.log(obj);   // display full object
// console.log(obj.name); // execpt lname all key are accesible
// // console.log(obj[name]); // give error
// // console.log(obj["name"]); //all key cann be  access
// console.log(obj["lName"]); // access


// const sym = Symbol("%");
// const sym1 = Symbol("&");
// const objSym ={
//     sym: "%",       // This property name is a string, not a symbol
//     [sym1]: "&"     // This property name is a symbol
// }

// console.log(objSym.sym);           // Accessing 'sym' property using a string, not a symbol
// console.log(typeof objSym.sym);    // Output: string, because 'sym' is a string property, not a symbol
// console.log(objSym[sym1]);          // Accessing the property with the symbol 'sym1'
// console.log(typeof objSym[sym1]);   // Output: string, because the property value is a string, not a symbol


// const sym = Symbol("#");
// const obj = {
//   name: "utsav",
//   age: 17,
//   [sym]: "#",
//   email: "utsav@gmail.com",
// };
// change object values
// console.log(obj);
// obj.age=18;
// console.log(obj);
// freese object values so nobody can change but does't give error
// Object.freeze(obj); // now no one change it
// obj.email = "utsav@openai.com";
// console.log(obj);

// adding function in object
// const sym = Symbol("#");
// const obj = {
//   name: "utsav",
//   age: 17,
//   [sym]: "#",
//   email: "utsav@gmail.com",
// };
// obj.greet=function () {
//     console.log(`Hello ${this.name}`);
// }

// obj.greet = () => {
//     console.log(`Hello ${obj.name}`)
// };
// console.log(obj.greet()); // give output 
// obj.greet();
//

// const obj= new Object() // singletone object
// non-singletone object with nested object
// const userObj = {
//   email: "utsav@op.com",
//   name:{
//     fisrtName:"Utsav",
//     lastName:"Dhimmar"
//   }
// }
// any level of object nesting possiable
// how to access it ? 👇
// console.log(userObj.name); // give entire object
// console.log(userObj.name.fisrtName); // accessing direct value

// merge objcets
const obj1 = { 1: "1", 2: "2" };
const obj2 = { 3: "3", 4: "4" };
const obj3 = { 5: "5", 6: "6" };

// const obj = { obj1, obj2, obj3 }; // it nesting object
const obj = { ...obj1, ...obj2, ...obj3 }; // merge with spread opeartor
Object.assign(source,destinations);


// const obj = Object.assign(obj1,obj2,obj3) // this is also work but best for merging two object what if wee need to merge more tahn two object
// const obj = Object.assign({},obj1,obj2,obj3) // only {} use for merging more than two objcet

console.log(obj);



// object inside array

// const arrObj = [
//   {
//     name: "utsav",
//     email: "utsav@gmail.com",
//   },
//   {
//     name: "utsav",
//     email: "utsav@gmail.com",
//   },
//   {
//     name: "utsav",
//     email: "utsav@gmail.com",
//   },
//   {
//     name: "utsav",
//     email: "utsav@gmail.com",
//   },
// ];

// so  how to access value
// compulsury use map, fillter ,reduce
// for simplly
// console.log(arrObj[1]); // display full object
// console.log(arrObj[1].name); // access object values

// const gg = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6" };
//some imp below 3 retuen *new* array

// console.log(Object.keys(gg)); // we must need to write object in this case object is gg so i write
// console.log(Object.values(gg));
// console.log(Object.entries(gg));
// const gh = Object.keys(gg);
// console.log(gh);

// check tht=at object has key or not return boolean values

// console.log(gg.hasOwnProperty(1));

// de structuring object

// const obj ={
//   name:"utsav",
//   age:17,
//   nationality:"Indian"
// }

// console.log(obj.nationality); // every time we need to access object key so need to write full this line  

// const {nationality} = obj;
// console.log(nationality); direct print 
// nationality is to big word so break it 

// const {nationality:country} = obj;
// console.log(country);

*/
//
/*  ======== FUNCTION

// function myname(params) {
//   console.log("u");
//   console.log("t");
//   console.log("s");
//   console.log("a");
//   console.log("v");
// }
// declaraion
// myname(); // calling function
//a b are parameter
// function sum(a, b) {
//   return a + b;
// console.log("Hello"); // this will never print because exectution stop after return key word
// }
// const ans = sum(2, 3); // 2,3 argumnet
// console.log(sum(2,3));

// console.log(ans); this way we store function value

// function sum(a, b) {
//   console.log(a + b);
// }
// const ans = sum(2,3);
// console.log(ans); // this will print undefined because nothing store in ans variable

// default parameter or argument

// function sy(name = "Hello") {
//   console.log(`Hi to ${name} `);
// }

// sy();
// if we dont give argument than it give undefined now once we set default argument / parameter and give argument so that time argument will accept , if we dont give argument that time automatically accept  defult parameter



// jab hame pata nahi hota hai ki kitnai argumnt aayegi tab ham rest oprator use karte hai

// bina rest opeartor ke ak hi argument lega

// function num(a) {
//     return a;
// }
// console.log(num(1,2,3)); // ouput 1 hi aayega

// with help of rest oprator argumrnt
// function num(...a) {
//     return a;
// }
// console.log(num(1,2,3)); //it will return array
// [ 1, 2, 3 ]

// function num(v1, v2, ...a) {
//   return a;
// }
// console.log(num(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));
// v1 set as 1, v2 set as 2 and other argument became array with help of rest opertor
// function with object

// const student = {
//   name: "Utsav",
//   cource: "Bca",
//   colloge: "S.S Agrawal",
// };

// // obj parameter for vishal
// function studentDetails(obj) {
//   console.log(`${obj.name} stduent pursuing ${obj.cource} from ${obj.colloge}`);
// }

// //even we pass  objcet as argument
// // now i will print
// studentDetails({
//   name: "Vishal",
//   cource: "BBA",
//   colloge: "Garda",
// });
// // console.log(studentDetails("hello"))


// even we pass array as argument

// const arr = [12, 4, 5, 8, 6, 7];

// function arrI(array) {
//   return array[1]; // array 1 index value print 
// }
// // console.log(arrI()); // undefind
// // console.log(arrI(2)); // access second value
// console.log(arrI(arr)); // arr array
// console.log(arrI([1,2,3,4,5])); // arr array











*/
//
/* == block & function scope
{
    const name = "utsav"
    {
        const age = 12;
        console.log(name+age );
        // name &age can access here 
    }
    //name can be access here
    //but age cant access here beacuse age scope already finished 
}



*/
//
/* ====== this & fat arrow

// const obj = {
//   name: "utsav",
//   age: 17,
//   msg: function () {
//     console.log(this.name);
//   },
//   // this for current contax
// };
// obj.msg();
// in browser for this current contax is widwo object

function name(){
    let name  = "Hello"
    console.log(this.name);  // no scope 
}
name(); // undefined 

// const obj = {
//   name: "utsav",
//   age: 17,
//   msg: function () {
//     console.log(this.name);
//   },
//   // this for current contax
// };
// obj.msg();
// in browser for this current contax is widwo object

function name(){
    let name  = "Hello"
    console.log(this.name);  // no scope 
}
name(); // undefined 


// function name(){
//     let name  = "Hello"
//     console.log(this.name);  // no scope
//     console.log(this);  //  Window objcet
// }
// name(); // undefined

// const name = () => {
//     const age = 17;
//     //console.log(this.age);
//     // console.log(this); // {} empty object
// };
// name(); //

// let sum = (a, b) => {
//   return a + b;
//   // explicit return
// };

// if only one statement in function than no need to write {} and return


// let sun = (a, b) => a + b; // Implicit Return (Single Expression)

// let sun = (a, b) => (a + b); // () for better calrity. best use in react 

// IIFE(Immediately Invoked Function Expression)
// use for creating private scope and preveting them from polluting the global scop

// (function sum(a, b) {
//   console.log(a + b);
// })(10, 12); // ";"is Compulsory other wise next line will not Execute (10,12)  immediately invokes the function.

// ((a, b) => {
//   console.log(a + b);
// })(10, 12);

*/
//
/* ==========  CONTROL FLOW
1. simple if

// if(true){
//
// }
// if condtion than if code execute otherwise nothing happend

2. 
// if (condition) {
    
// } else {
    
// }
// if condition is true than if code execute other wise else code execute


3. if ...else if....... else if(n)..... else
 
// if (condition) {

// } else if (true) {

// } else {

// }

let num = 10;

if (num > 0) {
    console.log("Positive number");
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

4. ternary operator
(condition ) ? (Expression 1 ) : (Expression 2)
let age = 18;
age >= 18 ? console.log("vote") : console.log("cant vote");
console.log();

-------------------------------------- Logical AND operator(both condtion is true)
let voteAge = 18;
let weddingAge = 21;
if (voteAge >= 18 && weddingAge >= 21) {
    // execute when both condtion are true 
  console.log("you can vote and shadi kar shakte ho");
} else {
  console.log("na vote kar shakte ho na hi shadi ");
}
----------------------- OR operator(any one condtin Require true) ----------------
let age = 18;
let gender = male;
if(age>=18 || gender=="female"){
    console.log("you can vote ");
}else{
    console.log("you cant vote");
}

---------------------- EXAMPLE OF NESTED IF 
let voteAge = 18;
let weddingAge = 21;
let gender = "male";
if (gender == "male") {
  if (voteAge >= 18 && weddingAge >= 21) {
    // execute when both condtion are true
    console.log(
      `you are ${gender} , your ${voteAge} , you can marry ${weddingAge}  `
    );
  }
} else {
  console.log("na vote kar shakte ho na hi shadi ");
}
------------------ optimise vesrion of above code ----------------
let voteAge = 18;
let weddingAge = 21;
let gender = "male";

if (voteAge >= 18 && weddingAge >= 21 && gender == "male") {
  // execute when both condtion are true
  console.log(
    `you are ${gender} , your ${voteAge} , you can marry ${weddingAge}  `
  );
} else {
  console.log("na vote kar shakte ho na hi shadi ");
}

================== SWITCH CASE ==== 
let num = 1;
switch (num) {
  case 1:
    console.log("number is one.");
    break;
  case 2:
    console.log("number is two.");
    break;
  case 3:
    console.log("number is three.");
    break;
  case 4:
    console.log("number is one.");
    break;

  default:
    console.log("number is other than 1 to 4");
    break;
}
// break for break the condtion if condtion true than switch execution Immediately stop
// if we dont write break than all case condition will execute


// falsy value 
// false , 0 ,-0 , BigInt 0n, "",null , undefined , NaN

// truth value 
// 'false' ,' 0' ,"-0" , "BigInt 0n", " ","null" ," undefined" , 'NaN',[] , {} , function(){}

// false == 0  -> true
// false == ''  -> true
// 0 == ''  -> true

======================== The nullish coalescing opertor
// simple it return right side operands when left side operands is null or undfiend 

// let val;
// val = "1" ?? null; // both return 1 because null in right side so it automaticllay return 1 
// val = "1" ?? undefined;
// what is null or undefined in left side 

// ************************
// val = null ?? "1";
// val = undefined ?? "1"; // left side nnull and undefiend than it right side operands

// console.log(val);


*/
//
/*  ====== MAP
// map()

let naksho = new Map();
naksho.set("IN", "India");
naksho.set("Usa", "United Sates");
naksho.set("UK", "United Kingdom");
naksho.set("Jpn", "japan");
// console.log(naksho);
// :-
// Map(4) {
//   'IN' => 'India',
//   'Usa' => 'United Sates',
//   'UK' => 'United Kingdom',
//   'Jpn' => 'japan'
// }
// console.log(naksho.get("IN")); // we get enterd key(case sensitive )  value
// naksho.set("ch", "China");
// naksho.set("ch", "china"); // overwrite value

// for (const aavade of naksho) {
//   // console.log(aavade);// give output in form of arrays
// }

// with for of

// for (const [key, value] of naksho) {
//   console.log(key, ":-", value);
// }

// IN :- India
// Usa :- United Sates
// UK :- United Kingdom
// Jpn :- japan


*/
//
/*=============== LOOPs 1 (Iteration)

// let array =[10,20,30,40,50,60,70,80,90]
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   console.log(element);
// }


// let num = 10;
// for (let i = 0; i <= num; i++) {
//   console.log(i);
// }

// let num = 10;
// for (let i = 0; i <= num; i++) {
//   if(i==5){
//     console.log("number is 5");
//   }
//   console.log(i);
// }

// nested loop
// for (let i = 0; i <= 10; i++) {
//   console.log(`me bhaar vala loop hu ${i}`);
//   for (let j = 0; j <= i; j++) {
//     console.log(`me andar vala loop hoo ${j} mera bhar vala loop ${i}`);
//   }
// }

// stoping contrl flow
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("mil gya 5 ");
    // break; // loops Immediately stop
    continue; // 5 will ignore and loop countinue
  }
  console.log(`values is ${i}`);
}


============================ While loop ==========

// let i = 5;
// while (i>=1){
//   console.log(`kam kiya ${i} `);
//   i--;
// }

// for array
// let arr = [10,20,30,40,50,60,70,80,90];
// let i=0;
// while(i<arr.length){
//   console.log(arr[i]);
//   i++;
// }

==================== DO WHILE
let num = 1;
do {
  console.log(`num is ${num}`);
  num++;
} while (num <= 10);
*/
//
/*  =============  LOOP 2

// for off
// ["","",""]
// [{},{},{}]


// for (variable of iterable)
//   statement
// let arr = [10,20,30,40]
// name is variable name arr for array
// for (const num of arr) {
//   console.log(num);
// }
 
==== IMP

// const games = {
//   game1: "NFS",
//   game2: "GTA V",
//   game3: "GTA VICE CITY",
//   game4: "PUBG",
// };
// for (const [key, values] of games) {
//   console.log(temGame);
// }
// this will not work give error

== counclusion for of don't work with objcet
== for object we have for in
// for (const key in games) {
//   console.log(key);
// }
// this will print only key we can try with taking values but it didn't work so ?

// for (const key in games) {
//   console.log(games[key]);
// }

// this will print only keys values
// for (const key in games) {
//   console.log(`Full form of ${key} is ${games[key]}`);
// }
// this will print both  key and value
// ye dono print karege key bhi or value 



// const programming = ["JS", "C", "CPP", "C#", "PYTHON", "JAVA"];

// for (const key in programming) {
//   console.log(key);
// }

// only print index number 

// for (const value of programming) {
//   console.log(value);
// }

// print values


// let game = new Map()
// game.set("gta","gta vice city")
// game.set("gta","gta 3")
// game.set("gta","gta 4")
// game.set("gta","gta 5")


// for (const key in game) {
//   console.log(key);
// }

// not working but did't give error

==== FOR EACH ====
const lang = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "GIT/GITHUB",
  "REACT",
  "NEXT JS ",
  "NODE JS",
  "MONGO DB",
];

// lang.forEach((val)=>{
//   console.log(val);
// }); // example with call back
// printing individual element

// with another function
const logging =(val)=>{
  console.log(val);
}
lang.forEach(logging)
dont use () (paranthis)


const lang = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "GIT/GITHUB",
  "REACT",
  "NEXT JS ",
  "NODE JS",
  "MONGO DB",
];
lang.forEach((item, index, arr) => {
  console.log(`${item} index is ${index} , and array is ${arr}`);
});
// it have access of indvidule array vales , index and even array 
const names = [
  {
    name: "utsav",
    age: 17,
  },
  {
    name: "mark",
    age: 18,
  },
  {
    name: "harry",
    age: 23,
  },
  {
    name: "loki",
    age: 17,
  },
];

names.forEach((val) => {
  // console.log(val); // print both key and value
  // console.log(val.name); // print  value
  console.log(val.name); // print  key
});
// [{},{},{}]


*/
//
/*   ====== LOOP 3 ====

// const names = ["utsav", "harry", "mark", "radha"];

// const bhai = names.forEach((items) => {
//   // console.log(items); // way 1
//   return items // way 2
// });

// console.log(bhai); // both way 1 and way 2 not return any value

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const printnum = num.filter((item) => {
//   // console.log(item); // print and return empty arrry for this line only .1
//   // return item; // return array .2
//   // if (item > 4) {
//   //   console.log(item);
//   // }// this is also ok but return only number
//   return item > 4; // this work and return a array
// });

// console.log(printnum);

// what if  i want to use forEach

// const newNUM = [];

// num.forEach((value) => {
//   if (value > 4) {
//     newNUM.push(value);
//   }
// });

// console.log(newNUM);

// but filter one is very good


================== part 1
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// Use forEach to iterate over the array and log the title and publish year of each book.

// const titleYear = books.forEach((bk) => {
//   console.log(bk.title);
// });

// Use forEach to update the edition of each book to the current year (2023).

// books.forEach((bk) => {
//   bk.edition = 2023;
// });
// console.log(books);

// Genre Check:

// Use forEach to log the titles of books that belong to the "Science" genre.
// const scBook = books.filter((bk) => {
//   return bk.genre === "Science";
// });

// console.log(scBook);

// Questions for filter method:

// Non-Fiction Books:

// Use filter to create an array containing only the non-fiction books.

// const nonFiction =books.filter((bk)=>{
//   return bk.genre==='Non-Fiction'
// })
// console.log(nonFiction);
// Older Editions:

// Use filter to find and log the books that have editions published before the year 2000.

// const beforePub = books.filter((bk) => {
//   return bk.publish <= 2000;
// });
// console.log(beforePub);

// Fiction Books:

// Use filter to create an array containing only the fiction books.
// const onlyFiction = books.filter((bk) => {
//   return bk.genre === "Fiction";
// });
// console.log(onlyFiction);
// Recent Publications:

// Use filter to find and log the books published after the year 2010.
// const afterPub = books.filter((bk) => {
//     return bk.publish >= 2010;
//   });
//   console.log(afterPub);

// History and Science Books:

// Use filter to create an array containing only the books with genres "History" or "Science."

// const historyScience = books.filter((book)=>{
//   return book.genre==="History" || book.genre==="Science"
// })
// console.log(historyScience);

=======part 2==

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const user = books.filter((bk) => {
  return bk.genre === "History";
});
console.log(user);

user.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});

================== part 2 end here =====



==== map start here ======================
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = num.map((numbers) => numbers + 10);  // in one line
// num.forEach((num) => {
//   return num + 10;
// });// this will not wrok return undefined

// from chatGPT
// num.forEach((num, index, arr) => {
//   return (arr[index] = num + 10);
// }); // oh shit!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// console.log(num);
=======map
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// chianing example

const newNum = num
  .map((item) => {
    return item * 10;
  })
  .map((item) => {
    return item + 1;
  })
  .filter((item) => {
    return item > 40;
  });
// up to n number chainnig possible
console.log(newNum);
======
==
===== reduce ============
// const arr = [1, 2, 3, 4];

// // const newArr = arr.reduce((acc, cvalue, cindex) => {
// //   console.log(
// //     `when acc is ${acc} than cvalues is ${cvalue}. so cindex is ${cindex}`
// //   );
// //   return acc + cvalue;
// // }); // no initial value

// const newArr = arr.reduce((acc, cvalue, cindex, arr) => {
//   console.log(
//     `when acc is ${acc} than cvalues is ${cvalue}. so cindex is ${cindex} and array is ${arr} `
//   );
//   return acc + cvalue; 
// }, 1); // here 1 is initial value
// console.log(newArr);


// const cource = [
//   {
//     name: "Web-Devlopment",
//     price: 4999,
//   },
//   {
//     name: "APP-Devlopment",
//     price: 9999,
//   },
//   {
//     name: "FRONTEND-Devlopment",
//     price: 2599,
//   },
//   {
//     name: "BACKEND-Devlopment",
//     price: 2999,
//   },
// ];

// // console.log(cource);

// // find total
// const cart = cource.reduce((acc, item,cindexc,arr) => acc +  item.price, 0);
// console.log(cart);

*/
///
/*
// Promise -- some task will complete in future

// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Asyn task in compelete"); // always first execute this
//     resolve(); // now connect with .then
//   }, 2000);
// });

// promiseOne.then(() => {
//   console.log("Promies compelete");
// });
// const prmTwo= new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     console.log("I am promisse Two");
//     resolve({username:"javascript ",email:"js123@gmail.com"});
//   },2000);
// }).then((details)=>{
//   // console.log(details);
//   // console.log(details.email);
//   console.log(details.username);
// })

// const prmThree = new Promise((resolve, reject) => {
//   setInterval(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "javascript", email: "123@gmail.com" });
//     } else {
//       reject("something wrong");
//     }
//   }, 2000);
// });

// prmThree
//   .then((user) => {
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("khatam"); // this will execute 100 % (default)
//   });

// async await can be used with .than .catch **but** it (async , await ) can't handel err

// const prmFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("heloo");
//     let error = true;
//     if (!error) {
//       resolve({ uesrname: "hello", pass: "123" });
//     } else {
//       reject("something wrong");
//     }
//   }, 1000);
// });

// async function conprmFour() {
//   const response = await prmFour;
//   console.log(response)
// }
// above code run succesfully when error = false ; but not work when error = true; // solution

// async function conprmFour() {
//   try {
//     const response = await prmFour;
//     console.log(response); // execute when not a error
//   } catch (error) {
//     console.log(error); // excute when error
//   }
// }

// conprmFour();

// same with arror function

// const prmFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("heloo");
//     let error = true;
//     if (!error) {
//       resolve({ uesrname: "hello", pass: "123" });
//     } else {
//       reject("something wrong");
//     }
//   }, 1000);
// });

// const conprmFour = async () => {
//   try {
//     const response = await prmFour;
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Call the async function
// conprmFour();

// try to get(fetch) some data with api 1. async 2. try with .then

// const getData = async () => {
//   try {
//     const dataUrl = await fetch("https://api.github.com/users/hiteshchoudhary");
//     // console.log(dataUrl); // this will print getdata but cant understand
//     // const formatedData = dataUrl.json(); // for convering data into jason format
//     // console.log(formatedData); // this will work but never get data because Promise { <pending> }
//     // nothing wrong with above code
//     // two
//     const formatedData = await dataUrl.json();
//     console.log(formatedData);
//   } catch (error) {
//     console.log("e:", error);
//   }
// };

// getData();

// with fetch()

// fetch("https://api.github.com/users/hiteshchoudhary")
//   .then((data) => {
//     return data.json();
//   })
//   .then((userData) => {
//     // console.log(userData.created_at); // it give 2015-03-23T13:03:25Z
//     const date = new Date(userData.created_at).toLocaleString();
//     console.log(date);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


 

*/
////
/* ===== OOP and classes and other
//after ES6
// class User {
//   constructor(username, email, pass) {
//     this.username = username;
//     this.email = email;
//     this.pass = pass;
//   }

//   passEncrypt(){
//     return `${this.pass}abc`;
//   }
// }

// before ES6

function User(username, email, pass) {
  this.username = username;
  this.email = email;
  this.pass = pass;
}

User.prototype.passEncrypt = function () {
  // return `${this.pass}abc`;
  return this.pass + "abc";
};

let user = new User("js", "js@123.com", "123");
console.log(user);
console.log(user.passEncrypt());
// object litarel


*/
//

/*
//inheritances

class user {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class admin extends user {
  constructor(username, email, pass) {
    // user.call(this,username);
    super(username);
    this.email = email;
    this.password = pass;
  }
  addSomeThing() {
    console.log(`something add by ${this.username}.`);
  }
}
let userInfo = new user("JavaScript");
// userInfo.logMe()
// console.log(user);
// console.log(userInfo.logMe());

// console.log(userInfo);

const addadimn = new admin("javascript", "js@123.com", 90003);

// addadimn.addSomeThing();

// userInfo.addSomeThing(); // give error

// console.log(userInfo == addadimn);
// console.log(user == admin); // both return false

// instanceof

// console.log(userInfo instanceof addadimn);
// console.log(user instanceof admin);
console.log(userInfo instanceof user);

*/

///
/* == = nedd to learn
// const user = {
//   username: "utsav",
//   emil: "utsav123@gmail.com",
//   signedIn: true,

//   // getUserDetails:()=>{
//   //   // console.log("got details for databse");
//   //   console.log(`username :${this.username}`);
//   // } // bigest issue `this` not work with arrow function

//   getUserDetails: function () {
//     console.log(`user name:${this.username}`);
//   },
// };

// // console.log(user.username);
// console.log(user.getUserDetails());

// function User(username, email, age) {
//   this.username = username;
//   this.useremail = email;
//   this.userage = age;

//   return this;
// }

// const newUser = User('utsav','utsav@gmail.com','17')
// console.log(newUser.constructor);

*/
///

//
/* ====== call ================
function SetUser(username) {
  this.username = username;

  console.log("HOH "); // profe that this is working but after this printing it contex is over
}

function CreateUser(username, email, pass) {
  SetUser.call(this, username);

  this.email = email;
  this.pass = pass;

  // email and password are working but SetUser(name) i not working because of it's execution contex is over
}

let user = new CreateUser("js", "js@123.com", "123");

console.log(user);


*/

/* =====  oops + INTERVIEW QUESTION - INDEPTH OF JS =====
///////////////////// this ////////////////////////////  and problem ///////////////////


// const user = {
//   userName: "Utsav",
//   loginCount: 12,
//   IsSigned: true,

//   getData: function () {
//     // console.log(`username :${userName}`); // give error // scope issue
//     console.log(`username :${this.userName}`); 
//   },
// };

// user.getData();

// with same user object key we need to creat another objcet so we need to write same code many  // oh god !!!! 

/////////////////////////////////////////// counstructor  function /////////////////////

function User(username,loginCount,isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  // method
  this.greet = function(){
    console.log(`Welcome ${this.username}`);
  }
// right side  is variable ====== value for we pass(while calling )

 return this; // same objcet
 // without `return this` differnt objcet
 // but value not change
}

// let userOne =  User("Utsav",12,true);
// let userTwo =  User("Harry",1,false);
// console.log(userOne);
// what userTwo value print , it actually overwrite the value of userOne


let userOne =  new User("Utsav",12,true);
let userTwo =  new User("Harry",1,false);

console.log(userOne.greet());
// now userOne and userTwo both are different from each other

// new  keyword

// whenever new keyword is used it create a new empty objcet called as instance 
// step 1. empty objcet created
// step 2. call constructor function  (because of new keyeord) and packed every argument and give back to us 
// step 3. because of `this` keyword it inject all argument 
// step 4. output time hehehehehehehe 


////////////////////////////// 

javascript behaviour is prototypel 

function multiplyBy5(num) {
  return num * 5;
}

console.log(multiplyBy5(5)); // 5
console.log(multiplyBy5.prototype);  //{}
console.log(multiplyBy5.power); // undefinend // try to function work as object
// in js everything is objcet even array ,string, fucntion(WTF) 


function Createuser(username, price) {
  this.username = username;
  this.price = price;
}

Createuser.prototype.incre = function () {
  this.price++;
};

Createuser.prototype.PRINT = function () {
  console.log(`price is ${this.price}`);
};

const userOne = new Createuser("utsav", 123);
// userOne.incre()
userOne.PRINT()
// just like // array.map()
console.log(userOne);


--------------------------------------------------------



let hero = ["Thor", "Spider Man"];

let heroPower = {
  Thor: "Hammer",
  SpiderMan: "Sling",

  getSpiderPOwer: function () {
    // console.log(`sipderman power is ${SpiderMan}`); // throw error because imterpriter dont'know who spider
    console.log(`Spider Man power is ${this.SpiderMan}`);
  },
};

// heroPower.getSpiderPOwer();

// Object.prototype.LOL = function (){
//   console.log(`LOL 1`);
// }

// in js is top of every thing so we can create own function like above so it work for evreything (string,number etc)

// but if give add own functionality in particular thing like we add helloBro function in array so it is aviailabel for array

// heroPower.LOL() // work
// hero.LOL() // work

Array.prototype.helloBro = function () {
  console.log(`hello from array prototype`);
};

// hero.helloBro();  // work
// heroPower.helloBro(); // give error because of we add helloBro functionality only in array so other datatypes like it won't work

// inheritance

const human = {
  canThink: true,
  canFly: false,
  willDead: true,
  haveFourlag: false,
};

const student = {
  leraingCs: true,
  havePC: false,
  isCollegeStudent: true,
};

// any student in this earth must (always) human so we brow property of human in student object
// way 1. copy it , (not good practice)
// way 2. inheritance

// inheritance with way 1

const me = {
  name: "Utsav",
  // __proto__: student,
};

// way 2
me.__proto__ = human;

// morden way

Object.setPrototypeOf(me, human);

// same as way 1 and way 2

// console.log(me);

let str = "Utsav                           ";

// console.log(str.length); // what 32 but utsav is only 5 character

// so we create own function

String.prototype.trueLen = function () {
  console.log(this);
  console.log(`the true length of string is ${this.trim().length}`);
};

str.trueLen();

"JS IS LOVE".trueLen();



// call , apply , blind - simply chnage the value of this

function SetUser(username) {
  this.username = username;

  console.log("call"); // prof for function call or not
}

function createUser(username, email, password) {
  SetUser.call(this, username); // this is calling but not set the value of username
  //call pass curent excution contax to other
  this.email = email;
  this.password = password;
}

let userOne = new createUser("Harry", "harry@xyz.com", 123);

console.log(userOne);

---------------------------------------- class --------------------


// ES - 6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encPass() {
//     return `${this.password}!@#`;
//   }

//   chageUserName() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// let userOne = new User("Utsav", "Utsav@abc.com", 234);
// let usertwo = new User("Harry", "Harry@abc.com", 123456);

// // console.log(userOne);
// console.log(userOne.chageUserName());
// console.log(usertwo.encPass());

// BTS


// function User(username, email, pass) {
//   this.username = username;
//   this.email = email;
//   this.pass = pass;
// }

// // encPass

// User.prototype.encPass = function () {
//   return `${this.pass}!@#`;
// };

// //chageusername to upercase
// User.prototype.changeUserName = function () {
//   return `${this.username.toUpperCase()}`;
// };

// let userOne = new User("Utsav", "Utsav@abc.com", 234);
// // let usertwo = new User("Harry", "Harry@abc.com", 123456);

// // console.log(userOne);
// console.log(User);
// // console.log(userOne.chageUserName());
// // console.log(usertwo.encPass());



// inheriatnce
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME IS ${this.username}`);
  }
}

class Student extends User {
  constructor(username, college, degree, age) {
    super(username);
    this.college = college;
    this.degree = degree;
    this.age = age;
  }

  showData() {
    console.log(
      `${this.username} pursuing ${this.degree} from ${this.college} and his/ her age is ${this.age} `
    );
  }
}

let userOne = new Student("Utsav", "SSA", "BCA", 17);

console.log(userOne);

--------------------- static keyword ---------


class User {
  constructor(username) {
    this.username = username;
  }

  logME() {
    console.log(`USERNAME : ${this.username}`);
  }

  static rollNO(){
    return `1`;
  }
  // rollNO method not availabel for User instense 
}

class Student extends User {
  constructor(username, clg) {
    super(username);
    this.clg = clg;
  }
}

let userOne = new User("Utsav");
let studentOne = new Student("Utsav", "SSA");

console.log(userOne.rollNO());

// studentOne.rollNO()

------------bind --------------------
 class React {
        constructor() {
          this.library = "React";
          this.url = "https://localhost:3000/";

          // refernce

          document
            .querySelector("button")
            .addEventListener("click",this.handleClick.bind(this));
        }

        handleClick() {
          console.log("button clicked");
          //   console.log(this);
          console.log(this.url);
        }
      }

      let app = new React();


      --------------------



// console.log(Math.PI);

// Math.PI = 123; // not change

// console.log(Math.PI);

// lets see why we can't cahnge the value of PI ?

// let indepth = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(indepth);

// output

// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

let obj = {
  // all folloeing property we can write and run loop
  name: "Utsav",
  age: 17,
  isstudent: true,
  getData: function () {
    console.log(`${this.name} , ${this.age} , ${this.isstudent}`);
  },
};

let descripter = Object.getOwnPropertyDescriptor(obj, "name");

// stop loop on name proerty

Object.defineProperty(obj, "name", {
  enumerable: false, // now 'name' property not itrable mean so we can't run loop
});

console.log(descripter);

for (let [key, val] of Object.entries(obj)) {
  // this is wroking but one problem we get funcion in output but we don't want it (code fat raha hai )

  if (typeof val !== "function") {
    console.log(`${key} :  ${val}`);
  }
}
--------------------------  getter or setter ------------------------

// in any class if we use set or get so we must use get for set and set for get


class User {
  constructor(username, email, pass) {
    this.username = username;
    this.email = email;
    this.pass = pass;
  }
// with new syntax
  get username() {
    return this.name.toUpperCase() 
  }

  set username(name) {
     (this.name = name.toUpperCase() + " Dhimmar");
  }
}


// with constructor function
function User(username, email, pass) {
  this.username = username;
  this._email = email;
  this.pass = pass;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toLowerCase();
    },
    set: function (val) {
      this._email = val;
    },
  });
}


let userOne = new User("utsav", "Utsav@Utsav.com", "123abc");

// console.log(userOne);
console.log(userOne.email);
//

-----------------



// object based (rarest)

let User = {
  _username: "utsav@utsav.com",
  _pass: "123abc",


  get pass(){
    return this._pass.toUpperCase()
  },
  set pass(val){
    this._pass = val
  } 
};


let userOne = Object.create(User);   // factory function
// even for array


console.log(userOne.pass);



-------------------- clousre   ------ lexical scope

*/

// function inti() {
//   let name = "Utsav";

//   // console.log(`i am outermost function ${num}`); // can't access

//   function dispalyName() {
//     let num = 123;
//     console.log(name);
//     // console.log(`${num} am that variabale where function that ${num} declare`);
//   }

//   function innerTwo() {
//     console.log(`i am inner two function ${name}`);
//     // console.log(`i am sceret in second function number ${num}`); // can't access
//   }
//   dispalyName();
//   innerTwo();
// }

// inti();

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();

// console.log(myFunc);
myFunc();
