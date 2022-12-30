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




/* 
 COUNT UP TO VERSION 6 OF JAVASCRIPT 
─────────────────────────────────────
 ARROW FUNCTIONS, Part 1
 Exercise 3 of 10

Arrow functions are one of the most fun new features of ES6.

In this exercise, we'll focus on one of the most common usage of arrow functions: shortening very simple functions. In ES6, you can write an 
arrow function like:

    x => x + 1

and that means the same thing as the ES5 code:

    function (x) { return x + 1; }

Very nice, yes? You can put any expression on the right-hand side of the =>, and it will become the return value. This is especially useful when performing operations like map or filter on arrays.

Note that if you need multiple arguments, you'll need to wrap them in parentheses, like so:

    (x, y) => x + y

## Challenge

You'll be given a variable number of arguments (process.argv[2] onward) to your program, all of which will be strings. Use arrow functions to perform a map-reduce operation over them, before outputting them to the console. That is, your solution should start with something like:   

    var inputs = process.argv.slice(2);
    var result = inputs.map(/* what goes here? */)
 //                       .reduce(/* what goes here? */);
/*
In particular, you should:

  * Map all incoming strings to their first character
  * Reduce the result by concatenating them together

So an input of ["Hello", "arrow", "functions"] would become "Haf".

To show your work, you should output the transformation to the console. The above example would be:

    [Hello,arrow,functions] becomes "Haf"
 */


var inputs = process.argv.slice(2);
var result = inputs.map((arreglo)=>arreglo[0]).join('');
console.log(`[${inputs}] becomes \"${result}\"`);



/*
COUNT UP TO VERSION 6 OF JAVASCRIPT
─────────────────────────────────────
 ARROW FUNCTIONS AND THIS
 Exercise 4 of 10

Arrow functions help to make the confounding issue of this less confounding.

Arrow functions lexically bind the value of this. It is very likely that you do not know what that sentence means. And that's OK.

What you need to know is that the value of this in arrow functions is the same as it was in the enclosing scope. That is, the this value inside an arrow function is the same as the this value outside of it. Let's look at an example.

    var foot = {
        kick: function () {
            this.yelp = "Ouch!";
            setImmediate(function () {
                console.log(this.yelp);
            });
        }
    };
    foot.kick();

When the call to console.log() occurs, a beginning JavaScript programmer might expect this.yelp to contain "Ouch!". In fact, it is undefined, because the function we passed to setImmediate got its own this (which by default is the global object, which has no yelp property). In ES5, you might work around this with hacks like:

    setImmediate(function () {
        console.log(this.yelp);
    }.bind(this));

or even

    var that = this;
    setImmediate(function () {
        console.log(that.yelp);
    });

In ES6, arrow functions allow us to avoid such workarounds and instead just say what we mean. If we use an arrow function for the callback to setImmediate, the code will work as expected.

## Challenge

Let's do exactly that. Starting with the original code example above, replace the anonymous function passed to setImmediate with an arrow function.

## Hint

To declare an arrow function that expects no arguments, you can use () => ....

*/

let foot = {
    kick: function () {
        this.yelp = "Ouch!";
        this.setImmediate = () =>console.log(this.yelp);        
    }
};
foot.kick();
foot.setImmediate();