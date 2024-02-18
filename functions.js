/*function addition(a,b) {
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
console.log("the addition of a + b is",addition(7,3));
console.log("the subtract of a - b is",subtract(7,3));
console.log("the multiplication of a X b is",multiply(7,3));
console.log("the divide of a/b is",divide(7,3));
*/

// FUNCTION TO CONVERT FARANHEIT TO CELSIUS

/*function tocelsius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}
let value=tocelsius(77);
console.log("the value of 77 fahrenheit to celsius is",value);
*/

/*

// NESTED FUNCTIONS
function parameters(a,b){
    const sa=square(a);
    const sb=square(b);

    function square(num){
       
        return num * num ;
    }
    return sa + sb;
}
const result=parameters(3,4);
console.log(result);

*/

function calculator(a,b,operator){
    
    function add(){
    return a+b;
    }
    function subtract(){
    return a-b;
    }
    function multiply(){
        return a*b;
    }
    function divide(){
        if(b==="0"){
            throw new Error("b cannot be zero")
        }
        else
        return a/b;
    }

let value;
switch(operator){
    case '+':
       value= add();
       break;
    case '-':
        value=subtract();
        break;
    case '*':
        value=multiply(); 
        break;
    case '/':
        value=divide();
        break;
    default: console.log("pls enter a valid operator");              
}
return value;
}
const num1=parseInt(prompt("enter first number"));
const num2=parseInt(prompt("enter second number"));
const op=prompt("enter the operator");
const result=calculator(num1,num2,op);
console.log(result);
