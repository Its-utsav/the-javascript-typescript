# How JavaScript Works
- Everything in JavaScript happens inside an **Execution Context** . (big box in which whole code execute)
- JavaScript is synchronous (specific synchronous order) , single thread language (one command at a time).
----------------------------
##  JavaScript Execution context
- Every time js code execution created first then global and then so on........

code example 
```javascript 
var x = 2;
function square(num){
    var ans = num * ans;
    return ans
}
var square2 = square(x);
var square4 = square(4);
```
1. Memory Allocation:
    - allocate memory for variable and set `undefined` to the variable value
    - for the functions whole function definitions are copy

2. Code Execution:
    - in this phase the value of a variable assign to the variable now no need of `undefined`

-----
1. When function is invoke(called) then new Execution Context is Created
2. Once JS code execution is finished then whole JS Execution Context destroy 
3. Managing Code Execution context is very challenging that why it use **Call Stack**.
4. When JS execution start global execution context created at bottom of the cll stack.
5. When function invoke than function local Execution Context created and destroy after function compilation
