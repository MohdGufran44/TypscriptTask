// Basic Type script boolean
// let onOf=false;
// console.log(onOf);

//above onOf variable we can pass any value but not only boolean
// to overcome this problem we go with TypeScript type

let onOf: boolean=true;
console.log(onOf);

// above code we can pass only boolean like that other types are there

let decimal: number = 50;
console.log('decimal: '+decimal);
let hex: number = 0xf010;
console.log('hex: '+hex);
let binary: number = 0b101;
console.log('binary: '+binary);
let octal: number = 0o743;
console.log('octal: '+octal);

let string: string = "Raza";
console.log('string: '+string);

let templateString: string = `Hi My name is ${string}`;
console.log('templateString: '+templateString);

let array: Array<string>=['Type', 'Script'];
console.log('array: '+array);

let tuple: [number,string]=[101, 'Amit'];
console.log('tuple: '+tuple);
