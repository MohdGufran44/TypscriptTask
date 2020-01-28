// Function with parameters - with return types
function getDetails(id:number) {
    let name:string="Anas raza";
    return `My Name is ${name}`;
}
console.log('Result of function with parameters with return types: - '+getDetails(101));

let getDetailsArrow=(id:number)=>{
    let name:string="Anas raza";
    return `My Name is ${name}`;
}
console.log('Result of Arrow function with parameters with return types: - '+getDetailsArrow(101));


// Function with parameters - without return types
function syHi(name:string) {
    console.log('Result of function with parameters without return types: - '+`My Name is ${name}`);
}
syHi('Raza');

let sayHiArrow=(name:string)=>{
    console.log('Result of Arrow function with parameters without return types: - '+`My Name is ${name}`);
}
sayHiArrow('Ali');

// Function without parameters - without return types
function display() {
    console.log('Result of function without parameters without return types');
}
display();

let displayArrow=()=>console.log('Result of Arrow function without parameters without return types');
displayArrow();


// Function without parameters - with return types
function getName():string {
    return "Raza";
}
console.log('Result of function without parameters with return types: - '+getName());


let getNameArrow=():string=>{return "Noor";}
console.log('Result of Arrow function without parameters with return types: - '+getNameArrow());


