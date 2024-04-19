// console.log("Hello World")

// for (let i = 1; i <= 5; i++) {
//     console.log("The number is " + i);
//   }

// const person = {fname:"John", lname:"Doe", age:25};

// let text = "";
// for (let x in person) {
//     text += person[x];
//     console.log(text);
// }

// const { log } = require('console');
const fs = require('fs'); 
// const data = "Abdul Haadi"; 
// fs.writeFile('p1.txt', data, (err) => { 
// if(err) { 
// throw err;  
// }
// } ); 

fs.readFile('p1.json', (err,data) => {
    if(err){
        throw err;
    }
    const n1 = JSON.parse(data);
    const {name, age} = n1
    console.log(name)
    console.log(age)
});
