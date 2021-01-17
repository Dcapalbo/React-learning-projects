
// Classing test 
class Human {
    species = "human";
}

class Person extends Human {
    name = "Domenico";
    printMyName = () => {
        console.log(this.name);
    }
}
// Invoke the new object 
const person = new Person();
person.printMyName();
console.log(person.species);
