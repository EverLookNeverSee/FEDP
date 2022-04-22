// Simple hello world in js
console.log("Hello World!")

// Anything following double slashes is an English-language comment.

// A variable is a symbolic name for a value.
// Variables are declared with the let keyword:
// Declare a variable named x
let x;
// Values can be assigned to variables with an = sign
x = 0;
console.log("x:", x)

// JavaScript supports several types of values
y = 1   // Integer numbers
console.log("y:", y)
z = 0.01    // Real numbers
console.log("z:", z)
s_1 = 'single quote string'     // String of text in single quotation marks
s_2 = "double quote string"     // String of text in double quotation marks
console.log("s_1:",s_1, ", s_2:", s_2)
b_1 = true      // A boolean value
b_2 = false     // Another boolean value
console.log("b_1:", b_1, ", b_2:", b_2)
n = null    // Null is a special value that means "no value."
u = undefined   // Undefined is another special value like null.
console.log("n:", n, ", u:", u)

// JavaScript's most important datatype is the object.
// An object is a collection of name/value pairs, or a string to value map.
let book = {
    topic: "javascript",
    edition: 7
}
console.log("book:", book)

// Access the properties of an object with . or []:
console.log("book.topic:", book.topic)
console.log("book['edition']:", book["edition"])
book.author = "flanagan"    // Create new properties by assignment.
book.contents = {}          // {} is an empty object with no properties.
