/*Internal properties are not accessible via code but rather define the behavior of code as it executes.
 ECMAScript defines multiple internal properties for objects in JavaScript,
 and these internal properties are indicated by double-square-bracket notation.

 The [[Call]] property is unique to functions and indicates that the object can be executed. Because only functions have this property,
 the typeof operator is defined by ECMAScript to return "function" for any object with a [[Call]] property. */


//There are actually two literal forms of functions.
//The first is a function declaration
function add(num1, num2) {
    return num1 + num2;
}
//The second form is a function expression (note: the semicolon at the end)
var add = function(num1, num2) {
    return num1 + num2;
};


/* Function declarations are hoisted to the top of the context (either the function in which the declaration occurs or the global scope)
when the code is executed. That means you can actually define a function after it is used in code without generating an error

Function hoisting happens only for function declarations because the function name is known ahead of time. Function expressions,
on the other hand, cannot be hoisted because the functions can be referenced only through a variable.
 */

/*You can assign them to variables, add them
 to objects, pass them to other functions as arguments, and return them from functions.
 */
function sayHi() { console.log("Hi!");
}
sayHi(); // outputs "Hi!"
var sayHi2 = sayHi;
sayHi2();       // outputs "Hi!"

//it is same as
var sayHi = new Function("console.log(\"Hi!\");");
sayHi();        // outputs "Hi!"
var sayHi2 = sayHi;
sayHi2();       // outputs "Hi!"


/*By default, sort() on javascript array converts every item in an array to a string and then performs a comparison.
That means you can’t accurately sort an array of numbers without specifying a comparison function.*/

var numbers = [ 1, 5, 8, 4, 7, 10, 2, 6 ];
numbers.sort(function(first, second) {
    return first - second;
});
console.log(numbers); // "[1, 2, 4, 5, 6, 7, 8, 10]"
numbers.sort();
console.log(numbers);       // "[1, 10, 2, 4, 5, 6, 7, 8]"

/* You can pass any number of parameters to any function without causing an error. That’s because function parameters are actually stored as
an array-like structure called arguments. Just like a regular JavaScript array, arguments can grow
to contain any number of values. The values are referenced via numeric indices, and there is a length property to determine
how many values are present.

 The arguments object is automatically available inside any function. This means named parameters in a function exist mostly for
 convenience and don’t actually limit the number of arguments that a function can accept.

 The arguments object is not an instance of Array and therefore doesn’t have the same methods as an array; Array.isArray(arguments) always returns false.

*/

/* JavaScript doesn’t ignore the named parameters of a function either.
The number of arguments a function expects is stored on the function’s length property
 */
function checkArity(one, two, three){
    return one + two;
}
console.log(checkArity.length);


/*
JavaScript functions can accept any number of parameters, and the types of parameters a function takes aren’t speci- fied at all.
That means JavaScript functions don’t actually have signatures. A lack of function signatures also means a lack of function overloading.
 */

function sayMessage(message) {
    console.log(message);
}
function sayMessage() {
    console.log("Default message");
}
sayMessage("Hello!");       // outputs "Default message"

/*
 when you define multiple functions with the same name, the one that appears last in your code wins.
 */

// above code is similar to
var sayMessage = new Function("message", "console.log(message);");
sayMessage = new Function("console.log(\"Default message\");");
sayMessage("Hello!");       // outputs "Default message"

//You can mimic the function overloading by checking the number of arguments passed and using typeof and instanceof to determine the type if varibales.
//In practice, checking the named parameter against undefined is more common than relying on arguments.length.

function sayNameForAll() {
    console.log(this.name);
}
var person1 = {
    name: "Nicholas",
    sayName: sayNameForAll
};
var person2 = {
    name: "Greg",
    sayName: sayNameForAll
};
￼￼￼var name = "Michael";
person1.sayName();// outputs "Nicholas"
person2.sayName();// outputs "Greg"
sayNameForAll();// outputs "Michael"

/*
when called on person2, it out- puts "Greg". That’s because this is set when the function is called, so this.name is accurate.
The last part of this example defines a global variable called name. When sayNameForAll() is called directly, it outputs "Michael" because
the global variable is considered a property of the global object.
 */




