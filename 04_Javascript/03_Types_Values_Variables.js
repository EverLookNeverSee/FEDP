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
