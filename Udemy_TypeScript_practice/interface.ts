const human: {
    name: string;
    age: number;
} = {
    name: 'totot',
    age: 20,
}

interface Human extends Nameable{
    age: number;
    greeting(message: string):void;
}

// const human2: Human = {
//     name: 'totot',
//     age: 20
// }

let tmpFunc: (message: string) => void;

class Developer implements Human{
    constructor(public name: string, public age: number, public experience: number){}
    greeting(message: string = 'hello'):void {
        console.log(message);
    }
}

interface Nameable {
    name: string;
    nickName?: string;
}

// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
    (num1: number, num2: number): number;
}
let addFunc: addFunc = (num1, num2) => {return num1 + num2};
