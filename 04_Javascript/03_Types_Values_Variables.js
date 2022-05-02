let a = [1, 4, 2, 5, 3, 6];
console.log("a:", a)
let s_a = a.sort();     // OOP Version
console.log("sorted a:", s_a)


// Numbers:
// JavaScript represents numbers using the 64-bit floating-point format defined by the IEEE 754 standard,
// which means it can represent numbers as large as ±1.7976931348623157 × 10 308 and as small as
// ±5 × 10 −324 .
// The JavaScript number format allows you to exactly represent all integers between
// −9,007,199,254,740,992 (−2 53 ) and 9,007,199,254,740,992 (2 53 ), inclusive.

// Integer Literals:
// base-10 integer
0
3
1000000
// base-16 values
0xff            // 255 --> 15 * 16 + 15
0xbadcafe       // 195939070
// base-2 values
0b10101         // 21 --> (1*16 + 0*8 + 1*4 + 0*2 + 1*1)
0o377           // 255 --> (3*64 + 7*8 + 7*1)

// Floating-Point Literals:
3.14
2345.6789
.333333333
6.02e23         // 6.02 * 10^23
1.4738223E-32   // 1.4738223 * 10^-32

// Separators in numeric literals:
let billion = 1_000_000_000;            // underscore as a thousand separators
console.log("billion:", billion)
let bytes = 0x89_AB_CD_EF;              // As bytes separator
console.log("bytes:", bytes)
let bits = 0b0001_1101_0111;            // As a nibble separator
console.log("bits:", bits)
let fraction = 0.123_456_789;           // Works for fractional part, too.
console.log("fraction:", fraction)


// Arithmetic in Javascript:
// + --> Addition , - --> Subtraction , * --> Multiplication
// / --> Division , % --> Modulo , ** --> Exponentiation

// Math Object:
console.log("Math.pow(2, 53):", Math.pow(2, 53))        // 2 to the power 53
console.log("Math.round(.4):", Math.round(.4))      // round to the nearest integer
console.log("Math.round(.6):", Math.round(.6))
console.log("Math.ceil(.4):", Math.ceil(.4))        // round up to an integer
console.log("Math.floor(.6):", Math.floor(.6))      // round down to an integer
console.log("Math.abs(-5):", Math.abs(-5))      // absolute value
console.log("Math.max(1, 5, 8):", Math.max(1, 5, 8))        // return the largest argument
console.log("Math.min(2, 4, 9):", Math.min(2, 4, 9))        // return the smallest argument
console.log("Math.random():", Math.random())        // pseudo-random number 0 =< x < 1
console.log("Math.PI:", Math.PI)        // 3.1415...
console.log("Math.E:", Math.E)      // the base of the natural logarithm
console.log("Math.sqrt(3):", Math.sqrt(3))      // the square root of 3
console.log("Math.pow(3, 1/3):", Math.pow(3, 1 / 3))        // the cube root of 3
console.log("Math.sin(0):", Math.sin(0))        // sin(x)
console.log("Math.log(10):", Math.log(10))      // natural logarithm of 10
console.log("Math.log(100) / Math.LN10:", Math.log(100) / Math.LN10)        // base 10 logarithm of 100
console.log("Math.log(512) / Math.LN2:", Math.log(512) / Math.LN2)        // base 2 logarithm of 512
console.log("Math.cbrt(27):", Math.cbrt(27))        // cube root
console.log("Math.hypot(3, 4):", Math.hypot(3, 4))  // square root of sum of squares of all arguments
console.log("Math.log10(100):", Math.log10(100))        // base-10 logarithm
console.log("Math.log2(1024):", Math.log2(1024))        // base-2 logarithm
console.log("Math.lo1p(.0002):", Math.log1p(.0002))   // natural log of (1+x); accurate for very small x
console.log("Math.expm1(2):", Math.expm1(2))          // Math.exp(x) - 1
console.log("Math.sign(5):", Math.sign(5))      // -1, 0, 1 for arguments <, == or > 0
console.log("Math.sign(0):", Math.sign(0))
console.log("Math.sign(-4):", Math.sign(-4))
console.log("Math.imul(2, 3):", Math.imul(2, 3))    // optimized multiplication of 32-bit integers
console.log("Math.clz32(0xf):", Math.clz32(0xf))        // number of leading zero bits in 32-bit integer
console.log("Math.trunc(3.9):", Math.trunc(3.9))        // truncating fractional part
console.log("Math.fround(4.66):", Math.fround(4.66))      // round to the nearest 32-bit float
console.log("Math.sinh(0):", Math.sinh(0))      // Hyperbolic sine
console.log("Math.asinh(0)", Math.asinh(0))     // Hyperbolic arc-sine


