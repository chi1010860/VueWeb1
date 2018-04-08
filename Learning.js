function createObj(key, value){
    const obj = {};
    obj[key] = value;
    return obj;
}

const person = createObj('name','John');

console.log(person);