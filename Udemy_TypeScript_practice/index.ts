export {};

import axios from "axios";

let hello: string = "Hello World!";
console.log(hello);

function add(a: number , b: number) : number {
    return (a + b);
}

let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

const person: {
    name: string;
    age: number
} = {
    name: 'Jack',
    age: 21,
}

const fruits = ['Apple', 'Banana', 'Grape', 1];

const book: [string, number, boolean] = ['business', 1500, false];

enum CoffeeSize {
    SHORT = ' SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI',
}   

const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
}

let anything: any = true;
anything = 2;
let banana = 'banana';
banana = anything;

let unionType: number | string = 1;
unionType = '19';
unionType.toUpperCase();

type ClothSize = 'small' | 'medium' | 'large';
let clothSize: ClothSize = 'large';
const cloth: {
    color: string;
    size: ClothSize;
} = {
    color: 'white',
    size: clothSize,
}

function adder(num1: number, num2: number): number{
    return num1 + num2
}

function sayHello(): void{
    console.log('hello');
}

const anotherAdd: (n1: number, n2: number) => number = add;
anotherAdd(1, 2);

const doubleNumber = (number: number): number => (number * 2);

function doubleAndHandle(num: number, cb: (num: number) => number): void{
    const doubleNum = cb(num * 2);
    console.log(doubleNum * 2);
}
doubleAndHandle(2, doubleNum => {
    return doubleNum;
})

let unknownInput: unknown;
let anyInput: any;
let text: string;

text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput
}

23 satisfies number;
console.log(23 satisfies number);

// function error(message: string): never {
//     throw new Error(message);
// }

// console.log(error('This is an error'));

function getSizeName(size: 's' | 'm' | 'l' | 'xl' | 'xxl'): string {
    switch (size) {
        case 's':
            return 'small';
        case 'm':
            return 'medium';
        case 'l':
            return 'large';
        case 'xl':
            return 'xlarge';
        case 'xxl':
            return 'xxlarge';
        default:
            return size;
    }
}