Infinity        // A positive number too big to represent
Number.POSITIVE_INFINITY    // Same value
1 / 0       // Infinity
Number.MAX_VALUE * 2        // Infinity ; Overflow

-Infinity       // A negative number too big to represent
Number.NEGATIVE_INFINITY    // same value
-1 / 0      // -Infinity
-Number.MAX_VALUE * 2       // -Infinity

NaN         // The not a number value
Number.NaN  // Same value
0 / 0       // NaN
Infinity / Infinity     // NaN

Number.MIN_VALUE / 2        // 0: underflow
-Number.MIN_VALUE / 2       // -0: negative zero
-1 / Infinity               // -0: also negative zero
-0


// Number properties in es6
console.log("Number.parseInt('2'):", Number.parseInt("2"))
console.log("Number.parseFloat(2.5):", Number.parseFloat("2.5"))
console.log("Number.isNaN(5):", Number.isNaN(5))
console.log("Number.isNaN(NaN):", Number.isNaN(NaN))
console.log("Number.isFinite(1):", Number.isFinite(1))
console.log("Number.isFinite(1 / 0):", Number.isFinite(1 / 0))
console.log("Number.isInteger(8):", Number.isInteger(8))
console.log("Number.isInteger(8.9):", Number.isInteger(8.9))
console.log("Number.isSafeInteger(Math.pow(2, 52)):", Number.isSafeInteger(Math.pow(2, 52)))
console.log("Number.isSafeInteger(Math.pow(2, 53)):", Number.isSafeInteger(Math.pow(2, 53)))
console.log("Number.isSafeInteger(-Math.pow(2, 52)):", Number.isSafeInteger(-Math.pow(2, 52)))
console.log("Number.isSafeInteger(-Math.pow(2, 53)):", Number.isSafeInteger(-Math.pow(2, 53)))
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER)        // -(2 ** 53 - 1)
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER)        // (2 ** 53 -1)
console.log("Number.EPSILON:", Number.EPSILON)          // 2 **-52: smallest difference between numbers


// Comparing zero and negative zero
let zero = 0
let negative_zero = -0
console.log("zero === negative_zero:", zero === negative_zero)        // zero and negative zero are equal
console.log("1 / zero === 1 / negative_zero:", 1 / zero === 1 / negative_zero)  // infinity and -infinity are not equal



// Binary Floating-Point and Rounding Errors
// The IEEE-754 floating-point representation used by JavaScript (and just about every
// other modern programming language) is a binary representation, which can exactly
// represent fractions like 1/2 , 1/8 , and 1/1024 . Unfortunately, the fractions we use
// most commonly (especially when performing financial calculations) are decimal fractions:
// 1/10 , 1/100 , and so on. Binary floating-point representations cannot exactly
// represent numbers as simple as 0.1 .
let x = .3 - .2;
let y = .2 - .1;
console.log(".3 - .2 === .2 - .1:", x === y)        // the two values are not the same
console.log(".3 - .2 === .1:", x === .1)      // .3 - .2 is not equal to .1
console.log(".2 - .1 === .1:", y === .1)      // .2 - .1 is equal to .1


// Arbitrary Precision Integers with BigInt
let base_10_big_int = 12345n;
let base_2_big_int = 0b111111;
let base_8_big_int = 0o7777n;
let base_16_big_int = 0x8000000000000000n;      // 2n ** 63n: a 64-bit integer
console.log("12345n:", base_10_big_int)
console.log("0b111111:", base_2_big_int)
console.log("0o7777n:", base_8_big_int)
console.log("0x8000000000000000n:", base_16_big_int)

// Using BigInt as a function:
let bi = BigInt(Number.MAX_SAFE_INTEGER);
let string = "1" + "0".repeat(100);     // 1 followed by 100 zeros
console.log("bi:", bi)
let bi_string = BigInt(string);
console.log("bi_string:", bi_string)        // 10n ** 100n: one googol

// Arithmetic with BigInt values works like arithmetic with regular JavaScript numbers,
// except that division drops any remainder and rounds down (toward zero):
let bi_add = 1000n + 2000n;         // 3000n
let bi_sub = 3000n - 2000n;         // 1000n
let bi_mul = 2000n * 3000n;         // 6000000n
let bi_div = 3000n / 997n;          // 3n
let bi_mod = 3000n % 997n;          // 9n
let bi_pow = (2n ** 131071n) - 1n;  // // A Mersenne prime with 39457 decimal digits

// Comparison operators with mixed numeric typed
console.log("1 < 2n:", 1 < 2n)
console.log("2 > 1n:", 2 > 1n)
console.log("0 == 0n:", 0 == 0n)
console.log("0 === 0n:", 0 === 0n)


