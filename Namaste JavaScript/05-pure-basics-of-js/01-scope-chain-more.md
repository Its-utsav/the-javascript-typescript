
## undefined vs not defined
- javascript memory allocate to variable before the single line of code execute and set value to the variable is `undefined`.
- js is loosely  (weakly) type language so we don't need to defined tha data type of variable

----------------------

## scope chain and lexical environment 

- Whenever GEC is created Lexical Environment is also created 

- Lexical Environment = Local Memory + References to the parent Lexical Environment and ... so on   Lexical Environment

codes

``` js
a();
function a(){
    console.log(b); // print 10
    // due to LE.ENV. and var 
}
var b = 10;
a();
```

```js
function a(){
    c();
    function c(){
        console.log(b); // print 10      
         // due to LE.ENV. and var 
    }
}
var b = 10;
a();
```

```js
function a(){
    c();
    function c(){
        var b = 10;
        console.log(b); // print 10
        // find in local memory      
    }
}
a();
```


```js
function a(){
    var b = 10;
    c();
    function c(){
        console.log(b); // print 10      
         // due to LE.ENV. 
    }
}
a();

console.log(b); // REFERENCES ERROR 
// b function is finished so there is no `b`  thats why it raise error
```
- So, Lexical Environment = local memory + lexical env of its parent. Hence, Lexical Environment is the local memory along with the lexical environment of its parent

- Lexical: In hierarchy, In order

- Whenever an Execution Context is created, a Lexical environment(LE) is also created and is referenced in the local Execution Context(in memory space).

- The process of going one by one to parent and checking for values is called scope chain or Lexical environment chain.
- **An inner function can access variables which are in outer functions even if inner function is nested deep. In any other case, a function can't access variables not in its scope.**

------------------