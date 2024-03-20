//When a function is called as a method of an object, this refers to the object itself.
let obj={
    Name:"Ayush",
    greet:function(){
        console.log("hello" + this.Name);
    }
}
obj.greet();


//When a function is used as a constructor with the new keyword, this refers to the newly created object.
function calling(a,b,c,d){
    this.name=a;
    this.lastName=b;
    this.age=c;
    this.type=d;
}
const john=new calling('John','rogers',24,'developer');
console.log("hello" + " " + john.name + " " + john.lastName + " " + john.age + " " + john.type);


// You can explicitly set the value of this using methods like call(), apply(), or bind().
function abc(){
    console.log("hello" + this.Name);
}
const person={
    Name:"Om"
}
abc.call(person);

/// a callback function
function newfun(a,b,c)
{setTimeout(function(){
    console.log(a+b);
    c();
},4000);

}

function helloworld(){
    console.log("hello world");
}
const hello=newfun('hello','world',helloworld);

// exception handling

var a ="Ayush";
try{
    console.log(a1);
}
catch(err){
    console.log(err);
}
finally{
    console.log("this is always be executed");
}

// promises

// eazzzzyyyyy
const orderIceCream=new Promise((resolve,reject)=>{
    var cone="🍦";
    setTimeout(function(){
        console.log("here is the icecream" + cone);
        resolve(cone);
    },3000);
});

function cream(con){
    return new Promise((res,rej)=>{
        var cream='🥛';
        setTimeout(function(){

            console.log("here is the " + con);
            console.log("here is the " + cream);
            res(cream);
        },3000);
    })
}
orderIceCream.then((data)=>{
    cream(data);
})
.finally(()=>{
    console.log("I will be executed");
})
