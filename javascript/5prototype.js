/*
A constructor is simply a function that is used with new to create an object.
Constructor names should begin with a capital letter, to distinguish them from other functions.
 */
function Person() {
    // intentionally empty
}

var person1 = new Person();
/*
When you have no parameters to pass into your constructor, you can even omit the parentheses:
*/

var person2 = new Person;
console.log(person1 instanceof Person);     // true
console.log(person2 instanceof Person);     // true

/*
Every object instance is automatically created with a constructor prop- erty that contains a reference to the constructor function that created it.
For generic objects (those created via an object literal or the Object con- structor), constructor is set to Object; for objects created with a custom
constructor, constructor points back to that constructor function instead.
 */
console.log(person1.constructor === Person);     // true
console.log(person2.constructor === Person);     // true

/*
you are still advised to use instanceof to check the type of an instance. This is because the constructor property can be overwritten and
therefore may not be completely accurate.

There’s no need to return a value from the function because the new operator produces the return value.
 */
var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
console.log(person1.name);// "Nicholas"
console.log(person2.name);// "Greg"
person1.sayName();// outputs "Nicholas"
person2.sayName();// outputs "Greg"

/*
You can also explicitly call return inside of a constructor. If the returned value is an object,
it will be returned instead of the newly created object instance. If the returned value is a primitive,
the newly created object is used and the returned value is ignored.
 */
function Person(name) {
    Object.defineProperty(this, "name", {
        get: function() {
            return name;
        },
        set: function(newName) {
            name = newName;
        },
        enumerable: true,
        configurable: true
    });
    this.sayName = function() {
        console.log(this.name);
    };
} // false

var person1 = new Person("Viral");
person1.sayName();


/*
When Person is called as a function without new, the value of this inside of the constructor is equal to the global this object.
The variable person1 doesn’t contain a value because the Person constructor relies on new to supply a return value. Without new,
Person is just a function without a return statement. The assignment to this.name actually creates a global

variable called name, which is where the name passed to Person is stored.
 */

var person1 = Person("Nicholas");// note: missing "new"
console.log(person1 instanceof Person);// false
console.log(typeof person1);// "undefined"
console.log(name);// "Nicholas"

/*
An error occurs if you call the Person constructor in strict mode without using new. This is because strict mode doesn’t assign this to the global object.
Instead, this remains undefined, and an error occurs whenever you attempt to create a property on undefined.
 */




