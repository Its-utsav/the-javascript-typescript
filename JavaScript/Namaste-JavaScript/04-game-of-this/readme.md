- whenever JS program execute than execution context created along with `this` (even with function execution)
- in IN GEC `this` -> return `window` **IN BROWSER** object that why

```js
this === window;
// ans :- true
```

---

code

```js
var a = 10;
function b() {
  var x = 12;
}

console.log(a); // 10
console.log(this.a); // 10
// this.a is similar to window.a
console.log(window.a); // 10

// but
console.log(x); // raised ERROR
```

- `x` raised error due to `x` declare inside the function that why it return `ReferenceError`