// Dates and Times:
let timestamp = Date.now();     // The current time as a timestamp (a number).
let now = new Date();           // The current time as a Date object
let ms = now.getTime();         // Convert to a millisecond timestamp.
let iso =now.toISOString();     // Convert to a string in standard format.
console.log("The current time as a timestamp (a number):", timestamp)
console.log("Convert to a millisecond timestamp:", ms)
console.log("Convert to a string in standard format:", iso)



// TEXT:
// Characters, Codepoints, and JavaScript Strings
let euro = "€";
let love = "❤";
console.log("euro length:", euro.length)
console.log("love length:", love.length)

// String Literals:
""      // the empty string. It has zero characters
"testing"
"'name'='myForm'"
"Where are you from?"
"τ is the ratio of a circle's circumference to its radius"
"She said 'Hi'"

// A string representing 2 lines written on one line:
console.log("two\nlines")
// A one-line string written on 3 lines:
console.log("one\
long\
line.")
// A two-line string written on two lines:
console.log(`the newline character at the end of this line
is included literally in this string`)

// In client-side JavaScript programming, JavaScript code may contain strings of HTML
// code, and HTML code may contain strings of JavaScript code. Like JavaScript, HTML
// uses either single or double quotes to delimit its strings. Thus, when combining Java‐
// Script and HTML, it is a good idea to use one style of quotes for JavaScript and the
// other style for HTML. In the following example, the string “Thank you” is single-quoted
// within a JavaScript expression, which is then double-quoted within an HTML
// event-handler attribute:
// <button onclick="alert('Thank you')">Click Me</button>


// Escape Sequences in String Literals:
let sample_01 = 'you \'re right. it can\'t be a quote.'
console.log(sample_01)
let sample_02 = "\u03c0"        // pi symbol
console.log(sample_02)

// \0 The NUL character ( \u0000 )
// \b Backspace ( \u0008 )
// \t Horizontal tab ( \u0009 )
// \n Newline ( \u000A )
// \v Vertical tab ( \u000B )
// \f Form feed ( \u000C )
// \r Carriage return ( \u000D )
// \" Double quote ( \u0022 )
// \' Apostrophe or single quote ( \u0027 )
// \\ Backslash ( \u005C )
// \x nn The Unicode character specified by the two hexadecimal digits nn
// \u nnnn The Unicode character specified by the four hexadecimal digits nnnn
// \u{ n } The Unicode character specified by the codepoint n, where n is one to six hexadecimal digits between 0 and 10FFFF (ES6)


// Working with strings:
let msg = "Hello, " + "World!"
console.log(msg)
let name = "Milad Sadeghi DM"
let greeting = "Welcome" + " " + name
console.log(greeting)

// Length of the string
console.log(name.length)

// JS API for working with strings:
let s = "Hello, World"
console.log(s.substring(1, 4))      // 2nd, 3rd and 4th characters
console.log(s.slice(1, 4))          // 2nd, 3rd and 4th characters
console.log(s.slice(-3))            // last 3 characters
console.log(s.split(","))   // split at delimiter string

// Searching at string
console.log(s.indexOf("l"))     // position of first letter l
console.log(s.indexOf("l", 4))  // position of first "l" at or after 4
console.log(s.indexOf("zz"))    // s does not include the substring 'zz'
console.log(s.lastIndexOf("l")) // position of last letter l

// Boolean searching functions in es6 and later
console.log(s.startsWith("Hel"))
console.log(s.endsWith("d"))
console.log(s.includes("or"))

// Creating modified versions of a string
console.log(s.replace("llo", "ya"))
console.log(s.toLowerCase())
console.log(s.toUpperCase())
console.log(s.normalize())      // unicode nfc normalization, es6
console.log(s.normalize("NFD"))     // nfd normalization

// Inspecting individual (16-bit) characters of a string
console.log(s.charAt(0))        // first character
console.log(s.length - 1)       // last character
console.log(s.charCodeAt(0))    // 16-bit number at the specified position
console.log(s.codePointAt(0))   // es6 works for codepoints > 16-bit

// String padding functions in ES2017
console.log("x".padStart(5))      // add spaces on the left to a length of 5
console.log("x".padEnd(5))        // add spaces on the right to a length of 5
console.log("x".padStart(5, "*"))
console.log("x".padEnd(5, "-"))

// Space trimming functions. trim() is ES5; others ES2019
console.log(" test ".trim())
console.log(" test ".trimStart())
console.log(" test ".trimEnd())

// Miscellaneous string methods
console.log(s.concat("!"))
console.log("<>".repeat(10))
