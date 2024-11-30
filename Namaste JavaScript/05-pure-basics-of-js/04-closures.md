# what is closures ?

- function bundled with its lexical environment
- JS has lexical environment , if we need to access variable that it will first try to find in local memory than try to find in its parent lexical environment .

```js
function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  y();
}
x();
```

- simple words :- a closure function is a function that has access to its outer function scope even after a function execution is over

- a closures can remember and access the variables and argument references of its outer function even after a function has returned / overed

- more simple words :-
  > A closures is the JavaScript feature where inner function has access to the outer function variable , even after the outer function has finished its execution.
  > Closures allow function to remember the environment which they were created .

```js
function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  return y;
  // sane as above
  //   return function y(){
  //     console.log(a);
  //   }
}

let z = x(); // y whole function return

console.log(z); // y function print
z(); // y function call and print the 10
// they maintain lexical env
```

```js
function x() {
  let a = 10;
  function y() {
    console.log(a); // a references not a 10 value
  }
  a = 100;
  return y;
}
let z = x();

z();
```

- in above `x` function , inside it `a` and y function is declared
- y function print the value of `a`
- after y function we change the value of `a` to the `100`
- than return `y` function

- x function called and it return the y function , so we called y function
- it will print the value of `a` is 100 not 10
- Closure take references of the variable not a actual value in the above code we change the value of `a` first than return y function
- a is already changed after than we call the y function with help of z variable

---

- Any level of closure can created

```js
function a() {
  var x = 10;
  function b() {
    var y = 20;
    function c() {
      var z = 30;
      console.log(x, y, z);
    }
    c();
  }
  b();
}
a();
```

# advantages

1. Modular Design
2. Currying
3. Memoization
4. Data Hiding and Encapsulation
5. setTimeouts

# disadvantages

1. Over consumption of memory
2. Memory Leak
3. Freeze browser
