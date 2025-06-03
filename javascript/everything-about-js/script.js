// console.log(10 + "20");
// console.log(9 - "5");
// console.log("java" + "script");
// console.log("" + 0);
// console.log("vinod" - "thapa");
// console.log(true + true);
// console.log(true + false);
// console.log(false + false);
// console.log(false + true);

// var hoho = null;   -> data type object
// var bagh = undefined;    -> like this is standby. datatype = undefined
// console.log("he is " + hoho + " or " + bagh);

// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));

// var year = 2020;

// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log("leap year");
//         }
//         else {
//         }
//         console.log("no leap year");
//     } else {
//         console.log("leap year");
//     }
// } else {
//     console.log("not a leap year");
// }

// if (year % 4 == 0 && year % 400 == 0) {
//   console.log("leap year");
// } else {
//   console.log("no");
// }
// try here this values :- null , 0, undefind , ""
// if (false) {
//     console.log("hh");
// } else {
//     console.log("nn");
// }

// var year = 2016;
// console.log(( year % 4 == 0 && year % 400 == 0) ? "yes" : "no"); // this is might wrong

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// loops
// 1. while loop
// var a= 0;
// while (a<=27) {
//     console.log(a);
//     a++;
// }
// 2.var a = 0;
// do {
//   console.log(a);
//   a++;
// } while (a <= 12);
// var a=10
// do {
//       console.log(a);
//       a++;
//     } while (a >=20); o/p is 10 😦😦🤯
// -> first  give out put than check result
// for (var a = 1; a <= 10; a++) {
//     debugger;
//   console.log(a);
// }
// first check condition than output
// for (var num = 1; num <= 10; num++) {
//   debugger;
//   var tableof = 8;
//   console.log(tableof + "*" + num + "=" + tableof * num);
// }

// for (var n = 1; n <= 10; n++) {
//   tableof = 9;
//   console.log(tableof + "*" + n + "=" + tableof * n);
// }

//
//
// function sum() {
//     sum=a+b;
//     console.log(sum);
// }
// sum(a=10,b=20);
// ➡️ this hard code . why? because if i need 20+4 or 200+40 etc.   this is not posiable in above code see
// below code
//
//
//
// function sum(a,b) {
//     total=a+b;
//     console.log(total);
// }
// sum([10,20]);
// sum([4000,1]);
//      in this [] is argument
// this is good code see sum(10,20); and sum(4000,1); -> i can easly so addition and do so many addition without any problem easy 😊
// why it is easy ? -> a,b are parameter with a,b parameter i can pass any value of a and b
// function sum(a, b) {
//   total = a + b;
//   console.log(total);
//   return(0);
// }
// var funExp = sum(78, 10);
// funExp;
// -=-=-=-=-=-=-=;-=;-=-==-=;,=-,=-;;-=,=-;=;from chatgpt
// Corrected code examples and explanation:

// // Function definition with parameters a and b
// function sum(a, b) {
//   total = a + b;
//   console.log(total);
//   return total; // Return the total value
// }

// // Calling the sum function with different arguments
// var result1 = sum(10, 20);   // Output: 30
// var result2 = sum(20, 4);    // Output: 24
// var result3 = sum(200, 40);  // Output: 240

// console.log(result1); // Output: 30
// console.log(result2); // Output: 24
// console.log(result3); // Output: 240

// -=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-chatgpt end here
// function sum(a, b) {
//   return total =a+b ;
// }
// var funExp = sum(78, 10);
// console.log("the sum of two number is "+funExp);

// in below code nija in hole function name
// var nija = function (a, b) {
//   return (total = a + b);
// };
// bheem variable use as passing parameter
// also like this nija(78,10) both give same output
// var bheem = nija(78, 10);
// console.log("Two Number sum IS = "+ bheem);

