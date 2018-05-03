//ES5 Version
var createCharacter = function(name,powers){
    return {
        name:name,
        powers:powers,
        getEnemies:function(){
            return 'Bane and Joker'
        }
    }
}

var characterObj = createCharacter('Batman','Billionaire')

//console.log(characterObj)
//console.log(characterObj.getEnemies())

//ES6 Object Literals

const createdCharacter = (name,powers) => {
    return{
        name,
        powers,
        getEnemies(){
            return 'Bane and Joker'
        }
    }
}

const result = createdCharacter('Batman','Billionaire')
console.log(result)
console.log(result.getEnemies())

const name = "Ahmet Erdem";
const lastname = "KAHVECİ"
let age = 28;
const person =(name, lastname, age)=>{
    return {
        name,
        lastname,
        age
    }
}
console.log(person(name, lastname, age))