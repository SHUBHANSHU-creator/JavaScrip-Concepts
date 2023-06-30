// A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function.
//  Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created.
//   A block is also treated as a scope since ES6. 


function foo() {
    let b = 1;
    function inner() {
        return b++;
    }
    return inner;
}
let get_func_inner = foo();
 
console.log(get_func_inner());
console.log(get_func_inner());
console.log(get_func_inner());