
function example(){
    return function (targetClass) {
/*            Reflect.getMetadata('design:paramtypes', targetClass)*/
            return targetClass;
    }
}
@example()
class Person{
}
console.log(
    new Person()
);
