// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.

const nums = [1,2,3,4]
function sum(init,n){
    return init + n
}
console.log(nums.reduce(sum,0));
//The above function written by using reduce funtion

//It accumulates the result and use it for next iteration. We pass in a inital value init

//syntax for reduce function
const array = [1,2,3,4,5]
console.log(array.reduce((accumulator,curValueofIndex)=>applyOperation,initValueIfRequired));

console.log(array.reduce((accumulator,curValueofIndex)=>accumulator + curValueofIndex,0));
//15

//Used recuceRight if you want to compute from right side
//Syntax
console.log(array.reduceRight((accumulator,curValueofIndex)=>applyOperation,initValueIfRequired));

console.log(array.reduceRight((accumulator,curValueofIndex)=>accumulator + curValueofIndex,0));
//15

