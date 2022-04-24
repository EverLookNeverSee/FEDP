// This is a single line comment.

/* This is also a comment*/     // and here is another comment

/*
* This is a multi-line comment. The extra * character at the start of
* each line are not e required part of the syntax. they just look cool.
*/


// Literals:
// A literal is a data value that appears directly in a program. The following are all literals:
12      // the number twelve
1.2     // the number one point two
"Hello World"       // A string of text
'Hi'                // Another string
true                // A boolean value
false               // Another boolean value
null                // Absence of an object


// These are all legal identifiers:
// i
// my_variable_name
// v13
// _dummy
// $str


// Reserved words:
// as       const       export      get     null        target      void
// async    continue    extends     if      of          this        while
// await    debugger    false       import  return      throw       with
// break    default     finally     in      set         true        yield
// case     delete      for         instanceof          static      try
// catch    do          from        let                 super       typeof
// class    else        function    new                 switch      var

// enum     implements  interface   package private     protected   public


// Unicode:
const π = 3.14;
console.log("pi:", π)
const sí = true;
console.log("sí:", sí)


// Unicode Escape Sequences:
let café = 1; // Define a variable using a Unicode character
console.log("café:", café)
console.log("caf\u00e9:", caf\u00e9)        // => 1; access the variable using an escape sequence
console.log("caf\u{E9}:", caf\u{E9})       // => 1; another form of the same escape sequence
