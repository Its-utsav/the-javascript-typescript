# Higher Order Function ft Functional Programming

- [Higher Order Function ft Functional Programming](#higher-order-function-ft-functional-programming)
  - [what is higher order function?](#what-is-higher-order-function)
  - [Example](#example)

## what is higher order function?

- A regular function take function as parameter or return a function than regular function known as higher order function

```js
function x() {
  console.log("Hello from X");
}

function y(param) {
  console.log("Hello from y");
  param();
}
y(x);
```

- `y` is higher order function and `x` is callback function

## Example

- write a code for counting the area , circumference , diameter for given radius .

```js
const radius = [2, 4, 6, 10];

const calculateArea = function (radius) {
  let n = radius.length;
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(Math.PI * radius[i] * radius[i]);
  }
  return ans;
};

const calculateCircumference = function (radius) {
  let n = radius.length;
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(2 * Math.PI * radius[i]);
  }
  return ans;
};

const calculateDiameter = function (radius) {
  let n = radius.length;
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(2 * radius[i]);
  }
  return ans;
};
console.log(calculateArea(radius));
console.log(calculateCircumference(radius));
console.log(calculateDiameter(radius));
```

- Ok but ....
- We are doing almost doing same thing for each but just a simple logic change .
- We are also violating the `DRY` **Do Not Repeat Your Self** principle
- above code only one line in each function is different

1. `Math.PI * radius[i] * radius[i]`
2. `2 * Math.PI * radius[i]`
3. `2 * radius[i]`

- We can create separate function for this main calculation logic and create function that handle similar kind of operation

```js
const area = function (radius) {
  return Math.PI * radius * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};
const Circumference = function (radius) {
  return 2 * Math.PI * radius;
};
const calculate = function (radii, logic) {
  let n = radii.length;
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(logic(radii[i]));
  }
  return ans;
};
console.log(calculate(radius, area));
console.log(calculate(radius, Circumference));
console.log(calculate(radius, diameter));
```

- Hmm we just create similar to the map function of JavaScript

```js
console.log(radius.map(area));
```

- Let's inject method to the direct Array Object

```js
Array.prototype.calculate = function (logic) {
  let n = this.length;
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(logic(this[i]));
  }
  return ans;
};
```

- Now `calculate` method available for directly to the array
