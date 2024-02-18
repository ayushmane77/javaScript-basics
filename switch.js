/*const grade="A";
switch(grade){
    case "A":
        alert("outstanding");
        break;
    case "B":
        alert("excellent");
        break;
    case "C" || "D":
        alert("average"); 
        break;
    default:
        alert("invalid grade");           
}
*/

/*
function DayOfWeek(choice){
    switch(choice){
        case "1":
            alert("it is sunday");
            break;
        case "2":
            alert("it is monday");
            break;
        case "3":
            alert("it is tuesday");
            break;
        case "4":
            alert("it is wednesday");
            break; 
        case "5":
            alert("it is thursday");
            break;  
        case "6":
            alert("it is friday");
            break; 
        case "7":
            alert("it is saturday");
            break;            
    }
}
const choice=prompt("enter the number");
let ans=DayOfWeek(choice);
/*alert("this is ",ans);*/
function calculator(a,b,operator){
      switch(operator){
        case "+":
            alert("the addition of a and b is "+ (a+b));
            break;
        case "-":
            alert("the subtraction of a and b is "+ (a-b));  
            break;  
        case "*":
            alert("the multiplication of a and b is "+ (a*b)); 
            break;
        case "/":
            if (b !== 0) {
                alert("The division of a and b is " + (a / b));
              } else {
                alert("Division by zero is not allowed.");
              }   
            break;
        default:
            alert("invalid details");    
      }
}
let num1=parseInt(prompt("enter the first number"));
let num2=parseInt(prompt("enter the second number"));
let op=(prompt("enter the operator"));
calculator(num1,num2,op);
