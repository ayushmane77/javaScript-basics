const Hello=()=>{
    for(let i=0;i<5;i++)
    console.log("Hello Ayush")
}
Hello();

/*  PARAMETERIZED ARROW FUNCTIONS */
const cal=(count)=> {
    if(count<18){
        console.log("you cannot vote");
        
    }
    else
    console.log("you can vote");
}
cal(17);

/* SINGLE LINE TEST EXPRESSION IN JAVASCRIPT */

const ThisIsFunction=(number)=> number*number;

/* QUESTION 1*/
console.log(ThisIsFunction(5));

const GetEvenNumbers=(Numbers)=>{
    for(let i=0;i<Numbers.length;i++){
        if(Numbers[i] % 2 === 0){
            console.log(Numbers[i]);
        }
    }
}
let InputArray=[1,2,3,4,5,6,7,8,9,10];
const EvenNumbers=GetEvenNumbers(InputArray);

/* QUESTION 2 */
const FilterPositiveNumbers=(positive)=>{
   return positive.filter(positive=>positive>=0)
   }

let integers = [-4,-2,5,8,-4,6,9];
const PositiveNumbers=FilterPositiveNumbers(integers);
console.log(PositiveNumbers);