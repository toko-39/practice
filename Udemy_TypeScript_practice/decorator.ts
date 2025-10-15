function Logging(target: Function){
    console.log(target);
}

function Logging2(target: Function){
    console.log(target);
}

function Logging3(target: Function){
    console.log(target);
}

@Logging
class User {
    name: string = 'John';
    constructor(name: string){
        console.log(name);
    }
}