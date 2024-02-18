
// example 1:
/*
const GetevenNumbers=(arr)=>{
    return arr.filter((num)=>{
        return num%2===0;
    });
}

const array=[2,1,4,7,9,3];
const evenNumbers=GetevenNumbers(array);
console.log(evenNumbers);
*/

//EXAMPLE 2:

/*
const array=[3,4,1,6,2,9,7,8];
const getevenNumbers=array.filter((num)=>{
    return num%2===0;
});
console.log(getevenNumbers);

*/
// EXAMPLE 3
/*
const array=['apple','banana','grapes','mango','papaya','orange'];
const getFruits=(word)=>{
    return word.filter((word1)=>{
        return word1.length>5;
    });
}
console.log(getFruits(array));
*/
// sam example
/*
const fruits=['apple','banana','grapes','mango','papaya','orange'];
const getFruits=fruits.filter((fruit)=>{
    return fruit.length>5;
});
console.log(getFruits);
*/

// EXAMPLE 4
const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'Brave New World', author: 'Aldous Huxley' },
  ];
  // an array of objects

const writer=books.filter((w)=>{
    return w.author==='George Orwell';
});
console.log(writer);

///EAZYYYYYYYYY//
