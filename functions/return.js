Return
When a function is called, the computer will run through the function’s code and evaluate the result of calling the function. By default that resulting value is undefined.

function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined
In the code example, we defined our function to calculate the area of a width and height parameter. Then rectangleArea() is invoked with the arguments 5 and 7. 
But when we went to print the results we got undefined. Did we write our function wrong? No! In fact, the function worked fine,
and the computer did calculate the area as 35, but we didn’t capture it. So how can we do that? With the keyword return!
