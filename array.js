/*
const array=['Ayush','aditya',78,34];
alert(array);

alert(array[0]);
*/
let arr=['red','blue',45,
    true,
    {name:'tiger', type:'carnivore', species:50},
   
    ];
function display(){
    return console.log("this is inside function");
}   
display();
console.log(arr[4]);
console.log(arr.length);
console.log(arr[2]);
console.log(arr.push('elephant'));
console.log(arr);
console.log(arr.indexOf({name:'tiger'}));

let array=['apple','banana','cherry'];
let length=array.length;
let text='<ul>'
for(let i=0;i<length;i++){
    console.log(array[i]);
    text += '<li>' + array[i] + '</li>';
}
text+='</ul>'
console.log(text);