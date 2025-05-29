# JavaScript

## TOC

- [JavaScript](#javascript)
  - [TOC](#toc)
  - [Variables](#variables)
  - [DataType](#datatype)
  - [Type conversion And operations](#type-conversion-and-operations)
    - [MEMES WITH JS Addition 😵😂](#memes-with-js-addition-)
  - [Strings](#strings)
  - [Number and Math Object](#number-and-math-object)
  - [Array](#array)
  - [Object](#object)
  - [Date](#date)
  - [Functions](#functions)
    - [scopes](#scopes)
    - [IIFE (Immediately Invoked Function Expression)](#iife-immediately-invoked-function-expression)
  - [Notes](#notes)

## Variables

- `let` , `var` , `const` three way to declare variable in JS
- `const` we can't change value , can't reassign the value , we must need to assign value when we use `const` it has block scope `{ // this is scope }`
- `let` value assign is optional we can reassign value and it has also block scope
- `var` is global scope always in window object , now we don't use `var`
- `var` has many problem , if we can avoid the problems than we can use it but not recommended
- if variable value is not assign then it set `undefined` as default value - it is very special

```js
let age = 18; // console.log(age) -> 18
let x;        // console.log(x) -> undefined
var p = 12;   // console.log(p) -> 12
var lol;      // console.log(lol) -> undefined
const y = 100 // console.log(y) -> 100
const me;     // SyntaxError: Missing initializer in const declaration
```

## DataType

- Their are Primitive data types (most basics data types , may be some are immutable, call by value)

1. `number` - store numeric value even with floating points `let age = 18` , `let pi = 3.14`; [visit number](#number-and-math-object)
2. `string` - store character array [visit string](#strings)

```js
let name1 = "javascript";
//or
let name2 = "mark";
// or
let name3 = `hello`; // -> string literal
```

3. `boolean` - Represent only `true` and `false`
4. `null` - Standalone value and datatype is `object`
5. `undefined` - Default value for all variable , if value is not define the we got`undefined`
6. `symbol` - **Always unique** added in `ES6`
7. `bigInt` - When we need to perform operations on larger number than bigInt can be used but , it is rarely used `let bigNum = 1234n;`

---

We use `typeof` key word to check datatype of the variable

```js
let name = "js";
console.log(typeof name); // string
let age = 18;
console.log(typeof age); // number
let arr = [1, 2, 3];
console.log(typeof arr); // object OMG
```

- Famous interview question
  what is the output of this program

```js
console.log(typeof null);
console.log(typeof undefined);
```

---

<details>
  <summary> Answer </summary>

---

```js
object;
undefined;
```

---

- Explanation :-
- `null` and `undefined` both are special value that represent the absence of a value / Data
- Read about [JavaScript execution context](02-part.md/#how-js-work)

- null :-
  - `null` -> `object`
  - Some people (developer suggest that) think this is is mistake in language design
  - `null` represent no value or no object , it need to be assign `explicitly` , assign by the developer
  - It may be a bug in JavaScript implementation that why it return `type` for `null` is `object`
  - This bug never fix because if it fixed than it would broke existing code on the web.
- undefined:-
  - `undefined` is a primitive datatype and automatically assign to the all variable (even function parameter , return values ) due to phase 1 `memory creation` of JavaScript execution context
  - Developer can assign `undefined` to the variable when we needed
  - That's why it return `type` for `undefined` is `undefined` not an `object`

</details>

---

**Notes**

- JavaScript change over the time , means JS in `2015` and JS in `2024` (this notes writing time year) or nay year is very different
- Once we write `"use strict"` all code in JS file will treat as newer version of JS , If we did not write `"use strict"` than **sloppy mode** mode but not an official designation
- JavaScript can run at both at client (by default in browser) and server (with help of `node js` , or other JS runtime like `deno js` , `bun js`)
- In any programming language code must be readable and easy to understand

```js
console.log(
  //
  3 +
    //
    //
    3
); // to bad
```

- why primitive are call by value ?

```js
function logNum(num) {
  num = 100; // change the value in function
  console.log("Value of number Inside the function  = ", num); // chnage
}

let num = 20;
logNum(num);
console.log("Value of number Outside the function  = ", num); // still 20
```

- `num` store first 20
- inside the function `num` value changed to `100`
- print `Value of number Inside the function  =  100`
- function scope destroy
- than console.log that is outside of a function print
- `Value of number Outside the function  =  20`
- Value is same still 20 it did not changed

---

- Non-Primitive data types (call by references)

1. Array - Collection of value store in continue memory location

```js
let arr = [
  1,
  3.14,
  "Hello",
  true,
  [4, 5, 6],
  {
    // this is object
    name: "Mark",
    age: 17,
  },
  function () {
    console.log("omg");
  },
];
```

2. Object - Most IMP thing in JS ,it's key value pair or value with named index

```js
let user = {
  name: "Utsav",
  age: 17,
  marks: [1, 2, 3],
  printName: function () {
    console.log(user.name); // utsav
    console.log(this.name); // Utsav
  },
};
user.printName();
```

3. Function

- Reusable code of block

```js
function abc() {
  console.log("Hello World");
}
```

- why non primitive are call by references ?

```js
function logArr(arr) {
  arr.push(30); // Add into array
  console.log("Array values Inside the function  = ", arr);
}

let arr = [10, 20];
logArr(arr);
console.log("Array values Outside the function  = ", arr);
```

<p style="text-align: center">Output</p>

```txt
Array values Inside the function  =  [ 10, 20, 30 ]
Array values Outside the function  =  [ 10, 20, 30 ]
```

- In above we create array , than we add `30` in function
- Even though we add new value in `arr` in function it effect original array

```js
function logObj(obj) {
  obj["gender"] = "male";
  console.log("Obj values Inside the function  = ", obj);
}

let obj = {
  name: "Utsav",
  age: 18,
};
logObj(obj);

console.log("Obj values Outside the function  = ", obj);
```

<p style="text-align: center">Output</p>

```txt
Obj values Inside the function  =  { name: 'Utsav', age: 18, gender: 'male' }
Obj values Outside the function  =  { name: 'Utsav', age: 18, gender: 'male' }
```

- two types of memory
- Stack (for storing Primitive data types) , Heap (for storing Non - primitive data types)
- stack memory - we get a copy of a variable so original value won't effect
- heap memory - we get reference of variable (modification apply in even in original)
- some graphical representation
  ![image of stack and heap memory](./images/stack-heap.png)

## Type conversion And operations

- In JS type conversion is very nightmare topic but not a impossible
- JS is dynamic type language not a static typed language means we don't need to define type of the variable at declaration

```js
let score = 100; // here we not specify the type of the variable
console.log(typeof score); // number
```

---

```js
let score = "100";
console.log(typeof score); // string
```

- We can convert the string type variable into number ⚠️
- In below code I use Number Constructor

```js
let score = "100";
let newScore = Number(score); // now the string score convert into number
console.log(typeof newScore); // number
console.log(score); // "100"
console.log(newScore); // 100
```

- Till now nothing to confusing

```js
let score = "why i am score";
console.log(typeof score); // string

let newScore = Number(score); // we are trying to convert string variable into number

// HOW IS THIS POSSIBLE ?
// we know it is wrong
console.log(typeof newScore); // number
console.log(newScore); // NaN
```

- `"why i am score"` string can't convert into number that why it return `NaN`
- It is not a bug , but basically JavaScript try to convert in number but it can't convert so it return `NaN`
- Learn latter about `NaN`

```js
let num = null;
let newNum = Number(num);

console.log(newNum); // 0
// null -> 0 ⭐

let x = undefined;
let newX = Number(x);
console.log(newX);
// undefined -> NaN ⭐

let x = true;
let newX = Number(x);
console.log(newX); // 1  true -> 1⭐

let x = false;
let newX = Number(x);
console.log(newX); // 0 false -> 0 ⭐

let isLoggedIn = 1; // here 1 convert into true
let boolValue = Boolean(isLoggedIn);
console.log(boolValue); //  true

// for 0 numeric value its boolean value will be false
// 1 -> true
// 0 -> false

let age = "Hello";

let boolValue = Boolean(age);

console.log(boolValue); // true

let wrongAge = "";
let bool2 = Boolean(wrongAge);
console.log(bool2); // false
// it "" convert into false

let spaceAge = " "; // space
let bool3 = Boolean(wrongAge);
console.log(bool3); // true

let someNum = 10000;
let strNum = String(someNum);
console.log(strNum);
console.log(typeof strNum);

// and many more conversion possible
```

- about come conversion

| Value     | Conversion Type | Output | Output type |
| --------- | :-------------: | -----: | ----------: |
| "1"       |     Number      |      1 |      Number |
| "Bananas" |     Number      |    NaN |      Number |
| null      |     Number      |      0 |      Number |
| undefined |     Number      |    NaN |      Number |
| true      |     Number      |      1 |      Number |
| 1         |     Boolean     |   true |     Boolean |
| ""        |     Boolean     |  false |     Boolean |
| "hi"      |     Boolean     |   true |     Boolean |

- and more type conversion possible

* what is `NaN` ?

  - `NaN` stand for Not a Number
  - It check given parameter is **not a number** or not
  - It return `false` if give parameter is number even if we enter string number like '110' due to type conversion .
  - It return `true` if given parameter is **NOT A NUMBER**
  - Its type is `number` . `typeof NaN` -> `number`
  - [go on numbers to read about NaN](#number-and-math-object)

  ```js
  console.log(isNaN("1")); // false due to type conversion
  // "1" -> 1
  console.log(isNaN("LOL")); // true
  ```

- `+` can use for string concatenations

```js
let str1 = "Hello ";
let str2 = "World !!!";
let str3 = str1 + str2;
console.log(str3); // Hello World !!!
// string concatenations
```

---

### MEMES WITH JS Addition 😵😂

---

```js
console.log(1 + "2"); // 12 in string
console.log("1" + 2); // 12 in string
console.log(1 + +"2"); // but 3
// 1  -> 1
// +"2"-> 2
// 1 + 2 = 3
```

---

```js
console.log(1 + 2 + "3"); // 33
// 1 + 2 = 3
// 3 + "3" = 33
console.log("1" + 2 + 3); // 123
// "1" + 2 = "12"
// "12" + 3 = "123"
```

---

---

- In JS we can compare two different datatype values which is completely wrong ❌👎 that why typescript came in to the picture
- here why it is wrong

```js
console.log(null < 0); // false 0 < 0
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true

console.log(undefined < 0); // false even with < , > , <= , >=
```

- JavaScript have special operator call that compare value and even compare datatype of that value

```js
console.log(1 === 1); // true
// both are number
console.log(1 === "1"); // false
// string and number
```

---

## Strings

---

- Sequences of character
- String can be represent as character of an array
- `"hi".__proto__` in `console`

- as string literals

```js
let str1 = "Hello JS";
let str2 = "Hello Js 2";
let str3 = `Hello Js 3`; // string literal
console.log(typeof str1, typeof str2, typeof str3); // string string string
```

- as Object _rarely_ used

```js
let strObj = new String("Hello String from String Object");
console.log(typeof strObj); // object
```

- we can access the string character using their index

```js
let str = "Hello World";
console.log(str[0]); // H
```

`String.prototype`

- `length`
  - Return the string length , count the character in string
  ```js
  let str = "Hello";
  console.log(str.length); // 4
  ```

---

- `charAt(index)`
  - Return the character at specific index
  ```js
  let str = "Hello";
  console.log(str.charAt(1)); // 'e'
  console.log(str.charAt()); // 'H'
  ```
  - If index is `out of range` and if we give negative value than it return `' '` (empty string).
  - It did not allow negative index return `' '`
  - If we want to use negative values as index than we can use `at(index)`
  - negative values than it given index from last of the string
  - `-1` -> last character
  - `-2` -> second last character ..... so on

---

- `charCodeAt(index)`
  - If we want the a `UTF-16` value from the index than we can use `charCodeAt(index)`
  ```js
  let a = "Hello World";
  console.log(a.charCodeAt()); // zero index 47
  console.log(a.charCodeAt(2)); // zero index 108
  ```

---

- `concat(s1,s2,s3,sN)`

  - Combines the multiple string into one string , without modifying original string

  ```js
  let str1 = "Hello";
  let str2 = "World";
  console.log(str1.concat(" ", str2)); // "Hello World"
  ```

- `includes(substr,position)`

  - It return `true` or `false` whether the given substring found in string
  - we can optional give index position to start searching by default is `0`

  ```js
  let str = "Hello World";
  console.log(str.includes("World")); // true
  console.log(str.includes("e")); // true
  console.log(str.includes("k")); // false
  ```

- `indexOf(searchString,fromIndex)`

  - It return index of first occurrence of the give search sub-string
  - If given search string not found than it return `-1`

  ```js
  let str = "Hello World";
  console.log(str.indexOf("World")); // 6
  console.log(str.indexOf("k")); // -1
  ```

  - If we have need from last than we can use `lastIndexOf()`

  ```js
  let str = "Hello World";
  console.log(str.lastIndexOf("l")); // 9
  ```

- `slice(beginIndex, endIndex)`

  - It return a section of the string as per given index , `endIndex` will not included
  - It do not modify the original string .
  - `endIndex` is optional parameter

  ```js
  let str = "Hello World";
  let newStr = str.slice(2, 5);
  console.log(newStr); // "llo"
  console.log(str.slice(6)); // "World"
  console.log(str.slice(-1)); // "d"
  console.log(str); // "Hello World"
  ```

- `substring(indexStart, indexEnd)`

  - Similar to `slice(beginIndex, endIndex)` , but include the `indexEnd`
  - It do not modify the original string
  - It do not allow the negative index

  ```js
  let str = "Hello World";
  console.log(str.substring(0, 5)); // "Hello"
  console.log(str); // "Hello World"
  ```

- `substr(index,length)`

  - It start extracting string from given index till the second parameter length otherwise it extract string till end.

  ```js
  let str = "Hello, world!";
  console.log(str.slice(0, 5)); // "Hello"
  console.log(str.slice(-6, -1)); // "world"
  let str1 = "Hello World";
  console.log(str1.slice(0, 100)); // Hello World"
  ```

- `Case Change`

  - `UpperCase` to `LowerCase` :- `'Hello Js'.toUpperCase()` - _output_-> `'HELLO JS'`
  - `LowerCase` to `UpperCase` :- `'Hello Js'.toLowerCase()` - _output_-> `'hello js'`

- `trim()`

  - Remove White Space from end and start of the sting and return the string

  ```js
  let str = "  Hello World  ";
  let a = str.trim();
  console.log(a); // "Hello World"
  console.log(str); //"  Hello World  "
  ```

  - We have more two option for removing white space from start `trimStart()` and removing space from end of the string `trimEnd()`

- `split(delimiter,limit)`

  - Split (broke) the string as per delimiter into substring of array we can optional specify the maxLimit of split

  ```js
  let str = "Hello World";
  let a = str.split(" ");
  console.log(a); // ["Hello", "World"]
  console.log(str); // "Hello World";
  ```

  - If delimiter is not found than return original string as array

  ```js
  let str = "Hello World";
  let a = str.split("x");
  console.log(a); // ['Hello World']
  console.log(str); // "Hello World";
  ```

- `replace(searchValue, newValue)`

  - replace the _first_ occurrences `searchValue` with `newValue`
  - it do not modify the original string

  ```js
  let str = "Hello World";
  let a = str.replace("World", "Everyone");
  console.log(a); // "Hello Everyone"
  console.log(str); //"Hello World"
  ```

  - if `searchValue` not found than it return original string
  - if we want to replace the all occurrence of the substring than we can use `replaceAll()`

- `startsWith(str,position)` and `endsWith(str,position)`

  - It check the given sting is string or ending with specific sub-str or not
  - return Boolean values

  ```js
  let s = "Hello World";
  console.log(s.startsWith("H")); // true
  console.log(s.endsWith("D")); // false;
  ```

- string Operator :- `string1` + `string2` e.g.:- `Hello ` + `World` = `Hello World`
- This is just a some overview of string `methods` and `properties`, for more info you can search on web , or [visit MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

```js
let name = "Utsav";
console.log("Hello From " + name); // old way to concatenations
console.log(`Hello From ${name}`); // new way
// string literal
console.log(name[0]); // only U will print
console.log(name.length); // 5 print the length of a string

let chai = "green";
console.log(chai.__proto__); // GOD
console.log(chai.toUpperCase()); // "GREEN"
// convert into upper case
console.log(chai.toLowerCase()); // "green"
// convert into upper case
console.log(chai.charAt(1)); // r
// it print character at any index

console.log(chai.charAt(chai.length + 1)); // if index is greater than string then " " will return

console.log(chai.charCodeAt(2)); // we get ascii value of any index

console.log(chai.indexOf("n")); // give index of sub string

// G R E E N
// 0 1 2 3 4

const subChai = chai.substring(0, 2); // ge start from g and end at e
const newSubChai = chai.slice(0, 2); // same as above
const negSubChai = chai.slice(-4, 3); //
// G R E E N
// 0 1 2 3 4

// -4 -> start from end of the string 'r'
// 3 -> start from the beginning of the sting only 'e' due it last index will exclude

console.log(negSubChai);

let stringArr = chai.split(""); // string convert into array as per splitter
// we can optional give maxSplit (limit)

console.log(stringArr);

console.log(chai.search("g")); // this method search character in string and return index
// if character not found than it return -1

console.log(chai.startsWith("l")); // this method check string start with sub string or not it return boolean value
// same we have endsWith

let str = "        utsav        ";

console.log(str.trim()); // remove white space from start and end from the string
// same we can remove space from the only start and end

let strX = "Hello World !!!";

console.log(strX.replace("o", ")")); // replace only first occurrences

// for all replacement replaceAll() method

let str = "my name is utsav";

console.log(str.includes("mark")); // this method check that string contains substring or not
```

## Number and Math Object

- In JS `123` and `3.14` treat as number not a separate datatype like `c`, `c++` or any other language
- Number in JS are very straight forward. it has very few methods
- `JS` also have `BigInt` datatype for extremely large number , but it doesn't replace normal numbers , we normally just use normal number rarely used `BigInt`

```js
let n = 100;
let n1 = Number(100);
let n2 = new Number(100); // as object
```

---

- `toFixed(digit)`
  - format the number using fixed Point notions
  - return type will `String`
  - digit should be between `0` to `100`
  ```js
  let num = 123.456;
  console.log(num.toFixed(2)); // "123.46"
  console.log(num.toFixed("2")); // "123.46"
  console.log(num.toFixed("HI")); // "123"
  ```
- `toString(radix)`
- Convert(return) number into string as per `radix` by default value is `10`
- `radix` must be between `2` to `36` other wise throw `RangeError`

```js
10.toString(2) -> 1010
10.toString(3) -> 101
10.toString(4) -> 22
10.toString(5) -> 20
10.toString(6) -> 14
10.toString(7) -> 13
10.toString(8) -> 12
10.toString(9) -> 11
10.toString(10) -> 10
10.toString(11) -> a
// till 36 return value is a
```

- `Number.parseInt(value)` and `parseInt(value)` , `Number.parseFloat(value)` and `parseFloat(value)`

  - both are same `parseInt == Number.parseInt` - > `true`
  - both are same `parseFloat == Number.parseFloat` - > `true`
  - `parseInt(value)` and `parseFloat(value)` are available at Global

  ```js
  console.log(parseInt(100.2)); // 100
  console.log(Number.parseInt(100.2)); // 100
  console.log(Number.parseFloat("121.12")); // 121.12
  console.log(parseFloat("121.12")); // 121.12
  ```

- `isNaN(value)` , `isFinite(value)`
  - `isNaN(value)` return `true` if given value is `Not a Number` other wise `false`
  - `isFinite(value)` return `true` if given value (number) is `finite` other wise `false`
    - In the case of string it return false because it can't process string and it is infinite value

```js
let num = 123; // normal variable declarations

let numWithNumber = Number(123); // using  number keyword

let numWithNewKeyword = new Number(123); // we create a number with number object with the help of new

console.table([num, numWithNumber, numWithNewKeyword]); // all are same

console.log(num.toString()); // now '123' convert into string so string method are can be apply

console.log(num.toFixed(2)); // 123.00
console.log(num.toFixed(3)); // 123.000

let newNum = 3.14;
console.log(newNum.toPrecision(1)); // 3
console.log(newNum.toPrecision(2)); // 3.1
console.log(newNum.toPrecision(3)); // 3.14
console.log(newNum.toPrecision(4)); // 3.140

let ranchosFatherSalary = 25000000; // from 3 idiots 😂
// we are unable to read it
// js : don't worry
console.log(ranchosFatherSalary.toLocaleString("en-in")); // 2,50,00,000
// salary convert into as per indian standard

// that why BigInt come
```

---

```js
let max_num = Number.MAX_SAFE_INTEGER;
let min_num = Number.MIN_SAFE_INTEGER;
console.log(max_num, min_num); // 9007199254740991 , -9007199254740991
```

- JS can perform any operations on number between this numbers than it may create issue
  [learn more about number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

- Math Object

```js
console.log(Math.abs(-4)); // 4
// only negative to positive
console.log(Math.round(4.5)); // 5
// as per normal standard
console.log(Math.ceil(4.5)); // 5
// value up
console.log(Math.floor(4.5)); // 4
// value maintain 4

console.log(Math.pow(2, 3) === 2 ** 3); // true
// 9 === 9
// true that means both are same

console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)); // give minimum number
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)); // give maximum number

// most important method

// Math.random() it give random number between 0 and 1

console.log(Math.random() * 10); // now value b/w 0 to 10
console.log(Math.random() * 10 + 1); // now value b/w 1 to 10

let min = 10;

let max = 100;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
// now value always be 10 to 100
```

[learn more about math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

## Array

- In JS array can store `any datatype` including `function` , `array` , `object` etc.
- JS array are resizable it can grow dynamically we do not define the size of the array
- Array are zero based indexing , call by references modify direct original
- **array type is object not an array**
- array is in JavaScript are special type object
- [why](./07-interview.md#why-array-type-is-object)

```js
let arr = [
  1,
  2,
  3.14,
  "Hello",
  [4, 5, [100, 101]],
  function () {
    console.log("LOL");
  },
]; // type object
```

---

```js
let arr = [1, 2, 3.14, true]; // number , boolean array
let hero = ["iron man", "spider man", "super man"]; // strings array
const arrWithArr = new Array(1, 2, 3); // array as object
```

- accessing array element

```js
let hero = ["iron man", "spider man", "super man"];
console.log(hero[0]); // iron man
console.log(hero[1]); // spider man
console.log(hero[2]); // super man
console.log(hero[3]); // undefined
```

- `Array.length` - return the length of the array
- `hero[3]` return `undefined` because we are try to access element out of array range that's why it `undefined`

- Adding / removing from last
- `push(elements...)` method add element at end of the array
- `pop()` remove and return last element from array

```js
let arr = [1, 2, 3.14, true];
arr.push(8, 9, 10); // add element at last
console.log(arr); // [1, 2, 3.14, true, 8, 9, 10 ]
let removedEle = arr.pop(); // remove and return last element
console.log(arr); // [ 1, 2, 3.14, true, 8, 9 ]
console.log(`Removed element from array ${removedEle} .`); // Removed element from array 10 .
```

- Adding / removing from start
- `unshift(elements...)` - add element(s) at starting
- `shift` - remove and return first element from an array
- both method are very time consuming task because of we are modifying element at starting which means rest of the element require re-indexing

```js
let arr = [1, 2, 3.14, true];
arr.unshift("x", "y"); // add element at first and change all existing element index
console.log(arr); // [ 'x', 'y',  1, 2,   3.14, true, 8, 9]
let removedFirstEle = arr.shift(); // remove and return first element
console.log(arr); // ["y", 1, 2, 3.14, true, 8, 9];
console.log(removedFirstEle); // x
```

- `Array.include(element)` - method check given parameter is available in array or not it return `Boolean` value .

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.includes(2)); // true
```

- `indexOf(element)` method return index of given parameter from the array , if not found than it return `-1`

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.indexOf(0)); // -1
console.log(arr.indexOf(1)); // 0
```

- `join(separator)` - method join the all array element and return the joined string

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.join()); // '1,2,3,4,5,6,7,8,9'
```

```js
// slice and splice

console.log(arr.slice(1, 4)); // return a copy for start and end section
// do not modify array

let partOfArr = arr.splice(1, 4); // last index include
console.log(arr); // hmm affect original array [main different b/w slice and splice]
console.log(partOfArr);

const marvel_heros = ["thor", "IronMan", "SpiderMan"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros); // go wrong array inside array

console.log(marvel_heros);
console.log(marvel_heros[3][1]); // flash

let numArr = [1, 2, 3];
let all_hero = marvel_heros.concat(dc_heros, numArr); // ok good

console.log(all_hero);
// new way  +++

let hero_all = [...marvel_heros, ...dc_heros]; // spread operator

console.log(hero_all);

let arr = [1, 2, 3, [4, [5, 6, [7, [8, 9]]]], 0];
// array inside array , at 4 level

// console.log(arr);
// convert into 1 array

// let singleArr = arr.flat(5); // 5 nested level can convert into array

// arr.flat(Infinity); at all level
// console.log(singleArr);

console.log(Array.isArray("Hello")); // return boolean value
// check given parameter is array or not

console.log(Array.from("Hello")); // convert into array

// console.log(Array.from({ name: "Utsav" })); // most interning case return []

// console.log(Array.of({ name: "Utsav" }));

let num1 = 1;
let num2 = 2;
let num3 = 3;

let newArray = Array.of(num1, num2, num3);

console.log(newArray);
```

---

## Object

- any nested level of object possible
- Two way to declare object in `JS`
- 1. `Objcet Literal` - most simple way to declare object
-

```js
// small example
let car = {
  name: "BMW",
  model: "i3",
  year: 2023,
};
```

- 2. `Object constructor` - with the help of function `learn in depth later`
  - more complex example

```js
function Car(name, model, year) {
  this.name = name;
  this.model = model;
  this.year = year;
}

let bmwCar = new Car("BMW", "X6", 2020);
```

---

- `singleton` - when we create object with `objcet constructor` ,only one type of object

---

```js
let car = {
  name: "BMW", // in behinde name will treat as 'name'
  model: "i3",
  year: 2023,
};

// way to access object
console.log(car.name);
console.log(car["year"]);

let newObj = new Object({
  name: "BMW",
  model: "i3",
  year: 2023,
});

console.log(newObj == car); // both object store at differnt memory
console.log(Object.is(car, newObj));

user["email"] = "utsav@gmail.com"; // add at last

user["age"] = 100;
user["haveFourLeg"] = false;

user.greet = function () {
  console.log(`hello user`);
};

user.advanceGreet = function () {
  console.log(`Hello , ${this.name}`);
};

console.log(user);
user.greet();
user.advanceGreet();

// Object.freeze(user); // freeze the object no edit or no update
```

- how to use Symbol as object key ?

```js
let gender = Symbol("male");
let user = {
  name: "Utsav",
  age: 17,
  isStudent: true,
  // gender: "male", // not working
  [gender]: "male", // its a synatx and symboled key property
};

// console.log(typeof user.gender); // string insted of symbol
console.log(typeof user[gender]); // string insted of symbol
```

---

```js
let userOne = new Object(); // singletone object
let user = {}; // non object

console.log(user);
console.log(userOne);

user.id = 101;
user.name = "Sam";
user.isLoggedIn = false;
console.log(user);

console.log(Object.keys(user)); // all key put in one array
console.log(Object.values(user)); // all value put in one array

let userTwo = {
  id: 101,
  fullName: {
    userFullName: {
      firstName: "Utsav",
      lastName: "Dhimmar",
    },
  },
};

console.log(userTwo.fullName?.userFullName.firstName);
// merger two object
let objOne = {
  1: "a",
  2: "b",
};

let objTwo = {
  3: "c",
  4: "d",
};

let objThree = { objOne, objTwo }; // it create problem
let objThree = Object.assign({}, objOne, objTwo);
// here {} usefull when we have multiple object and it is optional
// if we don't write `{}` than all second source object copy into first object scource
let objFour = { ...objOne, ...objTwo }; // spread operator
console.log(objThree);
console.log(objFour);
```

- when we receive data from database / API majorly time data received in below format
- array that contains many object

```js
let data = [
  {
    id: 101,
    name: "Utsav",
  },
  {
    id: 102,
    name: "Sam",
  },
  {
    id: 103,
    name: "Mark",
  },
];

console.log(data[0].id);

// desctructiong object

let { name } = user;
let { name: userNaem } = user; // same as above just we give alternative name

console.log(name);
```

## Date

- Dates 🫣
- JavaScript `Date` objects represent a single moment in time in a platform-independent format
- JS date start from mid night from 1 Jan 1970 UTC
- date object calculate time in `millisecond`
- month index start with `0`

```js
let date = new Date();
// YYYY-MM-DDTHH:mm:ss.sssZ
console.log(typeof date); // object
console.log(date);
// in node js - 2024-05-03T09:27:51.563Z // ISO string
// Wed Aug 21 2024 20:16:10 GMT+0530 (India Standard Time)
console.log(date.toString());
// Fri May 03 2024 14:59:35 GMT+0530 (India Standard Time)
// now readable

console.log(date.toDateString()); // Wed Aug 21 2024
console.log(date.toISOString()); // 2024-08-21T14:46:10.355Z
// a simplified format based on ISO 8601
console.log(date.toLocaleDateString()); // 8/21/2024
console.log(date.toLocaleTimeString()); // 8:16:10 PM

let myDate = new Date(2024, 1, 1);
// this own date
// here month start from 0 (means 0 0 => jan , 1=> Feb ,....)

let myDate = new Date(2024, 1, 1, 22, 45, 90);
// note here second is 90 which is wrong but in output 30 second added to the next minutes
let indiaDate = new Date("2024-05-03");
console.log(indiaDate); // Fri May 03 2024 05:30:00 GMT+0530 (India Standard Time)

let timeNow = Date.now(); // 1724252059625
// Date.now() -> time in millisecond
console.log(Date(timeNow)); // Wed Aug 21 2024 20:24:25 GMT+0530 (India Standard Time)

// full customization

date.toLocaleString("default", {
  weekday: "long",
  month: "short",
});

console.log(date);
```

---

```js
let date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
```

- we can retrieve date, year , full year, month, date , time ,hour ,second etc , even in UTC
  [for more info visit mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

## Functions

- function are heart ❤️ of JS

```js
function printSomething() {
  console.log("Hello World");
}

printSometh();

// simple program to add two numebr
function add(num1, num2) {
  return num1 + num2;
}
add();

// another simple program to print two number

function addTwoNum(num1 = 1, num2 = 1) {
  // default parameters
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error(
      `Both input ${typeof num1 !== "number" ? num1 : num2} must be number`
    );
  } else {
    return num1 + num2; // return to the caller
  }
}

console.log(addTwoNum(1, 12));
```

- rest operators

```js
function add(...num1) {
  // spread operator return array
  return num1;
}

console.log(add(1, 1, 2, 3, 4));
```

### scopes

- the whole story of scope come from `let` , `var` and `const`.
- almost in every language we have scopes
- `var` is global scope

```js
if (true) {
  // this is scope of if tue block
}

function one() {
  const name = "Utsav";

  function two() {
    const age = 17;

    console.log(name);
  } // all the statement of function two destory here
  two();
  // console.log(age); // throw error
}

one();
```

```js
doSomething(); // work properly
function doSomething() {
  return `hello`;
}
hola(); // not work because of hoisting
let hola = function () {
  return `hello from hola function`;
};
```

<!-- - click here to read above thing -->

- arrow function and teaser of `this` keyword

```js
const arrow_fun = () => {
  console.log("Hello world");
};
const add = (num1, num2) => num + num2; // no need to return keyword
const lol = () => ({ username: "Utsav" });
```

- `this` keyword

```js
let user = {
  username: "Utsav",
  age: 17,
  welcomeMsg: function () {
    console.log(`Hello ${this.username}`);
  },
};

user.welcomeMsg();

console.log(this);
```

- in node this -> `{ }`
- in browser this -> `window object`
- its value depends on the context

### IIFE (Immediately Invoked Function Expression)

- example

```js
(function () {
  // function body
})(); // function call
// anonyms iffe
```

- **IIFE** use full when we want prevent variables , and any other statement from global scope from polluting global scope
- semicolon play important role for ending scope of **IIFE**

```js
(function () {
  let x = 12;
  console.log(x);
})(); // here semi colon paly important role

console.log(x); // raised error

(function hello() {
  // named IIFE
})();

((name = "JS") => {
  console.log(name);
})("utsav");
```

---

## Notes

- **Note** - all the conditionals statement are same as `c`, `c++` or `java` so learn yourself !!!

- **Note** - all the iterative (`for`, `while` , `do....while`) statement are same as `c`, `c++` or `java` so learn yourself !!! , some iterative statement are available in part 2 :)
