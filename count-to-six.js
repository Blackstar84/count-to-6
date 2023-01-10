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






/*

COUNT UP TO VERSION 6 OF JAVASCRIPT
─────────────────────────────────────
 DESTRUCTURING
 Exercise 5 of 10

The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables. It is a useful technique that allows extracting necessary data from complex elements.

    let numbers = [1, 2, 3];
    let [foo, bar] = numbers;

    console.log(foo); // 1
    console.log(bar); // 2

In the above example, the value of the first cell of numbers is being assigned to a variable foo and the value of the second cell to a variable bar.

A slightly different syntax is needed in order to assign cell values to object properties, instead of variables:

    let numbers = [1, 2, 3];
    let data = {};
    [data.foo, data.bar] = numbers;

    console.log(data); // { foo: 1, bar: 2 }

When destructuring arrays, it is possible to omit any value:

    let numbers = [1, 2, 3];
    let [foo, , baz] = numbers; // I don't need the second element

    console.log(foo); // 1
    console.log(baz); // 3

Objects can also be destructured:

    let box = {width: 10, height: 5, depth: 4};
    let {width: x, depth} = box;

    console.log(x, depth); // 10 4
    //but
    console.log(width); // ReferenceError: width is not defined

## Challenge

Let's assume that we need to extract certain pieces of information concerning a user from an input array, which has the following format:    

    [userId, username, email, age, firstName, lastName]

The consecutive values of this array will be given as execution parameters, so you can obtain them using:

    let userArray = process.argv.slice(2); // userArray equals here e.g. [1, "jdoe", "jdoe@example.com", "John", "Doe"]

Your task is to extract information about the username and email to a separate object containing two properties - username and email - and log it out.

    let userArray = process.argv.slice(2);

    // what goes here?

    console.log(); // {username: "jdoe", email: "john@doe.com"}
*/



let userArray = process.argv.slice(2);
let data = {};
[data.id, data.username, data.email] = userArray;
console.log(`{ username: '${data.username}', email: '${data.email}' }`);







/*

COUNT UP TO VERSION 6 OF JAVASCRIPT 
─────────────────────────────────────
 SPREAD
 Exercise 6 of 10

ES6 provides two closely related concepts, rest and spread, for variadic functions with a variable number of arguments. In this exercise we'll explore the spread side of things.

An example of a variadic function would be Math.max, which you can call with any number of arguments: Math.max(1, 2) or Math.max(1, 2, 3) or 
...

In ES6, you can use the ...args syntax to "spread" an array out when calling such a function. For example:

    var numbers = [1, 1, 2, 3, 5, 8];
    var max = Math.max(...numbers);

This replaces the need for our old friend, .apply. Good riddance!

## Challenge

You'll be given a variable number of arguments (process.argv[2] onward) to your program, all of which will be numbers. Use the ES6 spread operator to find the minimum value of these numbers and log it to the console.

And let's log the list of numbers themselves, to make it clearer. So the output should be, for example:

    The minimum of [18,5,7,24] is 5

    */




let number = process.argv.slice(2);

console.log(`The minimum of [${number}] is ${Math.min(...number)}`)






/* COUNT UP TO VERSION 6 OF JAVASCRIPT
─────────────────────────────────────
 REST
 Exercise 7 of 10

Now that you know how to use the spread operator, we can introduce you to its counterpart, rest parameters.

Rest parameters are used when you want to write a function that accepts a variadic number of arguments, but acts on them as if they were an array. For example:

    function sum(...args) {
        var result = 0;
        args.forEach(function (value) {
            result += value;
        });

        return result;
    }

    sum(1, 2, 3); // 6

Note that in the above example, args is a real array, with a forEach method and everything. Just like the spread operator helps us get rid of .apply, rest parameters help us get rid of Array.prototype.slice.call(arguments). In fact, you should never need to use the horrible arguments object again. Yayyyy!


This exercise uses a slightly different format than usual. This time, your goal is to write a Node module whose default export is an average 
function. You don't need to print anything to the console. That is, your solution should look something like:                                function. You don't need to print an

    module.exports = function average(/* what goes here )// {
        // what goes here?
    //};

//We'll test your module by passing it a few different sets of arguments, e.g. average(1, 2, 3) and average(5, 10), and making sure that it works in all cases.                                                      



 */



module.exports = function avg(...argumento) {
    let result = 0;
    argumento.forEach(function (value) {
        result += value;
    });

        return result / argumento.length;    
};

(process.argv.slice());
/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    module.exports = (...args) => {
        var sum = args.reduce((soFar, value) => soFar + value, 0);
        return sum / args.length;
    };

    */



/*


    COUNT UP TO VERSION 6 OF JAVASCRIPT 
    ─────────────────────────────────────
     DEFAULT ARGUMENTS, Part 1
     Exercise 8 of 10
    
    In ES6, functions can take default arguments:
    
        function sayHello(greeting = "Hello", name = "CampJS") {
            console.log(`${greeting} ${name}!`);
        }
    
    When you call the function without arguments in those positions, the default ones are applied instead:
    
        sayHello();            // "Hello CampJS!"
        sayHello("Hi there");  // "Hi there CampJS!"
    
    You can also use undefined in any argument position to trigger the default:
    
        sayHello(undefined, undefined); // "Hello CampJS!"
        sayHello("Hiya", undefined);    // "Hiya CampJS!"
        sayHello(undefined, "JSConf");  // "Hello JSConf!"
    
    Note that other values will not trigger the defaulting, even falsy values like null, false, "", or 0:
    
        sayHello(null, 0); // "null 0!"
    
    ## Challenge
    
    As in the rest parameters exercise, your goal is to write a Node module whose default export is a function. This time it will take two arguments: a lower bound and an upper bound. Your function should return the midpoint between those two bounds.
    
    However, your function should have sensible defaults. The lower bound should default to 0, and the upper bound should default to 1.
    
    As before, you don't need to print anything to the console. Your solution should look something like:
    
        module.exports = function midpoint(/* what goes here /) {
            // what goes here?
        };
    
    We'll test your module by passing it a few different sets of arguments: sometimes none, sometimes one, sometimes two. Sometimes we'll pass in an explicit undefined, and you should be sure to treat that as the default.
    */





    module.exports = (arg1=0, arg2=1) => {    
        return (arg1+arg2)/2;
    };
    
    
    (process.argv.slice());
    
    

