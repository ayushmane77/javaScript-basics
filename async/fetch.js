/* const getDadJokes=async ()=>{
    const response= await fetch("https://icanhazdadjoke.com/",{
        headers:{
            Accept:"application/json",
            
        },
    });
    const Dadjokes= await response.json();
    const jokes=await Dadjokes.joke
    console.log(jokes);
}
getDadJokes();
*/

/* fetch method by using thenables
fetch("https://jsonplaceholder.typicode.com/users")
.then((Response)=>{
    return Response.json();
})
.then((requiredData)=>{
    for(let x in requiredData){
        document.write(`${requiredData[x].name} + ${requiredData[x].email} + ${requiredData[x].address.city}   <br>`);
    }
})
.catch((error)=>{
    document.write("can't fetch data")
})
;
*/

const myUsers={
    userlist:[]
}

const newFunction=async ()=>{
    const JsonData=await fetch("https://jsonplaceholder.typicode.com/users");
    const requiredData= await JsonData.json();
    return requiredData;
}
const anotherFunction=async ()=>{
    const call= await newFunction();
    myUsers.userlist=call 
    console.log(myUsers.userlist);
    for(let x in myUsers.userlist){
        console.log(`${myUsers.userlist[x].name}`);
    }
}
anotherFunction();
console.log(myUsers.userlist);