/* -=-=-=-=-=-=-=-=-=-=-==-=-= welcome to ECMAScript -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


+_++_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_++_+_+_+_+_+_+_+_+_+_+_+_=-
// var name = "utsav";
// console.log(name);


// name = "dhimmar utsav "
// console.log(name);
// ================================ both code output utsav
//                                                 dhimmar utsav
// let name = "utsav";
// console.log(name);


// name = "dhimmar utsav "
// console.log(name);

// const name = "utsav";
// console.log(name);


// name = "dhimmar utsav "
// console.log(name);

// in const we cant change value 
-=-===-==-.=,=/-,=-=/-=,-/=,-=-=-from chatgpt
// Variable declaration and assignment using 'var'
var name = "utsav";
console.log(name); // Output: utsav

name = "dhimmar utsav ";
console.log(name); // Output: dhimmar utsav

// Variable declaration and assignment using 'let'
let name = "utsav";
console.log(name); // Output: utsav

name = "dhimmar utsav ";
console.log(name); // Output: dhimmar utsav

// Constant declaration and assignment using 'const'
const name = "utsav";
console.log(name); // Output: utsav

// Attempting to reassign a constant will result in an error
name = "dhimmar utsav "; // This will throw an error

// Explanation:
// 'var', 'let', and 'const' are used to declare variables in JavaScript.
// - 'var' has function scope or global scope depending on where it's declared.
// - 'let' has block scope and can be reassigned.
// - 'const' has block scope and cannot be reassigned after initial assignment.

// In your explanation, you are correct that 'const' variables cannot be reassigned once they're given a value. However, you should note that the code example where you attempt to reassign 'name' after declaring it as a constant will actually result in an error, and the script will stop executing.


;;[;[/.;[;;;[,][;;,;/[;,[;[,;[;,[/;[,end chatgpt
==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=
default argument
in below code b is defult argument iw user do not enter b argument than directly subtacrt by 1 
function sub(a, b=1) {
  return a - b;
}
console.log(sub(10,3));
//

=-=-=-=-=-=-=-=bad boy 💀😎😎😎😎😎💀  start here
arrow function 


// const sum = (a, b) => {
//   return a + b;
// };
// const total = sum(10,20)
// console.log(`the two number sum is ${total}`);


                                  
*/

// arrays in jvascript

// var array1 = ['utsav','mark',true , 123, 0];
// console.log(`the arrays store this values : ${array1}`);

// var name = ["utsav ", "mark", "hulk","banner ","g"];
// console.log(name[0]); //utsav
// console.log(mame[1]); //mark
// console.log(mame[2]); //hulk
// console.log(mame[3]); //banner
// console.log(mame[4]); //g
// this is kind of boring

// var name = ["utsav ", "mark", "hulk","banner ","g"];
// console.log(name.length); // give array length
// console.log(name[name.length-3]); // banner

// var name = ['utsav','harry','mark','banner','hulk'];

// for (var i = 0; i < name.length; i++) {
//   console.log(name[i]);
// }
// old

//after ES6
// 1. for ... in

// var name = ['utsav','harry','mark','banner','hulk'];
// for (let elements in name) {
//  console.log(elements);
// }
// output will be 0
// output will be 1
// output will be 2
// output will be 3
// output will be 4

// var name = ['utsav','harry','mark','banner','hulk'];
// for (let elements in name) {
//  console.log(name);
// }
//              output
// [ 'utsav', 'harry', 'mark', 'banner', 'hulk' ]
// [ 'utsav', 'harry', 'mark', 'banner', 'hulk' ]
// [ 'utsav', 'harry', 'mark', 'banner', 'hulk' ]
// [ 'utsav', 'harry', 'mark', 'banner', 'hulk' ]
// [ 'utsav', 'harry', 'mark', 'banner', 'hulk' ]

// var name = ['utsav','harry','mark','banner','hulk'];
// for (let elements of name) {
//  console.log(name);
// }

// output
// [ 'utsav', 'harry', 'mark', 'banner', 'hulk' ]
// [ 'utsav', 'harry', 'mark', 'banner', 'hulk' ]
// [ 'utsav', 'harry', 'mark', 'banner', 'hulk' ]
// [ 'utsav', 'harry', 'mark', 'banner', 'hulk' ]
// [ 'utsav', 'harry', 'mark', 'banner', 'hulk' ]

// var name = ['utsav','harry','mark','banner','hulk'];
// for (let elements of name) {
//  console.log(elements);
// }

//      output
// utsav
// harry
// mark
// banner
// hulk

// var name = ["utsav", "harry", "mark", "banner", "hulk"];
// name.forEach(function (element, index, array) {
//   console.log(element +" index : " + index + " array : "+ array);
// });

// ouput
// utsav index : 0 array : utsav,harry,mark,banner,hulk
// harry index : 1 array : utsav,harry,mark,banner,hulk
// mark index : 2 array : utsav,harry,mark,banner,hulk
// banner index : 3 array : utsav,harry,mark,banner,hulk
// hulk index : 4 array : utsav,harry,mark,banner,hulk

