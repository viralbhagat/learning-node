/*
When a property is first added to an object, JavaScript uses an inter- nal method called [[Put]] on the object.
The [[Put]] method creates a spot in the object to store the property.

The result of calling [[Put]] is the creation of an own property on the object. An own property simply indicates that the specific instance
of the object owns that property. The property is stored directly on the instance, and all operations on the property must be performed through that object.

 When a new value is assigned to an existing property, a separate operation called [[Set]] takes place.
 This operation replaces the current value of the property with the new one.
 */

// unreliable
if (person1.age) {
    // do something with age
}

/*The if condition evaluates to true if the value is truthy (an object, a nonempty string, a nonzero number, or true) and evaluates to false
if the value is falsy (null, undefined, 0, false, NaN, or an empty string).
Because an object property can contain one of these falsy values, the example code can yield false negatives. For instance, if person1.age is 0,
then the if condition will not be met even though the property exists.

A more reliable way to test for the existence of a property is with the in operator.
The in operator looks for a property with a given name in a specific object and returns true if it finds it.
 */
console.log("name" in person1);// true
console.log("age" in person1);// true
console.log("title" in person1);// false

/*
Methods are just properties that reference functions, so you can check for the existence of a method in the same way.
 */

/*
The in operator checks for both own properties and prototype properties, so you’ll need to take a different approach. Enter the hasOwnProperty() method,
which is present on all objects and returns true only if the given property exists and is an own property.
 */
var person1 = {
    name: "Nicholas",
    sayName: function() {
        console.log(this.name);
    }
};
console.log("name" in person1);// true
console.log(person1.hasOwnProperty("name"));// true

console.log("sayName" in person1);// true
console.log(person1.hasOwnProperty("sayName"));// true

console.log("toString" in person1);// true
console.log(person1.hasOwnProperty("toString"));// false


/*
Simply setting a property to null doesn’t actually remove the property completely from the object.

The delete operator works on a single object property and calls an internal operation named [[Delete]].
 */
var person1 = {
    name: "Nicholas"
};
console.log("name" in person1);// true
delete person1.name;// true - not output
console.log("name" in person1); // false
console.log(person1.name);// undefined


/*
By default, all properties that you add to an object are enumerable.
Enumerable properties have their internal [[Enumerable]] attributes set to true.
 */
var property;
for (property in object) {
    console.log("Name: " + property);
    console.log("Value: " + object[property]);
}

/*
ECMAScript 5 introduced the Object.keys() method to retrieve an array of enumerable property names.
 */

var properties = Object.keys(object); // if you want to mimic for-in behavior
var i, len;
for (i=0, len=properties.length; i < len; i++){
    console.log("Name: " + properties[i]);
    console.log("Value: " + object[properties[i]]);
}
/*
The for-in loop also enumerates prototype properties, while Object.keys() returns only own (instance) properties
 */

/*
You can check whether a property is enumerable by using the propertyIsEnumerable() method, which is present on every object
 */
var person1 = {
    name: "Nicholas"
};
console.log("name" in person1);// true
console.log(person1.propertyIsEnumerable("name"));// true
var properties = Object.keys(person1);
console.log("length" in properties);// true
console.log(properties.propertyIsEnumerable("length")); // false


/*
There are two different types of properties: data properties and accessor properties. Data properties contain a value,
like the name property from earlier examples in this chapter. The default behavior of the [[Put]] method is to create a data property.

Accessor properties don’t contain a value but instead define a function to call when the property is read (called
a getter), and a function to call when the property is written to (called a setter). Accessor properties only require either a getter or a setter,
though they can have both.
 */

var person1 = {
    _name: "Nicholas",
    get name() {
        console.log("Reading name");
        return this._name;
    },

    set name(value) {
        console.log("Setting name to %s", value);
        this._name = value;
    }
};
console.log(person1.name);// "Reading name" then "Nicholas"
person1.name = "Greg";
console.log(person1.name);// "Setting name to Greg" then "Greg"

/*
If you define only a getter, then the property becomes read-only, and attempts to write to it will fail silently in nonstrict mode and
throw an error in strict mode. If you define only a setter, then the property becomes write-only, and attempts to read the value will
fail silently in both strict and nonstrict modes.
 */

