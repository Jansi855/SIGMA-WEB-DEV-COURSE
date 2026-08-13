// let obj={
//     a:1,
//     b:"Jansi"
   

// }
// console.log(obj)

// let animal={
//     eats:true
// };

// let rabbit={
//     jumps:true
// }

// animal.__proto__=rabbit;

class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created..")
    }
    eats(){
        console.log("Kha raha hoon")
    }
    jumps(){
        console.log("kood raha hoon")
    }
    run(){
        console.log("Bhag raha hu")
    }
}
let a = new Animal("Bunny")
console.log(a)

class lion extends Animal{
    constructor(name){

        super(name)
        this.name = name
        console.log("Object is created and he is lion")
    }
    eats(){
         super.eats()
        console.log("kha raha hu and roar")
    }
   
}

let l = new lion("Shera")
console.log(l)

