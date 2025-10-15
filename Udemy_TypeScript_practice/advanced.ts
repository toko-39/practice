type Engineer = {
    name: string;
    role: string;
}

type Blogger = {
    name: string;
    follower: number;
}
// 

// type EnginnerBlogger = Enginner & Blogger;
type EnginnerBlogger = Engineer & Blogger;
const toto: EnginnerBlogger = {
    name: 'toto',
    role: 'engineer',
    follower: 1000,
}

type tmp = string & number;

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = StringNumber & NumberBoolean;

function toUpperCase(x:string): string; 
function toUpperCase(x:string | number) {
    if(typeof x === 'string') {
        x.toUpperCase();
    }
    return x;
}

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
    console.log(nomadWorker.name);
}

class Dog {
    speak() {
        console.log('bowwow');
    }
}

class Bird {
    speak() {
        console.log('tweet');
    }
    fly() {
        console.log('fly');
    }
}

type Animal = Dog | Bird;
function havePet(animal: Animal) {
    animal.speak();
    if(animal instanceof Bird) {
        animal.fly();
    }
}

const input = document.getElementById('input')!;
interface Designer {
    name: string;
    [index: string]: string;
}

const designer: Designer = {
    name: 'toto'    
}

interface DowndoadedData {
    id: number;
    user?: {
        name?: {
            first: string;
            last: string;
        }
    }
}

const downdoadedData: DowndoadedData = {
    id: 1
}
console.log(downdoadedData.user?.name?.first);

const userData = downdoadedData.user;
enum Color {
    RED,
    BLUE
}
let target = Color.RED;
let source = 0;
target = source;

