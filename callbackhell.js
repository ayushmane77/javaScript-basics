/*console.log("this just started");
function next(){
    setTimeout(() => {
        let string="this will execute after 3 seconds";
        console.log(string);
    }, 3000);
    
}
next();
console.log("this will execute at 1 sec");
*/

/*
function step1(callback){
    setTimeout(function ()  {
        console.log("step 1 executed");
        callback();
    }, 2000);
}
function step2(callback){
    setTimeout(function () {
        console.log("step 2 executed");
        callback();
    }, 2000);
}
function step3(callback){
    setTimeout(function () {
        console.log("step 3 executed");
        callback();
    }, 2000);
    
}

function start() {
    console.log("Starting...");

    step1(function () {
        step2(function () {
            step3(function () {
                console.log("All steps completed");
            });
        });
    });
}

start();

*/

function Getcheese(callback){
    setTimeout(() => {
        const cheese="🧈";
        console.log("here is the cheese",cheese);
        callback(cheese);
    }, 2000);
    
}

function MakeDough(cheese,callback){
    setTimeout(() => {
        const dough="🍞";
        console.log("here is the dough",dough);
        callback(dough);
    }, 2000);
}

function Makepizza(dough,callback){
    setTimeout(() => {
        const pizza= dough + "🍕";
        console.log("here is the pizza ",pizza);
        callback(pizza);
    }, 2000);
}


Getcheese((cheese)=>{
  MakeDough(cheese,(dough)=>{
    Makepizza(dough,(pizza)=>{
        console.log("got the pizza",pizza);
    })
  });
});
// pizza->dough->cheese