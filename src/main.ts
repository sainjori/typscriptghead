
const person = {name: "john"};


function addAge(age){
    return function (person) {
        return {
            age, //es6 key an value same name.
            name: person.name
        }
    }
}

const newPerson = addAge(30)(person);
console.log(newPerson);
