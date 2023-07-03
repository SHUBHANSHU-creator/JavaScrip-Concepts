// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.

const nums = [1,2,3,4]
function sum(init,n){
    return init + n
}
console.log(nums.reduce(sum,0));

//It accumulates the result and use it for next iteration. We pass in a inital value init