// var name = ["utsav", "harry", "mark", "banner", "hulk"];
// name.forEach((element, index, array) => {
//   console.log(element + " index : " + index + " array : " + array);
// });
// forEach retuen undefined
//    search & filter in array

// indexof()
// var name = ["utsav", "harry", "mark", "banner", "hulk","utsav"];
// // Array.prototype.indexOf()

// console.log(name.indexOf("utsav",2)); // find "utsav" after indexd number 2 if it is not found it give -1
// console.log(name.indexOf("utsav")); //give index number
// this is case sensitive later in string i lern how to manage it

// lastindexof()

// var name = ["utsav", "harry", "mark", "banner", "hulk","utasv"];
// console.log(name.lastIndexOf("utsav",4));

// same as indexOf(); but one different indexOf() search first to lase =======> but lastIndexOf() search laast to first <===========

// includes();

// var name = ["utsav", "harry", "mark", "banner", "hulk","utsav"];
// console.log(name.includes("utsav"));
// find utsav includes or not if it includes give true , and if not includes give false
// it is also forword search .

// Array.prototype.find()

// let prices = [
//   50, 100, 150, 200, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850,
//   900, 950, 1000,
// ];
// let eye = prices.find((cvalue) => {
//   return cvalue < 90
// });
// console.log(eye);

// let eye = prices.find((cvalue) => cvalue > 100);
// console.log(eye);
//
//
// console.log(
//   prices.find((value) => {
//     return value > 500;
//   })
// );
// find elements in array if found than it return element if not than return undefined , but it retrun only 1 element .

// let prices = [
//   50, 100, 150, 200, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850,
//   900, 950, 1000,
// ];
// let eyeindex = prices.findIndex((cindex) => cindex < 200);
// console.log(eyeindex); // output is 0 why ? because 50>200 and 50 's index number is 0 , if not found than return -1

// most imp filter() for react js & index
// let prices = [
//   50, 100, 150, 200, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850,
//   900, 950, 1000,
// ];
// let omgfilter = prices.filter((cvalue) => {
//   return cvalue > 30;
// });
// output    [
//   50, 100, 150,  200, 300,
//  350, 400, 450,  500, 550,
//  600, 650, 700,  750, 800,
//  850, 900, 950, 1000
// ]
// see condition  satisfiyed tnah craete new array if condtion not stesifyed than return emty array
// let prices = [
//   50, 100, 150, 200, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850,
//   900, 950, 1000,
// ];
// //  let omgfilter = prices.filter((cvalue,index,arr)
// let omgfilter = prices.filter((cvalue) => {
//   return cvalue > 300;
// });
//console.log(omgfilter);
// output [
//   350,  400, 450, 500,
//   550,  600, 650, 700,
//   750,  800, 850, 900,
//   950, 1000
// ]
// console.log(prices);

// sort array
// let array1 = ["utsav ", "mark", "harry", "hulk", "banner", "code"];
// console.log(array1.sort());  // [ 'banner', 'code', 'harry', 'hulk', 'mark', 'utsav ' ] sort in acending way like a,b,c,d
// let array2 =[1,2,3,4,5,6,7,8,9,10,20,25,30,35]
// console.log(array2.sort());

// output  [
//   1, 10, 2, 20, 25, 3,
//  30, 35, 4,  5,  6, 7,
//   8,  9
// ]
// oh 10<2 ohhhhhhhhh , sort() first convert in string than sort in acending way actule this is string method
// in number 1 come first than 2

// let things = ["dog", "belt", "bird", "cow", "chicken "];
// console.log(things.length);
// things.push("i am at last.");
// console.log(things + " now length is " + things.length);

// let things = ["dog", "belt", "bird", "cow", "chicken "];
// let newThings = things.push("i am last babes")
// console.log(things); // give array
// console.log(newThings);  // give array length
// for multiplte
// things.push("i am at 1 last ", "i am 2 last ", " iam 3 last")
// console.log(things);

// let things = ["dog", "belt", "bird", "cow", "chicken "];
// things.unshift("i am first first ", " i am 2 first");
// console.log(things);
// same as push() . push() add at last and unshift() add at first . both return new array

// pop() & shift()

