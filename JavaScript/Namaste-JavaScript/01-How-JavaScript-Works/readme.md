# How JavaScript Works

- Everything in JavaScript happens inside an **Execution Context** . (It is just like big box in which whole code execute)

- JavaScript is synchronous (specific synchronous order) , single thread language (one command at a time) language.

---

## JavaScript Execution context

- Every time JavaScript code execution created first for global and then so on........

code example

```javascript
var a = 2;
function square(num) {
  var ans = num * ans;
  return ans;
}
var square2 = square(x);
var square4 = square(4);
```

1. Memory Allocation:

   - allocate memory for variable and set `undefined` to the variable value
     - In above code example `x` is variable and so its value set to the `undefined`
   - for the functions whole function definitions are copy

- global execution context
  {
  a: undefined,
  square: ƒ square(num)
  // rest of the things
  }

2. Code Execution:
   - in this phase the value of a variable assign to the variable now no need of `undefined`
     {
     a: 2,
     square: ƒ square(num)
     // rest of the things
     }

---

1. Whenever function is invoke (called) then new execution context is created for that function
2. Managing Code Execution context is very challenging that why it use **Call Stack**.
3. When JS execution start global execution context created at bottom of the call stack.
4. When function invoke than function local Execution Context created on top of the global execution context and destroy after function compilation , also remove from the global execution context
5. Once JS code execution is finished then whole JS Execution Context destroy
