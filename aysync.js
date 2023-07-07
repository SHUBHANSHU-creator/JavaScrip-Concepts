//Async code is written so that it dosen't block other code
//Whenever aync code is called it goes to web APis section (refer event loop diagram)
//after the time duration is completed(for setTimeout code), the callback function goes to ready queue
//all the callback functions wait in ready queue until the Call Stack isn't empty
//the callback function then run one by one after previous funcion gets terminated frm call stack

//eg:
console.log('1');
setTimeout(()=>{
    console.log('somthing');
},0)
console.log(2);

//output
//1
//2
//somthing
//Even the time assigned to setTimeout was 0 still it didn't run after 1
//the settimeout comes to stack and check that its a async function
//then the callback funtion is sent to web apis section
//the console.log(2); comes to stack and gets executed
//the callback function after waiting for assigned time comes to ready queue and wait until the Call stack gets empty
//then the callback function runs after coming to Call stack