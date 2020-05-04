
let person={
    age:30,
    hobbies: ["swim","eat"],
    name: "Max"
}

// Object.assign copy the same address of array althouh it allows a new separate object
let secondPerson = Object.assign({}, person);
secondPerson.name = "Chris";
secondPerson.hobbies.push('reading');
console.log(person);