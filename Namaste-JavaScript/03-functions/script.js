var x = 1; // IN GEC memory allocate and set value to the undefined for x variable 
// for both function copy (kind of) to in GEC 
// x = 1;
a(); // function invoke // hoisting
b(); // function invoke // hoisting
console.log(x); // x = 1 print
// CALL STACK

// GEC CREATED AT BOTTOM 
// 1. function a invoke THAN FUNCTION'S  LOCAL EXECUTION  CONTEXT and DESTROY AT function compilation
// 2. function a invoke THAN FUNCTION'S  LOCAL EXECUTION CONTEXT and DESTROYED AT function compilation
// GEC destroy 
// CAll stack complete 


function a() { // LOCAL EXECUTION CONTEXT create and memory allocate , set variable value `undefined`
  var x = 10; // var x = undefined // here undefined replace with 10  
  console.log(x); // x value that 10 created
} // LOCAL EXECUTION CONTEXT destroy 

function b() { // LOCAL EXECUTION CONTEXT create and memory allocate , set variable value `undefined`
  var x = 100; // var x = undefined // here undefined replace with 100
  console.log(x);  // x value that 10 created
} // LOCAL EXECUTION CONTEXT destroy 
