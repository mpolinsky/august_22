class Person {
    constructor(name, height, fav_metal){
        this.name = name;
        this.height = height;
        this.fav_metal = fav_metal;
    }
    guess() {
        return 42;
    }
}

//P1 = Person("Mark", "1000", "Aluminum")

//console.log(P1.name)
//

module.exports.Person = Person
