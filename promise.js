/*
const ticket=new Promise(
    function(resolve,reject){
        let onBoard=false;
        if(onBoard){
            resolve("you flight ticket is ready ");
        }
        else{
            reject("your flight is cancelled");
        }
    }
);
ticket.then((data)=>{
    console.log(data);
}

).catch((data)=>{
    console.log(data);
});
*/
/*
const iceCream=new Promise(
    function (resolve,reject){
        let getIcecream=false;
        if(getIcecream=false){
            resolve("your ice-cream is ready");
            }
            else{
                reject("sorry icecream is out of stock");
            }
        }
);
iceCream.then(
    (data)=>{
        console.log(data);
    }
).catch(
    (data)=>{
        console.log(data);
    }
);
*/
function Getcheese(){
    return new Promise(
        (resolve,reject)=>{
            setTimeout(() => {
                const cheese="🧈";
                resolve(cheese);
            }, 2000);
        }
    );
}
function MakeDough(cheese){
    return new Promise(
        (resolve,reject)=>{
            setTimeout(() => {
                const dough=cheese+"🍞";
                resolve(dough);
            }, 2000);
        }
    );
}
function Makepizza(dough){
    return new Promise(
        (resolve,reject)=>{
            setTimeout(() => {
                const pizza=dough+"🍕";
                resolve(pizza);
            }, 2000);
        }
    );
}
Getcheese()
.then((cheese1)=>{
    console.log("here is the cheese", cheese1);
    return MakeDough(cheese1);
})
.then((dough1)=>{
    console.log("here is the dough", dough1);
    return Makepizza(dough1);
})
.then((pizza1)=>{
    console.log("here is the pizza", pizza1);
})
.catch((data)=>{
    console.log("sorry pizza can't be served");
})
.finally((always)=>{
    console.log("we are always for you");
});