// Function with parameters - with return types
function getDetails(id) {
    var name = "Anas raza";
    return "My Name is " + name;
}
console.log('Result of function with parameters with return types: - ' + getDetails(101));
var getDetailsArrow = function (id) {
    var name = "Anas raza";
    return "My Name is " + name;
};
console.log('Result of Arrow function with parameters with return types: - ' + getDetailsArrow(101));
// Function with parameters - without return types
function syHi(name) {
    console.log('Result of function with parameters without return types: - ' + ("My Name is " + name));
}
syHi('Raza');
var sayHiArrow = function (name) {
    console.log('Result of Arrow function with parameters without return types: - ' + ("My Name is " + name));
};
sayHiArrow('Ali');
// Function without parameters - without return types
function display() {
    console.log('Result of function without parameters without return types');
}
display();
var displayArrow = function () { return console.log('Result of Arrow function without parameters without return types'); };
displayArrow();
// Function without parameters - with return types
function getName() {
    return "Raza";
}
console.log('Result of function without parameters with return types: - ' + getName());
var getNameArrow = function () { return "Noor"; };
console.log('Result of Arrow function without parameters with return types: - ' + getNameArrow());
