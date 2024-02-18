function GetMilk(){
    return new Promise(
        (resolve,reject)=>{
            setTimeout(() => {
                const milk="🥛";
                resolve(milk);
            }, 2000);
        }
    )
}
function GetCofeePowder(milk){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const powder="🧉" + milk;
              resolve(powder);
        }, 2000);
    }
    )
}
function Cofee(powder){
    return new Promise(
        (resolve,reject)=>{
            setTimeout(() => {
                const cofee="☕"+powder;
                resolve(cofee); 
            }, 2000);
        }
    )
}
async function orderCoffe(){
    try{
    const milk=await GetMilk();
    console.log("here is the ",milk);
    const cofepowder= await GetCofeePowder(milk);
    console.log("here is the ",cofepowder);
    const cofee=await Cofee(cofepowder);
    console.log("here is the ",cofee);
    }
    catch(err){
        console.log("error occured");
    }
}
orderCoffe();


// Eazyyyyyyyyyyyyyyyyyyy

async function GetBread(){
    const bread='🍞'; // we cannot await for a basic string variable in javascript
    console.log(bread);
    return bread;
};
async function GetCheese(){
    const Cheese='🧈';
    return Cheese;
}
async function GetVegies(){
    const Vegies='🥦';
    return Vegies;
}
async function Makesandwich(br,ch,vg){
    const Sandwich='🥪';
    return Sandwich;
}
console.log('hello');
const orderSandwich=async()=>{
    try{
        const getBread=await GetBread();
        console.log('here is the bread',getBread);
        const cheese=await GetCheese();
        console.log('here is the cheese',cheese);
        const vegies=await GetVegies();
        console.log('here is the vegies',vegies);
        const sandwich=await Makesandwich(getBread,cheese,vegies);
        console.log('here is the sandwich',sandwich);
    } catch(err){
        console.error(err);
    }
};
orderSandwich();