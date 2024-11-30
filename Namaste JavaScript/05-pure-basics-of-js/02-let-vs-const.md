- `let` and `const` variable declarations are even hoisted !!!! but not same as `var`
- `var` **->** global scope
- `let` and `const` **->** script scope **other then** global scope
- we can't access the value of `let` and `const` before initialized

-**Temporal Dead Zone(TDZ)**

- is the time between variable hoisted and till initialized the value.

```js
var a = 12;
// temporal dead zone
//  temporal dead zone
//  temporal dead zone
//    temporal dead zone
let c = 12;
console.log(c);
```

- `const` is more stricter than `let` and `let` is more stricter than `var`

- with `const` initialized compulsory and we can't re-assign the value
- with `const` and `let` variable re-declaration not allow got `SyntaxError` but with `var` allow
- use `const` > `let` > `var`
