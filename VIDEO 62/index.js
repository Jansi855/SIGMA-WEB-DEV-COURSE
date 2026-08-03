/* Create a business name generator by combining list of adjectives
and shop name and another word 


Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another word:
Bros
Limited
Hub
*/

let rand1 = Math.floor(Math.random()*3)
let rand2 = Math.floor(Math.random()*3)
let rand3 = Math.floor(Math.random()*3)

let Adjective;
let ShopName;
let AnotherWord;

//Adjective
if(rand1===0){
    Adjective = "Crazy";
}
else if (rand1 === 1){
    Adjective = "Amazing";
}
else{
    Adjective = "Fire";
}


//ShopName
if(rand2===0){
    ShopName = "Engine";
}
else if (rand2 === 1){
    ShopName = "Food";
}
else{
    ShopName = "Garments";
}

//AnotherName
if(rand3===0){
    AnotherWord = "Bros";
}
else if (rand3 === 1){
    AnotherWord = "Limited";
}
else{
    AnotherWord = "Hub";
}

console.log(`Business Name: ${Adjective} ${ShopName} ${AnotherWord}`);


