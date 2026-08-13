class Student {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value){
        if (value.length<4){
           console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
    
}
let user = new Student("John");
console.log(user.name)

user.name = "Jansi"
console.log(user)

