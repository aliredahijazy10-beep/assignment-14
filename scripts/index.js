function lines(){
    console.log("--------------------");
}

function sayhi(){
    console.log("Hi");
}

sayhi();
lines();

function sayHello(name){
    console.log(`Hello ${name}`)
}

sayHello("Ali");
lines();

function greeting(name = "unknown"){
    console.log(`Hello ${name}`);
}

greeting("Ali");
greeting();
lines();

function welcome(isRegistered=false){
    if (!isRegistered){
        console.log("access denied")
        return
    }
    console.log("passed")
}

welcome(true);
welcome();
lines();

function multiplication(n1,n2){
    return n1 * n2;
}

let n1 = 3;
let n2 = 6;
console.log(`The result of ${n1} x ${n2} is ${multiplication(n1,n2)}`);

lines();

function printDetails(username, age, ...courses){
    console.log(`Hi, my name is ${username}, I'm ${age} years old. My courses are:`);
    for (const course of courses){
        console.log(`\t-${course}`);
    }
}

printDetails("Ali", 16, "HTML", "CSS", "JS", "SQL");
lines();

setTimeout(()=>{
    console.log("Hi after 3 seconds from setTimeout");
    lines();
},3000);

const arrowSayHi = () => console.log("Hi");

arrowSayHi();
lines();

const arrowgreeting = (name) => console.log(`Hi ${name}`);

arrowgreeting("Ali")
lines()

const summation = (n1,n2) => n1+n2;
n1 = 10
n2 = 33
console.log(`The result of ${n1} + ${n2} is ${summation(n1,n2)}`);

lines();

const function_1 = () => {
    const function_2 = () => {
        console.log("Hi from function 2");
    }
    console.log("Hi from function 1");
    function_2();
}
function_1();
lines();

const division = (x) => {
    return (y) => {
        if (y == 0) {
            return null;
        }
        return x / y;
    }
}
let x = 10;
let y = 0;
console.log(`The result of ${x} / ${y} is ${division(x)(y)}`);

x = 10;
y = 5;
console.log(`The result of ${x} / ${y} is ${division(x)(y)}`);

lines();

const arrowSummation = (n1,n2) => n1 + n2;
const arrowSubtraction = (n1,n2) => n1 - n2;
const arrowMultiplication = (n1,n2) => n1 * n2;
const arrowDivision = (n1,n2) => n2==0 ? null : n1 / n2;

const calculater = (callback, n1, n2) => {
    return callback(n1,n2);
}

n1 = 10;
n2 = 5;

console.log(`The result of ${n1} + ${n2} is ${calculater(arrowSummation, n1, n2)}`);
console.log(`The result of ${n1} - ${n2} is ${calculater(arrowSubtraction, n1, n2)}`);
console.log(`The result of ${n1} x ${n2} is ${calculater(arrowMultiplication, n1, n2)}`)
console.log(`The result of ${n1} / ${n2} is ${calculater(arrowDivision, n1, n2)}`);

lines();