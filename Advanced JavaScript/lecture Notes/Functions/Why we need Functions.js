// To perform similar actions in many places in a program without code repetition, we need to use functions.
function echo(input) {
	console.log(input);
}
// NB: A variable declared in a function only exists inside that function.
function echo(input) {
	let greeting;
	console.log(input);
}
// However, a function can access variables declared outside of its scope. It can also be passed input via arguments:
let greeting = "Hi";  

function echo(input) {
  console.log(`${greeting} ${input}`);  
}

echo(42);

// Why we need functions?

// functions are a method/procedure/process which takes some input and produces an output. It acts like a machine.

// input-> performs action 
// output-> returns some data.

// parenthesis can be defined as openings, a path to proivde our machine the essential data to work on.

// The argument will only exist within the function or the scope of the function itself. But it can use variables outside the function defined before the function. 

// return statement to store the value into the variable. without the return, it will be undefined by default.  