# this

> In JavaScript the `this` keyword refers to an current object , which object is dependent on how `this` keyword is being used / invoke.
> `this` keyword value dependent how the function call

```javascript
// global space // global space
function hello() {
  // function space / scope
}
```

- In global space it refers to an globalObject
- JavaScript can run any where with the help of JavaScript engine so whenever the JavaScript can run `this` keyword refers the different object
- In the **Browser** `this` keyword refers to the `window` object
- In the **NodeJS** `this` keyword refers to the `global` object
- In the **Bun** `this` keyword refers to the `JSGlobalProxy` object and `{}` empty object
- In the **Deno** `this` keyword refers to the empty `Window` object and `undefined`

- so every JavaScript runtime environment have different global space so different value of `this` keyword

- `this` keyword in function

```js
function hello() {
  var a = 10;
  console.log(this); // return a window object
}
hello();
```

- function `this` keyword refers to the window object but reality differently
- when we use `"use strict"` strict mode and check the `this` keyword refers object it will return `undefined`
- So the `this` keyword in function refers dependent on the strict and non strict mode

```js
"use strict";
function hello() {
  var a = 10;
  console.log(this); // undefined
}
hello();
```

- but why `undefined` and `window` object
- because of `this substitution`
- this value of this keyword is `undefined` or `null` , `this` keyword value replaced by globalObject only in non strict mode

> `this` keyword value dependent how the function call

```js
"use strict";
function hello() {
  console.log(this);
}
hello(); // undefined
window.hello(); // Window
```

- `this` keyword with object's method
- when function is associated with object than it became method but end of the day it will just only function

```js
let obj = {
  name: "Utsav",
  thisValFun: function () {
    console.log(this); // will logg obj
    // {name: 'Utsav', thisValFun: ƒ}
    console.log(this.name); // Utsav
    // this.name == obj.name
  },
};
```

- `call` , `apply` , `bind` method with `this`
- The use of `call` , `apply` and `bind` is the change / control of the this value which function will execute

1. `FunctionName.call(this,arg1,arg2.....)`

```js
let user1 = {
  name: "Utsav",
  printName: function () {
    console.log(this.name);
  },
};

let user2 = {
  name: "harry",
};

user1.printName();
user1.printName.call(user2);
```

- here `user2` don't have the `printName` method so we took help of `user1` object and use the `printName` method

2. `FunctionName.apply(this,[arg1,arg2.....])`

- similar to call but instead of direct argument it use array of argument

```js
let user1 = {
  name: "Utsav",
  printName: function (age = 0) {
    console.log(this.name + " " + age);
    console.log();
  },
};

let user2 = {
  name: "harry",
};

user1.printName();
user1.printName.call(user2, 23);

function knownlang(lang1, lang2, lang3) {
  console.table(`${this.name} know ${lang1} , ${lang2} , ${lang3}`);
}

knownlang.apply(user1, ["C", "Python", "JavaScript"]);
```

3. `FunctionName.bind(this,arg1,arg2.....]`

- bind return another function which we need to call

```js
let user1 = {
  name: "Utsav",
  printName: function (age = 0) {
    console.log(this.name + " " + age);
    console.log();
  },
};

let user2 = {
  name: "harry",
};

user1.printName();
user1.printName.call(user2, 23);

function knownlang(lang1, lang2, lang3) {
  console.table(`${this.name} know ${lang1} , ${lang2} , ${lang3}`);
}

let fun = knownlang.bind(user1, "C", "Python", "JavaScript");
fun();
```

- `this` with arrow function
- arrow function do not have their own `this` binding . so this value can not be set even with `call` , `apply` and `bind`
- they (arrow function) take value of this from their **enclosing** lexical(how / where written in code) context .

```js
let obj = {
  a: 10,
  fun: () => {
    console.log(this); // global scope means window object
  },
};
obj.fun();
```

```js
let obj = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this); // arrow function enclosed with in the x function
      // {a: 10, x: ƒ}
    };
    y();

    /**
    console.log(this);
    //  const y = () => {
    //   console.log(this); // arrow function enclosed with in the x function
    //   // {a: 10, x: ƒ}
    //   };
    //   y();
     */
  },
};
obj.x();
```

- `y` is enclosed in `x` function since `y` do not have `this` binding so writing directly in `x` function

```js
let obj = {
  a: 10,
  x: () => {
    const y = () => {
      console.log(this); // global scope means window object
    };
    y();
  },
};
obj.x();
```

- DOM inside the html element refers to the html element

```html
<button id="btn" type="button" onclick="console.log(this)">click me</button>
```

- will logged `<button id="btn" type="button" onclick="console.log(this)">click me</button>` same html element