// let array = ["abc",'pqr','xyz','mno','efg'];
// console.log(array);
// console.log(array.pop()); // remove last element
// console.log(array);
// console.log(array.shift()); // remove first element

// let months = ["jan", "march", "april", "june", "july"];
//
//solve this questions using
// months.splice()
// 1. add dec at end of the array
// months.splice(4,0,"dec"); // dec elemnt need to add at last so our array length last index is july means index number 4 but outout [ 'jan', 'march', 'april', 'june', 'dec', 'july' ] why ? because splice see arrays='s length

// months.splice(months.length, 0, "dec"); // [ 'jan', 'march', 'april', 'june', 'july', 'dec' ]
// console.log(months);
// 2. update march to March

// let months = ["jan", "march", "april", "june", "july"];
// months.splice(1,1,"March") //[ 'jan', 'March', 'april', 'june', 'july' ]
// months.splice(2,1,"March") // [ 'jan', 'march', 'March', 'june', 'july' ] // this above both code but it is to mannual for big code so this is fast and best code
// const monthindex = months.indexOf("june") // this will give index
// if(monthindex!=-1){
//   const updateMonths = (months.splice(monthindex,1,"June"));
//   console.log(months);
//   console.log(updateMonths); // check index,  if -1 (not found) than run it otherwise
// }else{
//   console.log("Error"); // this code will run
// }
//[ 'jan', 'march', 'april', 'June', 'july' ]
//[ 'june' ]
// console.log(months);
// 3. delete june
// console.log(months.splice(1,0,"march"));
// let months = ["jan", "march", "april", "june", "july"];
// const monthindex = months.indexOf("june") // this will give index
// if(monthindex!=-1){
//     const updateMonths = (months.splice(monthindex,1));
//     // const updateMonths = (months.splice(monthindex,1,""));
//    // const updateMonths = (months.splice(monthindex,Infinity)); // delete all value after june see 472
//     console.log(months);
//     console.log(updateMonths); // check index,  if -1 (not found) than run it otherwise
//   }else{
//     console.log("Error"); // this code will run
//   }

// Map()  almost same as filter() create new array do nothing with origanl array

// let arr1 = [1, 4, 9, 16, 25, 36, 42, 48, 54];
// // let arr2 = arr1.map((cvalue,index,arr)
// let arr2 = arr1.map((cvalue) => cvalue < 25);
// console.log(arr1); // above array
// console.log(arr2); // [
//   true,  true,  true,
//   true,  false, false,
//   false, false, false
// ]

// output root
// let arr = [25, 36, 49, 64, 81];
// let sqroot = arr.map((cvalue) => `${cvalue}'s squre root is  ${Math.sqrt(cvalue)}`);
// // console.log(arr);
// console.log(sqroot);

// multiply each elemnt by 2 but ans < 10
// let arr = [2, 3, 4, 6, 8];
// let multi = arr
//   .map((cvalue) => {
//     return cvalue * 2;
//   }) //[ 4, 6, 8, 12, 16 ]
//   .filter((cvalue) => {
//     return cvalue > 10;
//   }) // [ 12, 16  ] // total of ans
//   .reduce((sum, cvalue, index, arr) => {
//     return (sum += cvalue);
//   }); // 12+16 =28
// console.log(multi);

// arr.reduce(accumulator[like box],cvalue,index,Arr);
// with map() we can use multipal array method see above ex. first we use map () than filter() it is called chain methods
// forEach retuen undefiend but map() retuen new array with Original array's result
// Array.prototype.reduce() use to flatten array means convert 2-d and 3-d array into 1d array

// A JavaScript string is zero or more characters written inside quotes.
// JavaScript strings are used for storing and manipulating text.
// You can use single or double quotes
// Strings can be created as primitives,
// from string literals, or as objects, using the String() constructor

// their are three way to create string
// let name = "Utsav"; //1. using ""
// console.log(name);
// let lname = "Dhimmar"; // 2. using ''
// console.log(lname);
// let laptop = new String("hp"); // 3. usising String() consturture // return in array string so we dont use it // 🙂
// console.log(laptop);
// let keyboard = String("logitech");
// console.log(keyboard);
// console.log(`${name}'s last name is ${lname} and he have ${laptop}`);

// let name = " my name is "utsav Dhimmar"";  this is not posiable we cant put another "" in ""
// let name = 'my name is "utsav"'; // this is right
// let name =" my name is 'utsav'"; // this is also right
// Escape charatere
// let name = "my name is \"utsav \" "; // with backshalsh Escape charatere  // serach google for more Escape character

