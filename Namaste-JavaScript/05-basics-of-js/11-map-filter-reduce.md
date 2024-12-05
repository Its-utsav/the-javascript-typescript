# map filter and reduce

- All are higher order function
- [map filter and reduce](#map-filter-and-reduce)
  - [map](#map)
  - [filter](#filter)
  - [reduce](#reduce)

## map

- used when we want to transform the array . This method create a new array with the result set of calling function of every element
- `Array.map(function)`

```js
const arr = [5, 8, 1, 4];

const double = function (ele) {
  return ele * 2;
};
const triple = function (ele) {
  return ele * 3;
};
const binary = function (ele) {
  return ele.toString(2);
};

const output = arr.map(binary);
// console.log(output)
console.log(arr.map((e) => e * 2));
console.log(arr.map((e) => e * 3));
console.log(
  arr.map(function (el) {
    return el.toString(2);
  })
);
```

## filter

- Used for filtering the array 😃
- `Array.filter(function)` return a new array that satisfy the function condition

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isEven(el) {
  return el % 2 == 0;
}
console.log(arr.filter(isEven));

console.log(arr.filter((el) => el > 5));
console.log(
  arr.filter((el) => {
    return el ** el % 5 == 0;
  })
);
```

## reduce

- find the sum of all array element

```javascript
let a = [45, 1, 7, 3, 0, 34, 12, 890, 14000];

function sumOfArr(a) {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    ans += a[i];
  }
  return ans;
}

console.log(sumOfArr(a));
```

- with reduce method

```javascript
Array.reduce(function (accu, current) {}, initial value);
```

- previous value and current value are two most important parameter
