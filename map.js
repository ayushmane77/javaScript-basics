const array=[1,2,3,4,5,6];
const evenNumbers=array.map((num)=>{
    return num*2;
});
console.log(evenNumbers);

const fruits=['apple','banana','mango','papaya','grapes','oranges'];
const getfruits=fruits.map((fruit)=>{
    return fruit.toUpperCase();
});
console.log(getfruits);