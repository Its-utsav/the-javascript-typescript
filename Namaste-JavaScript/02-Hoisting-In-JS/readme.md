- In JavaScript we can access the function (pure not a higher order function learn later) , variable but its value will be `undefined` due to JavaScript execution context's first phase called memory allocation phase
- Hoisting is a process in which we try to access variable before the initializing but didn't get error this because of memory allocation phase , in the case of `var` we get undefined , in the case of `let` and `const` we might get error