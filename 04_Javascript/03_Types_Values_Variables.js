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
