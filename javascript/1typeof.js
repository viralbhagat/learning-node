"use strict";
console.log("Primitive data types are: String, Number, Boolean, Null and Undefined");

console.log('typeof "viral" = ' + typeof "viral");
console.log('typeof 123 = ' + typeof 123);//number
console.log('typeof true = ' + typeof true);//boolean
console.log('typeof undefined = ' + typeof undefined);//undefined

console.log('typeof null = ' + typeof null);//object

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
//When you’re trying to identify null, use triple equals so that you can correctly identify the type.


console.log("undefined is the value assigned to a variable that is not  initialized")
var a;
console.log(a);
console.log(typeof a);