// function
/*
function greet(name,callback){
    console.log("hi" + ' ' + name);
    callback();
}
// callback function
function CallMe(){
    console.log('I am callback function');
}
// passing function as an argument
greet('Ayush',CallMe);
*/
///////////

/*
function FetchData(url,callback){
    setTimeout(
        ()=>{
            const data="some fetched data";
            callback(data);
        },3000
    );

}
function processdata(data){
    console.log("processing data",data);
}


FetchData('https://example.com/data',processdata);
console.log("fetching data");

//
function calculation(a,b,operation){
   return operation(a,b);
}
function subtraction(a,b){
    return a-b;
}

let SubResult=calculation(8,3,subtraction);
console.log(SubResult);

//

const addition=(a,b)=>a+b;
let AddResult=calculation(12,8,addition);
console.log(AddResult);

*/

function MakeCheese(cheese,gocheese){
    console.log('this is the cheese',cheese);
    gocheese(cheese);
}
function GetCheese(chis){
    console.log('here is the ',chis);
}
MakeCheese('🍕',GetCheese);