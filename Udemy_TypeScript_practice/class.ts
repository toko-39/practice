abstract class Person {
    static species = 'Homo sapiens';
    static isAdult(age: number): boolean{
        return age > 18;
    }
    constructor(public readonly name: string, protected age: number){
    }

    greeting(this: Person){
        console.log(`Hello, My name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }

    incrementAge(){
        this.age += 1;
    }
    abstract explainJob(): void;
}

class Teacher extends Person{
    explainJob(): void{
        console.log(`I am a teacher. I teach ${this._subject}.`);
    }
    get subject(): string{
        if(!this._subject){
            throw new Error('There is no subject');
        }
        return this._subject;
    }
    set subject(value: string){
        if(!value){
            throw new Error('There is no subject');
        }
        this._subject = value;
    }
    constructor(name: string, age: number, public _subject: string){
        super(name, age);
    }

    greeting(){
        console.log(`Hello, My name is ${this.name}. I am ${this.age} years old. I teach ${this._subject}.`);
    }
}
const teacher = new Teacher('totot', 20, 'Math');
// teacher.greeting();
// console.log(teacher.subject);

