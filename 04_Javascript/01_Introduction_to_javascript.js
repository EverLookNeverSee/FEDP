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
let y = 1   // Integer numbers
console.log("y:", y)
let z = 0.01    // Real numbers
console.log("z:", z)
let s_1 = 'single quote string'     // String of text in single quotation marks
let s_2 = "double quote string"     // String of text in double quotation marks
console.log("s_1:",s_1, ", s_2:", s_2)
let b_1 = true      // A boolean value
let b_2 = false     // Another boolean value
console.log("b_1:", b_1, ", b_2:", b_2)
let n = null    // Null is a special value that means "no value."
let u = undefined   // Undefined is another special value like null.
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

// Conditionally access properties with ?. (ES2020):
console.log(book.contents?.ch01?.sect1)


// JavaScript also supports arrays (numerically indexed lists) of values:
let primes = [2, 3, 5, 7]       // An array of 4 values, delimited with [ and ].
console.log("primes:", primes)
console.log("primes[0]:", primes[0])    // the first element (index 0) of the array.
console.log("primes.length:", primes.length)    // how many elements in the array.
console.log("The last element of array:", primes[primes.length - 1])    // the last element of the array.
primes[4] = 11   // Add a new element by assignment.
console.log("primes:", primes)
primes[4] = 13      // Or alter an existing element by assignment.
console.log("primes:", primes)
let empty = []      // [] is an empty array with no elements.
console.log("empty.length:", empty.length)

// Arrays and objects can hold other arrays and objects:
let points = [      // An array with 2 elements.
    {x:1, y:0},     // Each element is an object.
    {x:0, y:1}
]
console.log("points:", points)

let data = {    // An object with 2 properties
    trial_1: [[1, 2], [3, 4]],      // The value of each property is an array.
    trial_2: [[2, 3], [4, 5]]       // The elements of the arrays are arrays.
}
console.log("data:", data)


// Comment Syntax in Code Examples
// Operators act on values (the operands) to produce a new value.
// Arithmetic operators are some of the simplest:
add = 3 + 5     // addition
sub = 5 - 3     // subtraction
mul = 3 * 5     // multiplication
div = 5 / 3     // division
console.log("3 + 5 =", add, ", 5 - 3 =", sub, ", 3 * 5 =", mul, "5 / 3 =", div)
mco = points[1].x - points[0].x
console.log("mco:", mco)
sc = "3" + "5"      // String concatenation
console.log("String concatenation --> '3' + '5' =", sc)


// JavaScript defines some shorthand arithmetic operators
let count = 0
console.log("count:", count)
count++
console.log("count++:", count)
count--
console.log("count--:", count)
count += 2
console.log("count+=2:", count)
count *= 3
console.log("count*=3:", count)
