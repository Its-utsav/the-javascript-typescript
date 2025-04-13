
## Glossary

1. `Primitive`
   - It is a Grouped DataType (mean in this datatype hading we have multiple types).
   - `Primitive` Datatype means is a data which is not an `Object` and has no `methods` and `properties`.
   - Most are Immutable means can't changed at any specific index , but value can resign even `Object` , `Array`.
   - **NOTE** :- if you are beginner than no need to read below lines.
     - No `methods` but it can behave like they do . WHAT ???????????????
     - When we try to access `methods` or `properties` on `Primitive` values than `JS` automatically `Boxes` the `Primitive` values into temporary `Object` and that `Object` have those `methods` and `properties` .
     - It access the `methods` and `properties` on that wrapper `Object` , rather than on `Primitive` values itself.
     - As per this here all before the `methods` syntax automatically add  `Object.prototype`.[methodName] 
     - If Object is String than `String.prototype`.[methodName] 


## Common Things

1. `Object.length` - it return the length of Object
2. `Object.type` - it return the type of Object