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

- reduce method take all values from the array and try to return single value / element from array

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
Array.reduce(function (accumulator, current) {}, initial value);
```

- accumulator value and current value are two most important parameter for the callback function , `current` parameter indicates the current element in array
- second parameter for reduce is initial value . and for the first element accumulator value is initial value

```js
let a = [45, 1, 7, 3, 0, 14000, 34, 12, 890];
console.log(
  a.reduce(function (accumulator, current) {
    return accumulator + current;
  }, 0)
);
```

```js
let a = [45, 1, 7, 3, 0, 14000, 34, 12, 890];
console.log(
  a.reduce(function (max, current) {
    if (current > max) {
      max = current;
    }
    return max;
  }, a[0])
);
```

## chaining

```js
const data = [
  { firstName: "Utsav", lastName: "Dhimmar", age: 18 },
  { firstName: "Elon", lastName: "Musk", age: 53 },
  { firstName: "John", lastName: "Musk", age: 39 },
  { firstName: "Sam", lastName: "Altman", age: 39 },
  { firstName: "Roy", lastName: "Jason", age: 18 },
];
const output = data
  .filter((person) => {
    if (person.age < 30) {
      return person;
    }
  })
  .map((person) => {
    return person.firstName;
  });

console.log(output);
```
