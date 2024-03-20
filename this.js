var name="Ayush"; // global variable
function call(){
    var name="om"; // local variable
    console.log(name);
    console.log(this.name);
}
call();

// when the function is called as a method 

const obj={
    Name:"Ayush",
    greet:function calling(){
        console.log(this.Name);
    }
}
obj.greet()


// When a function is used as a constructor with the new keyword, this refers to the newly created object.
function cal(name){
    // console.log(name);
    this.name=name; 
}
const object=new cal('Aditya');
console.log(object.name);