// foiding string is sting
// Finding a String in a String
// String. prototype. indexOf(searchValue [ , fromlndex])
// The indexOf() method returns the index of (the position of) the first ccurrence of a specified text in a string // if string not found than it give -1
// let str = "This is string-1 and i am string-2 continue this main string"; // give 8(index) after 8 charater(including space) came  string-1 than it give 8
// console.log(str.indexOf("string-1"));

// String-prototype.lastIndex0f(searchValue [ , fromlndex]) ta
// Returns the index within the calling String object of the
// last occurrence of searchVa1ue, or -1 if not found.

// let str = "This is string-1 and i am string-2 continue this main string";
// console.log(str.lastIndexOf('string-1'));

// Searching for a String in a String
// String. prototype. search(regexp)
// The search() method searches a string for a specified
// value and returns the position of the match

// let str = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
// console.log(str.search("h"));
// same output as indexOf() & lastIndexOf() hmmm.
// but search() dont take form index means str.search("h",33) here 33 is like nothing it always will ignore , if atring not found than it give -1 👍

// extarcting string part
// 3 ways
// 1. slice(start,end)
// 2. substring(start,end)
// 3.  substr(start,length)
// let strog = "apple, banana , mango";
// console.log(strog.slice(0,5));

// print only 280 charator

// // let tw =
// //   "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus excepturi cum earum at nesciunt quia corporis nulla totam asperiores, obcaecati quasi pariatur, atque velit illo ad suscipit odio! Corrupti perferendis pariatur sint corporis recusandae quos soluta exercitationem reprehenderit quidem vel, ullam quo laudantium? Amet earum sunt laborum, eum perferendis cupiditate optio doloremque similique reiciendis rerum beatae autem nisi error fuga provident. Maxime repudiandae, sunt possimus corporis minima saepe obcaecati nesciunt perspiciatis cupiditate ad asperiores rem recusandae quae ipsam! Vero assumenda nihil deserunt tempore totam molestias voluptas rem illo praesentium? Eligendi est aspernatur corporis vitae veritatis consectetur, nobis hic eum sapiente quae similique debitis nihil quis quia accusantium at delectus dignissimos deserunt dolorum porro enim doloribus harum. Doloremque doloribus quae tempora dignissimos velit, recusandae reprehenderit excepturi modi? Dignissimos eveniet voluptatem neque quam dolor deleniti rem ratione distinctio quidem consequatur, doloribus minima similique cumque perferendis inventore et fugiat magni non, asperiores atque. Ea corporis eveniet quibusdam itaque qui animi ipsa inventore magni soluta est vitae, debitis, tempora corrupti deserunt, quam hic ipsam perspiciatis minus autem! Itaque praesentium incidunt voluptates minima necessitatibus eveniet aperiam esse tenetur ex blanditiis nisi, reiciendis accusamus autem animi, sunt quibusdam ullam repellendus nostrum officia ipsam vero? Facilis laborum tempora reiciendis! Aspernatur voluptas mollitia et dolore, fuga nemo accusantium earum voluptates obcaecati, facilis, debitis repellat suscipit placeat? Quam ipsum, suscipit quos perspiciatis explicabo cum accusamus dolor, officia illum doloribus esse molestias nulla eos laudantium voluptate labore adipisci blanditiis quia, fugit maxime. Architecto nesciunt minima sint mollitia blanditiis placeat similique expedita modi. Neque nisi non labore quas quaerat dolore repellendus reiciendis. Esse dolorum ex hic tempore odit! Maiores sequi laudantium nam iure ducimus ad dignissimos voluptas tenetur, est doloremque illum. Totam, magnam vel, consequuntur cumque ipsam nemo laborum obcaecati reiciendis aperiam dolores quia libero perferendis incidunt eligendi ullam ut, soluta consectetur! Sit facere vitae deserunt nam ex consectetur nihil id veritatis eos, veniam corrupti consequatur dignissimos esse quae ut, debitis accusantium, soluta voluptatum nobis officia libero? Cum laudantium odit est molestiae dignissimos adipisci libero perferendis? Totam sint nulla ullam atque nobis sapiente dignissimos corporis nostrum dolorum illo debitis odio non ipsum voluptate recusandae ducimus quo adipisci impedit omnis, molestiae neque, consequatur beatae quia! Explicabo, culpa quae voluptatum consequatur laboriosam accusamus magnam, dolores officiis, aliquam facere itaque sed tempore sint consectetur doloribus blanditiis. Fugit eveniet perferendis eius provident, iure excepturi optio similique tenetur, possimus nobis officiis iste rerum nesciunt omnis non voluptatem dignissimos totam neque amet sed nisi officia laborum corporis libero! Impedit, dicta! Saepe nemo unde soluta veritatis accusamus esse, enim tempora natus nesciunt fugit corrupti nobis dicta voluptates debitis laborum qui exercitationem eveniet, alias perspiciatis veniam itaque? Ut fugiat incidunt doloremque nulla illum veritatis optio sint error in mollitia? ";

