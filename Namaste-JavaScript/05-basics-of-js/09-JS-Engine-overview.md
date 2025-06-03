# JavaScript Engine Overview

- JavaScript can run anywhere on phone , Desktop (Linux , Windows , MacOS) , smart watch or even on robots because of **JRE** (JavaScript Runtime Environment)

- JavaScript Runtime Environment just like big container which have JavaScript engine + APIs to connect outside world + Event Loop + Callback Queue + MicroTask Queue .. etc

- JavaScript Engine is core of JRE

- Browser can execute JavaScript code due to it has JRE

- Their are different type of JRE / JavaScript Engine available like

  1. V8 - inside the Chromium based browser
  2. SpiderMonkey - Firefox browser
  3. NodeJS - Runtime environment of JavaScript
  4. Chakra - Internet Explorer
  5. .....

- We can also create own JavaScript Engine , that need to be follow ECMAScript guidelines

- So ECMAScript is governing body for JavaScript .

- World first JavaScript Engine created by the creator of JavaScript itself "Brendan Eich" , after the that JavaScript Engine evolve and known as SpiderMonkey

- JavaScript Engine is a not a machine it is a software created by some developers .

- V8 engine written in `C++` , where SpiderMonkey written in `Rust` , `C` and `C++`

- JavaScript Engine take JavaScript's high level highly human readable code and convert into Machine understandable code .

- Usually JavaScript Engine has there Parts
  ![](https://i.imgur.com/eMQfDEP.png)

1. Parsing

   1. Here code will broke down into small piece of tokens
   2. _Syntax Parser_ : it will take code and convert into AST (Abstract Syntax Tree)

2. Compilation

   1. Compiler - Convert source code into machine code than execute machine code , It is very efficient
   2. Interpreter - Execute Source code Line by Line , without involving the step of compilations fast and use for fast development

   - both have own advantages and disadvantages

   - Is JavaScript Is Complied Language or Interpreted language ?
   - Ans:- Dependence on the JavaScript engine . initially when JavaScript is just created that time is an Interpreter language
   - but now days it can be Interpreted language and Complied language based on JavaScript Engine, browser need to execute JavaScript code as soon as it got the Source code , not wait for first JavaScript code convert into machine code than execute .
   - It is `JIT complation` (Just In Time) language

3. Execution
   1. Execution and Compilation go both hand and hand
   2. After getting AST tree Interpreter will convert into the executable code and the same time Interpreter take help of compiler try to make code more efficient at run time as possible , it can happened in multiple stages
   3. known as Just In Time Compilation

- in some JS Engine we have AOT (Ahead of Time) in this case compiler take some piece of code which will execute later and try to optimize it as much as it can , and also produce the byte code which going to be execute

- Execution can not be happen without of memory heap (place where all memory will stored) and call stack

- Garbage collector continue free memory from heap to save memory .

<!-- Mark and swap -->
<!-- inlining -->
<!-- copy elision -->
<!-- inline caching -->

- Above is general overview of different kind of JavaScript Engine

- Developer working hard to make JavaScript Engine Fast as much possible

- currently Google's V8 engine is the most JavaScript Engine

- V8 engine interpreter known as 'Ignition' , compiler known as Turbo fan , garbage collector called Orinoco
