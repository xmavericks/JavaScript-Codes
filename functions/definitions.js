A function declaration consists of:

The function keyword.
The name of the function, or its identifier, followed by parentheses.
A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.
A function declaration is a function that is bound to an identifier, or name. In the next exercise we’ll go over how to run the code inside the function body.

We should also be aware of the hoisting feature in JavaScript which allows access to function declarations before they’re defined.

Take a look at example of hoisting:

console.log(greetWorld()); // Output: Hello, World!
 
function greetWorld() {
  console.log('Hello, World!');
}


Notice how hoisting allowed greetWorld() to be called before the greetWorld() function was defined! 
Since hoisting isn’t considered good practice, we simply want you to be aware of this feature.