// let tw280 = tw.slice(0, 280);
// console.log(tw280);
// console.log(tw280.length);

// // The substring() Method
// // substring() is similar to slice(l).
// // The difference is that substring() cannot accept negative indexes.
// let strog = "apple, banana , mango";
// console.log(strog.substring(8, -6)); //this is start from 0 indexing .

// // The substr() Method
// // substr() is similar to slice().
// // The difference is that the second parameter specifies the length of the extracted part.

// let strog1 = "apple, banana , mango";
// console.log(strog.substr(-7));

// let strog2 = "apple, banana , mango";
// console.log(strog.substr(0, 4)); // best use when we need to print from backword <--

// // repalcing string content

// // string.prototype.repalce(searchFor,repalceWith);
// // ~ repalce specifice value with(by deafult) first match , case sensitive, do not change string
// let name = "My name is Utsav and i am from india";

// let findname = name.replace("My", "His ");
// console.log(findname);
// //output-- His  name is Utsav and i am from india

// let name1 = "I am Utsav and I am from india";
// let findname2 = name.replaceAll("I am", "He is");
// console.log(findname);

// // output ---  He is Utsav and He is from india

// // extracting string characters
// // 3 ways

// //      1
// let a = "My name is Utsav";
// console.log(a.charAt(3)); // output n
// //      2
// let a1 = "My name is Utsav";
// console.log(a.charCodeAt(3)); // it return charator unicode utf-16 code b/w 0 to 65535

// //retuen last charator and its code
// let a2 = "My name is Utsav";
// console.log(a.charAt(a.length - 1));
// console.log(a.charCodeAt(a.length - 1));

// //      3.
// let a3 = "My name is Utsav";
// console.log(a[0]); // output M
// //same as array but when we use with string it called proprety access.

// other usefull methodes.
// let a = "My Name is Utsav.";
// console.log(a.toUpperCase());  // upper case
// console.log(a.toLowerCase());  // lower case

// let a1 = "my name is";
// let a2 = "utsav ";

// console.log(a1.concat(a2));   // joint two string but without space
// console.log(a1.concat(" ", a2)); // joint two string but with space
// console.log(`${a1} ${a2}`);  // best way to concat

// let b = "           utsav         ";
// console.log(b.trim());       // remove space from start & end

// let name = "a,b,c";
// console.log(name.split(","));    // convert into array base on parameter

//////////////////////////////////////////////////////date & time\\\\\\\\\\\\\\

// JavaScript Date objects represent a single moment in time in a
// platform-independent format. Date objects contain a Number
// that represents milliseconds since January 19701 UTC.

// ,.,..,<<?<><<><  >    1

// console.log(new Date());  // give date

//console.log(new Date().toLocaleString()); // formated date that user can undeerstand

//console.log(new Date().toString()); // same as above

//console.log(new Date().toDateString()); // give weekday(frieday) , month ,date , year

//console.log(new Date().toLocaleTimeString()); //give time am pm format

// console.log(new Date().toTimeString()); // give time 24 hour format with gmt

//* <><><><><><><<> 2 <</></></></></></> */
// let a =new Date(2023,8,29,10,44,50,8);   // in paranthisis (year , month , date,hour, min ,second , milisecond)
// console.log(a.toLocaleString());
// console.log(new Date().toLocaleString());

//            3
// let a= "sep 29,2023 10:53:13";   // month is words, date , year [space] hour,min,second
// console.log(a.toLocaleString());

//          4
//let a = Date.now();  // give now time in milliseconds
// console.log(a);
// console.log(Date.now().toLocaleString());
// console.log(a.toLocaleString());
// console.log(new Date(0).toLocaleString());

