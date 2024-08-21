//  what is js ?
// -> js is a highe level lanuage that used to create website or web app

/* ================ hositing ===========================
console.log(a);

var a = 12;


console.log(c);
let c = 12;

/// simple example of 

*/

/* = ======= =scope =====
// globle scope -> variable that is declare outer of any {} is known as globle variable
// function scope -> variable that is declare inside the function is know as function scope
// block scope -> ES -6 . block scope variable are only available for that scope
// let and const are block scope whlie var is function scope


*/

/* ============ primitive datatypes ================

string , number , boolean , null , undefined, bigINT , symbol , undefined

NN BB SS U
null ,  number || bigINT , boolean || string , symbol || undefined

let empty = null;

let num = 123; // postitive , negative with floating point

let yes = true; // only two boolean value posiable
let no = false;

let str = "heloo";
let ch = "A";

let symbol_var = Symbol("q"); // always uniqe

let WTF = undefined;

let longNum = BigInt(12345);

console.log(typeof symbol_var);
console.log(typeof longNum);

// check datatype of an variable we use typeof keyword



*/

/* ====== NUMBER ============

in js number can be either integer or floating point or positive or negetavie

let num = 123;

let a = Number(66); /// number variable with help of constructor # rarly used


------------------------------------------------------------------------------------
number coercion

null ----- > 0
undefined ---> NaN

true ----> 1 ||and|| false -----> 0

infinty and -infinty 
-----------------


what is NaN ?
-> Not a Number , that check is guven is number or not , if number than it return true || if other than number than false 

console.log(isNaN("a")); // true beause it is staring
console.log(isNaN(33)); // false because already number
console.log(isNaN(true)); // false because of number coercaion

--- convert into the number *******

let a = "1";

console.log(a);
let newA = +a;
console.log(newA);
let anyNum = parseInt(a);
// parseFloat()
console.log(anyNum);

---------- safe number ---

let maxSafe = Number.MAX_SAFE_INTEGER;
let minSafe = Number.MIN_SAFE_INTEGER;

// b/w this two number we can perform operation esaly with safely 

--- and more 
for more info check 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#description
*/

/* ===== boolean ==========
only true or false

Boolean coercion

true ----> 1 ||and|| false -----> 0

undefiend === false || 0 (in number)
null ---> false || (0 in number ) 
0,-0,NaN -----> false any other number alway give true
""---> false(empty string or only space string) and any other string always true
{} --> true (all)

----- constructor--------------
let anyYes = Boolean(true); // rarely used

console.log(anyYes);

*/

/* ===== strings ====

in js string are written in `` or '' or ""
'a' and "abc" both are string no speacial datatype for char 


String coercion

undefined --- >"undefined"
null --- > "null"
true --- > "true" || false ----> "false"

--- constructor (rarely used) ---
let str = String("halo")



*/

let str = "JavaScript";
let newStr = "Language";

// console.log(str.length); // return length of the string include white spaces
// console.log(str.charAt(1)) // give charcter at given position
// console.log(str.charCodeAt(0)); // give charchetr code (UTF) at given position other wise

// console.log(str.concat(newStr)); // use to join string
// console.log(str.endsWith("t")); // check that string ends with given para meter or not
// console.log(str.includes("pt"));
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
