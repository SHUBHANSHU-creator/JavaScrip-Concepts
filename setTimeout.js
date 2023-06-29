//This method calls a functions after given number of miliseconds

const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  console.log('Hello');
}

//Prints Hello after 5 sec or 5000 ms


//Block scope
var username = 'sk'
const fun = () =>{
    var username = 'john'
}
fun()
//username = sk
if (true){
    var username = 'shubham'
}
console.log(username);
//username = shubham


//Both username var will have different locations in the memory
//Block can mean => a functions,if-else block
//var cannot ovveride in a function but can override in if-else block
//let can only override in same scope


let username = 'ab'
if (true){
    let username = 'bc'
    
}
console.log(username);
// username = ab





//Interview Question on setTimeout
for(var i = 0; i<5;i++){
    setTimeout(()=>{
        console.log(i);
    },2000)
}   

//output=>
//5
//5
//5
//5
//5

//Explaination
//This happened since the setTimeout calls will go to webapis sections not directly the call stack
//all the async code waits in this section until the call stack is empty, they wait in the ready queue
//In the above question the for loop is running and sending setTimeout instances to webapis section
//after the for loop terminates, the instances come in call stack
//but since the var value can be overridden in this block hence, at last the value of the var was == 5
//that's why all the instances will get the value 5 and prints 5

//But what if we use let instead of var?
//the let value gets a new space everytime hence it will print 1 2 3 4 5


for(let i = 0; i<5;i++){
    setTimeout(()=>{
        console.log(i);
    },2000)
}   

//output => 1 2 3 4 5

//the above code using var can be fixed like given below
for(var i = 0; i<5;i++){
    function test(i){
        setTimeout(()=>{
            console.log(i);
        },2000)
    }
    test(i)
}   
//since the variable in a function is local hence it will not overriden