/*
    Your solution to DEFAULT ARGUMENTS, Part 1 passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    module.exports = (x = 0, y = 1) => (x + y) / 2;


────────────────────────────────────────────────────────────────────────────────

*/






/*
COUNT UP TO VERSION 6 OF JAVASCRIPT 
─────────────────────────────────────
 DEFAULT ARGUMENTS, Part 2
 Exercise 9 of 10

In JavaScript, unlike some other languages, default arguments can be expressions:

    function log(arg, transform = x => x) {
        console.log(transform(arg));
    }

    log("Hello");                       // => "Hello"
    log("Hello", y => y.toUpperCase()); // => "HELLO"

In this example, the default value for the transform argument is the identity function, x => x.

Default argument values can even depend on earlier arguments:

    function assertEquals5(val, error = `${val} does not equal 5!`) {
        assert.strictEqual(val, 5, error);
    }

    assertEquals5(3); // "3 does not equal 5!"

## Challenge

For this exercise, you should write a Node module whose default export is a function that will make a string really important. It should do this by adding a bunch of exclamation marks after it. The exact number of exclamation marks should be configurable, but by default, it should 
be equal to the length of the string. So:

    makeImportant("Hi", 5);             // => "Hi!!!!!"
    makeImportant("Hi");                // => "Hi!!"
    makeImportant("Hello?", undefined); // => "Hello?!!!!!!"

Bonus ES6 knowledge that might be helpful: ES6 includes a String.prototype.repeat that does exactly what you'd imagine.

*/

module.exports = (arg1, arg2=arg1.length) => {        
    cantidad = '!'.repeat(arg2)
    return `${arg1}${cantidad}`;
};


(process.argv.slice());

/*
Your solution to DEFAULT ARGUMENTS, Part 2 passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    module.exports =
        (string, bangs = string.length) => string + "!".repeat(bangs);


────────────────────────────────────────────────────────────────────────────────

*/

(process.argv.slice());











/*

 COUNT UP TO VERSION 6 OF JAVASCRIPT
─────────────────────────────────────
 TAGGED TEMPLATE STRINGS
 Exercise 10 of 10

In addition to the features you already learned about, template strings can be tagged. This is done by placing a function name, like fn, before the template string. For example:

    fn`Hello ${you}! You're looking ${adjective} today!`

The semantics of a tagged template string are very different from those of a normal one. In essence, they are a special type of function call: the above "desugars" into:

    fn(["Hello ", "! You're looking ", " today!"], you, adjective);

Note how the (n + 1)th argument corresponds to the substitution that takes place between the nth and (n + 1)th entries in the string array. Thus, there is always one more entry in the string array than there are substitutions; in the above, the counts are 3 vs. 2.

This can be useful for all sorts of things, but one of the most straightforward is automatic escaping of any interpolated variables. For example, you could write an HTML-escaping function, and name it html, such that:

    html`<p title="${title}">Hello ${you}!</p>`

…returns a string with the appropriate variables substituted in, but with all HTML-unsafe characters replaced.

## Challenge

In fact, let's do that right now. You will be given two arguments to your program: a username, and a comment. Both will potentially contain HTML-unsafe characters (namely ', ", <, >, and &). Your job is to use tagged template strings to log a safely-escaped HTML rendering of the comment.

For example, if the username is "domenic" and the comment is "<dl> is a fun tag", you should output:

    <b>domenic says</b>: "&lt;dl&gt; is a fun tag"

As before, you could start doing this using simple ES5 constructs. But the goal is for you to write a function that you can use as a tag in a tagged template string, that will do any escaping automatically.

## Hints

If you don't remember the corresponding escape sequences, they are:

    ' | &apos;
    " | &quot;
    < | &lt;
    > | &gt;
    & | &amp;

Remember that the best way to do string replacement in JavaScript is with regular expressions, e.g.

    var replacedS = originalS.replace(/a/g, "b");

The outline of your program should look something like this:

    console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

    function html(/* what goes here? /) {
        // what goes here?
        // don't forget to return the escaped string!
    }

    If you're not sure where to start, maybe try console.loging the arguments to your html function.
    
    Finally, feel free to use rest parameters if you think that would make things easier!

    */



    const html = (arg1, arg2)=>{    
        const amp = arg2.replace(/&/g,'&amp;');
        const apos = amp.replace(/'/g,'&apos;');
        const dobleC = apos.replace(/"/g,'&quot;');
        const aper = dobleC.replace(/</g,'&lt;');
        const cierre = aper.replace(/>/g,'&gt;');
        const reemplazarC = arg1.replace(/'/g,'&apos;');
        const reemplazarCD = reemplazarC.replace(/"/g,'&quot;');
        return `${reemplazarCD} \"${cierre}\"`;    
    };
    
    console.log(html(`<b>${process.argv[2]} says</b>:`,`${process.argv[3]}`));



    