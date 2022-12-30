//Exercise 1 of 10
//Just to make sure everything is working, write a program.js that outputs the string "HELLO ES6" to the console.
console.log("HELLO ES6");



function saludo(name){
    console.log(`Hello, ${name}!\nYour name lowercased is \"${name.toLowerCase()}\".`);
}

saludo(process.argv[2]);


/*
TEMPLATE STRINGS
 Exercise 2 of 10

ES6 template strings are a new string syntax, which use backticks (  ) instead of quotation marks ( '' or "" ). Template strings give you more powerful abilities for constructing strings. They allow string interpolation, with syntax like:

    `Hello, ${person}! 1 + 1 = ${1 + 1}!`

They can also be multiline, simply by placing linebreaks inside your string:

    `Hello,
    world!`

## Challenge

You will be given a name as the first argument to your program (process.argv[2]). You should output a two-line message, first greeting that person, and then telling them their name in lowercase. For example, if the name was "Domenic", you would output:

    Hello, Domenic!
    Your name lowercased is "domenic".

You can start by doing this using ES5 constructs if you like, but the correct solution should use a single ES6 template string, and not use the + operator.
 */
function saludo(name){
    console.log(`Hello, ${name}!\nYour name lowercased is \"${name.toLowerCase()}\".`);
}

saludo(process.argv[2]);