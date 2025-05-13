// console.log(testing)
// var saltContainer ="salt";
// let sugarContainer ="sugar";
// const waterContainer="water";
// console.log(saltContainer)
// console.log(sugarContainer)
// console.log(waterContainer)

// let d="jane";
// let e="jane";

// console.log(d==e);

// let valueOne = parseInt(prompt("Enter your first Number"));
// let valueTwo = parseInt(prompt("Enter your Second Number"));
// let ans = valueOne+valueTwo;
// alert(ans)
// console.log(ans)

// // /
// let even = parseInt(prompt("enter your number"));


// if (even %2===0){alert(`${even} this is an even number`)}
// else {alert(`${even} this is an odd number`)}

// if(50 > 65){
//     console.log("50 is the highest numer");
// }
// else

// const usernumber = parseInt(prompt("Enter a number"));

// if(usernumber > 0) {
//     alert(`${usernumber} is a positive number`);
// } else if(usernumber === 0){
//     alert(`${usernumber} is invalid`);
// } else if (isNaN(usernumber)){
//     alert("this is not a number")
// } else{
//     alert(`${usernumber} is a negative number`)
// }

// write a program to determine the greatest of two numbers.

// 

// 

// let weight= parseFloat(prompt("Enter your weight in CM"));
// let height= parseFloat(prompt("Enter your height in M"));

// BMI= weight/ (height*height);

// if(BMI <=18.5){
//     console.log( )
// }

let myStr= "Hello, Javascript World!";

console.log(myStr);
console.log(myStr.toUpperCase());
console.log(myStr.toLowerCase());
console.log(myStr.charAt());
console.log(myStr.indexOf("W"));
console.log(myStr.includes("eve"));
console.log(myStr.includes("Hello"));
console.log(myStr.trim());
console.log(myStr.replace("World","people"));
console.log(myStr.split(" "));
console.log(myStr.startsWith("hello"));
console.log(myStr.endsWith("hi"));

// number method
let num = 42.678;
let strNum =  "89.56";

console.log(num);
console.log(num.toString());
console.log(num.toFixed(1));
console.log(parseInt(strNum));
console.log(parseFloat(strNum));
console.log(isNaN("trtr"));

// math method

console.log(Math.PI);
console.log(Math.PI.toFixed(2));
console.log(Math.round(41.673));
console.log(Math.floor(42.9));
console.log(Math.ceil(42.1));

// objects
let student = {
    name: "shade",
    age: 34,
    email: "shad@gmail.com",
};

console.log(student);
console.log(student.name);
console.log(Object.keys(student));
console.log(Object.values(student));

// functions
function userName(name){
    console.log(name)
}

userName("Evelyn");
userName("Mariam");
userName("Caro");


function addNum(a, b){
    console.log(a+b)
}

addNum(15, 45);
