<!-- https://alok722.github.io/namaste-javascript-notes/dist/lectures.html#episode-15--asynchronous-javascript--event-loop-from-scratch -->

## toc

- [Event Loop](#event-loop)
  - [call stack](#call-stack)
  - [Browser](#browser)
  - [examples](#examples)
    - [example 1 normal](#example-1-normal)
  - [what go inside the Microtask Queue](#what-go-inside-the-microtask-queue)
  - [Questions](#questions)

# Event Loop

## call stack

> Time, tide and JS waits for none.

- JavaScript is single threaded language.
- Everything execute in JavaScript with help of call stack , it manage execution context
- If we give anything to call stack it will execute on immediately basis and wait for none
- If we want to execute something after some amount of time than we need something else or we can say some super power, call stack execute on immediately basis

## Browser

- `browser` is a more remarkable creation of human mankind
- It do various type of task like ... -
- ![Imgur](https://i.imgur.com/TXOzgIp.png)
- Browser work on various type of task
  - JS engine
  - Brower UI (Update UI)
  - Local Storage
  - Bluetooth
  - GPS
  - Timer
  - Access local system files
  - \*\* and many more
- even browser need to continues working with those task

- Not a everything in the Browser is a part of JavaScript 💔
- Like `Web APIs`

- `Web APIs`
- It is rules / interface for developer to work effectively with browser with the help of JS

  - `DOM APIs` even DOM APIs
  - `setTimeout`
  - `fetch()`
  - `location`
  - `localstorage`
  - `console`

- are the major example of web API s
- We access / work with `Web APIs` with the help of `window` object which available globally in `JavaScript` , we do not need to write window object explicitly every time since it is available globally
- window object automatically put `Web APIs` content to the call stack with out writing need of `window.<method/property>`
- so `window.console.log()` and `console.log()` both are same

## examples

### example 1 normal

```js
console.log("Start");
setTimeout(function cb() {
  console.log("Hello world!!");
}, 5000);
console.log("End");
```

- [See the Visualization](https://www.jsv9000.app/)
- [See the Visualization](http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIlN0YXJ0Iik7DQpzZXRUaW1lb3V0KGZ1bmN0aW9uIGNiKCkgew0KICBjb25zb2xlLmxvZygiSGVsbG8gd29ybGQhISIpOw0KfSwgNTAwMCk7DQpjb25zb2xlLmxvZygiRW5kIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

- lets understand line by line
- Global Execution Context is created and push inside the call stack.
- `console.log("Start");` this line use `Web API's` console API and log on console
- ```js
  setTimeout(function cb() {
    console.log("Hello world!!");
  }, 5000);
  ```
- Second line is setTimeout which is part of web APIs it store `cb()` in `Web API` environment function along with delay (timer) in millisecond `5000` , end start timer for it **NOTE** it will not push inside the call stack for now , due to it is asynchronous task
- `console.log("End");` this line use `Web API's` console API and log on console
- call stack is empty
- As soon as delay timer complete `cb()` function will need to go to the call stack and will execute the line inside it .**but HOW ?**
- `cb()` function can not go inside the call stack directly ...

- For this we need `Event Loop` and `Callback Queue`

- `Callback Queue` It is used to add function after the delay is over the for the callback function .

- `Event Loop` it keep checking the `Callback Queue` ans call stack, If it see the anything inside the `Callback Queue` it will insert into the call stack if call stack is empty. AKA it work as gate keeper
- `console.log("Hello world!!");` this line use `Web API's` console API and log on console

```
Start
End
Hello world!!
```

- Hello world!! after the 5 second of delay

### example 2 event

- with event

```js
console.log("Start");
document.getElementById("btn").addEventListener("click", function cb() {
  console.log("Button Clicked");
});
console.log("End");
```

- Global Execution Context is created and push inside the call stack.
- `console.log("Start");` this line use `Web API's` console API and log on console
- ```js
  document.getElementById("btn").addEventListener("click", function cb() {
    console.log("Button Clicked");
  });
  ```
- as above code encounter first DOM APIs will find id with `btn` value than `addEventListener` will add event to that html element that have `btn` id value
- for in this case `click` event attached to element with callback (handler) function to be execute , in `Web API` environment ,it wait in `Web API` environment for further execution
- `console.log("End");` this line use `Web API's` console API and log on console
- user whenever click on Button function from `Web API` environment added into the `Callback Queue` and than with the help of `Event Loop` it will add into the stack than execute the handler function
- here we understand why `Callback Queue` is needed ? why not from `Web API` environment function directly added into the stack ?
- When user click multiple type assume 6 times than 6 time that function will insert into the `Callback Queue` one by one and execute one by one .

### example 3 fetch

- with `fetch` API

```js
console.log("Start");
setTimeout(function cb() {
  console.log("Hello From setTimeout");
}, 5000);
fetch("https://latest.currency-api.pages.dev/v1/currencies/usd.json").then(
  function () {
    console.log("Got Data from the API");
  }
); // assume will take 2 second to get response from the server
console.log("End");
```

- here we have `fetch` for network request and `setTimeout`
- Global Execution Context is created and push inside the call stack.
- `console.log("Start");` this line use `Web API's` console API and log on console
- ```js
  setTimeout(function cb() {
    console.log("Hello From setTimeout");
  }, 5000);
  ```
- Second line is setTimeout which is part of web APIs it store `cb()` in `Web API` environment function along with delay (timer) in millisecond `5000` , end start timer for it **NOTE** it will not push inside the call stack for now , due to it is asynchronous task .
- ```js
  fetch("https://latest.currency-api.pages.dev/v1/currencies/usd.json").then(
    function () {
      console.log("Got Data from the API");
    }
  ); // assume will take 2 second to get response from the server
  ```
- `fetch` will request to the given URL , wait from the response in `Web API` environment
- `console.log("End");` this line use `Web API's` console API and log on console
- for the `fetch` / promises we have special type of queue known as `Microtask Queue` which has higher priority than normal `Callback Queue`

- If we have one - one task in `Microtask Queue` and `Callback Queue` and call stack is empty than `Event Loop` will always choose that task in `Microtask Queue` not from `Callback Queue`

- After getting the response from the server call back function with `fetch` will insert into the `Microtask Queue` and wait from `Event Loop` for adding into the call stack

- meanwhile timer will reduce as per delay parameter and as soon as timer over callback function inside the setTimeout will go to the `Callback Queue`

- What if data from server came in 5 second and setTimeout delay parameter have also 5 second than `Event Loop` always choose the fetch function to be added onto the call stack , because fetch function callback will add into the `Microtask Queue` and for the setTimeout callback function go inside the `Callback Queue`
- As above mentions `Microtask Queue` has higher priority than `Callback Queue`

## what go inside the Microtask Queue

- all the promises's callback functions
- **Mutation Observer** : it keep check any mutation on DOM tree or not if any there than it callback function came to the microtask queue
- If task inside the microtask queue any task create a new task (a) . from that task (a) it create a new task (b) , from that second task (b) it create a new task (c) and so on ....
- in such scenario event loop always select callback function from the `Microtask Queue` and `Callback Queue` is stuck
- which is known as `starvation` or `starvation of callback queue`

- And all rest of the asynchronous callback function will go in callback queue also known as **Task Queue**

## Questions

1. When does event loop actually start ?
   1. As its name suggest it is single threaded , loop `almost infinite` .
   2. Always running and do its job
2. Are only asynchronous web API call backs are registered in the web API environment?
   1. Yes , Only the asynchronous callback registered in the web API environment.
   2. synchronous callback functions like what we pass inside `map`, `filter`, and `reduce` aren't registered in the Web API environment
3. Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue ?
   1. Yes, the callback functions are stored, and a reference is scheduled in the queues.
   2. Moreover, in the case of event listeners(for example click handlers), the original call backs stay in the web API environment forever, that's why it's advised to explicitly remove the listeners when not in use so that the garbage collector does its job.
4. How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait?
   1. No, there are trust issues with `setTimeout()` 😅. The callback function needs to wait until the Call Stack is empty.
   2. So the 0 millisecond callback might have to wait for 100 millisecond also if the stack is busy.
   3. Other answer `setTimeout()` is asynchronous task so it always go in `Callback Queue` than with allowance of `Event Loop` `setTimeout()` function callback added into the callstack.
