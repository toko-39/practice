function copy<T extends {name: string}>(value: T): T{
        return value;
}
console.log(copy({name: 'toto'}));
type K = keyof {name: string; age: number;};

class LightDatabase<T extends string | number | boolean> {
    private data: T[] = [];
    add(value: T){
        this.data.push(value);
    }
    remove(value: T){
        this.data.splice(this.data.indexOf(value), 1);
    }
}
const stringLightDatabase = new LightDatabase<string>();