// some usefull methods of date()

// let date = new Date();
// console.log(date.toLocaleString());
// console.log(date.getFullYear());         // output year
// console.log(date.getMonth());      // output  month
// console.log(date.getDate());      // output   date
// console.log(date.getDay());      // output week of the date

///  seter date & time
// let curDate = new Date();
// console.log(curDate.setFullYear(2023).toLocaleString());
// console.log(curDate.setFullYear(2023,8,29).toLocaleString());
// console.log(curDate.setMonth(8).toLocaleString());
// console.log(curDate.setDate(29).toLocaleString());

// ,, all are date methods

//  get time methods
// let date = new Date();
//console.log(date.getTime());
// console.log(date.getHours());      // output  hour
// console.log(date.getMinutes());      // output minutes
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());      // output  milisecond

// set time methods
// let date = new Date();
// console.log(date.setHours(14).toLocaleString());

///////////       9

// console.log(Math.PI); // retuen pi value
// console.log(Math.pow(2,3)); // 2*2 = 4*2 =8
// console.log(2**3);  // 2*2 = 4*2 =8
// console.log(Math.round(10.2));  // 10.2 means output is 10
// console.log(Math.round(10.5));  // // 10.5 means output is 11
// console.log(Math.sqrt(4));    // reunr sqrt of 4
// console.log(Math.sqrt(16));   // reunr sqrt of 16
// console.log(Math.sqrt(36));   // reunr sqrt of 36
// console.log(Math.abs(-25));  // negative number so convert into positive number
// console.log(Math.abs(-25.5));
// console.log(Math.abs(25));   // if number is positive than is return same number
// console.log(Math.ceil(25.5));
// console.log(Math.ceil(25.2));
// console.log(Math.floor(35.5));
// console.log(Math.floor(35.2));

/* // WHO IS DOM ?
   window vs DOM(document)
   1. window is full browser screen & called as global object document is child of window means no comparision b/w windew & DOM
   2.  if object , proprty & methods are in window object than we don't need to refer it &
   if if is DOM than it need to refer it
   3 . Window is parent where as document is child of window .document work with html element & dom .


// ************** DOM & BOM
  The DOM is the Document Object Model, which deals with the document,
  the HTML elements themselves, e.g. document and all traversal you
  would do in it, events, etc.
    For Ex:
    change the background color to red
    document . body . style . background= "red";
    
 The BOM is the Browser Object Model, which deals with'• browser com onen s
 aside from the document, like history, location, navigator and screen
(as well as some others that vary by browser). OR
In simple meaning all the Window operations which comes under BOM are performed
usign BOM


// DOM navigation
1: document . document Element
// returns the Element that is the root element of the document.
2:document.head
3:document.body
4: document.body.childNodes (include fable enter and whitespace)
list of the direct children only
document.children (without text nodes, only regular Elements)
document.childNodes.length

same way we can retrive parent elemnt
1. document.body.firstElementChild.parentElement


*/

/* OOPS IN JS 

1. what is object literals ?
  -> key:value pairr data structure,
  -> storing variable & funstion togather in one container
     1.st way
        
            let bioData ={
            name : "utsav",
            age: 17,
            gender : "male",
            details : function mydetails() {
            console.log(`my name is ${bioData.name} & age is ${bioData.age} & he is ${bioData.gender}`);
               }
            }

bioData.details();
 2. way
 ya only remove function keyword !!!!! 
let bioData ={
            name : "utsav",
            age: 17,
            gender : "male",
            details () {
            console.log(`my name is ${bioData.name} & age is ${bioData.age} & he is ${bioData.gender}`);
               }
            }
*/
/* WELCOME BACKE ES6
  1. DESTRUCTING IN JS
    in array
//let bioData = ["utsav", "dhimmar", 17];

// let myName = bioData[0];
// let myLName = bioData[1];
// let myAge = bioData[2];        // old way
// console.log(`i am ${myName}  ${myLName} & my age is ${myAge}`);


let bioData = ["utsav", "dhimmar", 17];
// new way
let [myName, myLName, myAge] = bioData;
console.log(`i am ${myName}  ${myLName} & my age is ${myAge}`);
 
let [myName, myLName, myAge,gender="male"] = bioData; // for adding data .
IN OBJECT
      let obj = {
      fname: "Utsav",
      lname: "Dhimmar",
      age: 17,
      };

let myName = obj.fname; // same with other 
console.log(myName);
////// older way


let obj = {
  fname: "Utsav",
  lname: "Dhimmar",
  age: 17,
};

let {fname,lname,age}=obj;
console.log(fname);
// new way


let {fname,lname,age,gender="male"}=obj; // for adding data

2. OBJECT PROPERTIES
let name = "utsav";
let bioData = {
  name:" hi ",
  17 : "is my age "
};
console.log(bioData.name);  // globle name variable & object is sae=me but output is "hi"
 


let name = "utsav";
let bioData = {
  [name]:" hi ",
  [18-1] : "is my age "
};
console.log(bioData);  // now object name <key>  have name <globle variable value>
console.log(`i am ${bioData[name]} & my age in ${bioData[[18-1]]}`)  // for printing  individual value in  [] 

*********888   IF KEY & VALUE IS SAME *******

let name = "utsav";
let age = 17;
let bioData = {
  name,
  age,
};

3. spread OPEARTOR
let name = ["utsav","mark","harry" ];
let newName =[...name,"thapa","sam"]
console.log(newName);
// now need to write agin full same array value 

4. REST OPRETOR
*/

