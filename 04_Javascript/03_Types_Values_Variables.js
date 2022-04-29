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
