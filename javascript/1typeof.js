"use strict";
console.log("Primitive data types are: String, Number, Boolean, Null and Undefined")
console.log("undefined is the value assigned to a variable that is not  initialized")
console.log(typeof "viral");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);

console.log("type of null is object")
console.log(typeof null);

console.log(typeof [1,2]);
console.log(typeof {});
console.log(typeof function(){});

//typeof returns a string
console.log(typeof "viral" === "string"); //true

console.log("null and undefined");
console.log(null == undefined); //true hence always use triple equals for null checking
console.log(null === undefined); // false

console.log('When you use the double equals, the string "5" and the number 5 are considered equal ' +
'because the double equals converts the string into a number before it makes the comparison.');
console.log("5" == 5);
console.log("5" === 5);