/*   ECMASCRIPT 2016 ES6
1. array.prototype.includes
let color = ["red", "blue", "black"];
let colorOk =color.includes("red");
console.log(colorOk);

if include than it retun true if not than it return false;
2. exponetiation oprators
console.log(2**3);
*/

/* ES 7
1. add pading into the string  

let name = "Utsav";
console.log(name);
console.log(name.padStart(10,"%"));
console.log(name.padEnd(15,"="));

2. 
2.1 Object.values()
->this methods return an array containing all object own property value
    let obj ={
name: "utsav ", age: 17
};
console.log(Object.values(obj));
[ 'utsav ', 17 ]
it break down object value into [ , ] form 

2.2 Object.entries(person)
 same as above object key & value into [ , ] form even array
 const person = { name: "Fred", age: 87 }
console.log(Object.entries(person) );
[ [ 'name', 'Fred' ], [ 'age', 87 ] ]

      with array
      const person = ["utsav","mark"]
      console.log(Object.entries(person) );
      [ [ '0', 'utsav' ], [ '1', 'mark' ] ]
*/

/* ES9 
1. FLAT AN ARRAY
-> create one dimensional array from any multidimensional array(by default 1 level).
// let arr =["sam1",["utsav","mark"],[["harry","sam"]] ,"virat"];
// console.log(arr.flat(1));  // only one level flat

// let arr =["sam1",["utsav","mark"],[["harry","sam"]] ,"virat"];
// console.log(arr.flat(1)); // 2 level flat

// let arr =["sam1",["utsav","mark"],[["harry","sam",["i",["am"],["use"],["less"]]]] ,"virat"];
// console.log(arr.flat(Infinity));   // infinity level flat 


*/

/* ES 2020

1. BIGINT

let maxNum = Number.MAX_SAFE_INTEGER;
let minNum =Number.MIN_SAFE_INTEGER;
console.log(`js can perform task(with accurecy) from ${minNum} to ${maxNum} `);
// after that number their id chance that task will not complte wiyh accurecy so we have bigInt.

const bigIntEx = 1236767676n;
console.log(typeof bigIntEx); // only need to put n after number

>>>>>>>>Nullish coalescing
console.log(false??"some truth value");
console.log(undefined??"some truth value");
console.log(null??"some truth value");
console.log(NaN??"some truth value");
console.log(true??"some truth value");


*/

/* ADVANCE JAVASCRIPT

1. CHECK HTML 


2. HIGHER ORDER FUNCTION

-> A FUNCTION WHICH TAKE ANOTHER FUNCTION AS ARGUMENT

3.  CALLBACK FUNCTION

-> FUNCTION WHICH GET PASSED AS AN ARGUMNET TO ANOTHER FUNCTION IS CALLED CBF
 combine example of HOF & CBF

// const add = (a, b) => {
//   return a + b;
// };
// const subs = (a, b) => {
//   return a - b;
// };
// const multi = (a, b) => {
//   return a * b;
// };
// const div = (a, b) => {
//   return a / b;
// };

// const cal = (oprator, num1, num2) => {
//   return oprator(num1, num2);
// };

// console.log(cal(add, 5, 2));

*/
console.log("hi");
