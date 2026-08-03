/* Create a faulty calculator using JS

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the time


*/

let a = 6;
let b = 7;

if(a+b){
    console.log(a-b);
}
else if(a*b){
    console.log(a+b);
}
else if(a-b){
    console.log(a/b);
}
else if(a/b){
    console.log(a**b);
}
else{
    console.log("error")
}