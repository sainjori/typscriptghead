
function addAge(age){
    return function (targetClass) {
        return class {
            name = new targetClass().name;
            age = age;
        }

    }
}
@addAge(20)
class Person{
    name = "john";
}
console.log(new Person());
