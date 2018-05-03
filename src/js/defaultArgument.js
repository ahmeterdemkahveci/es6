//es5 version
function cars(brand){
    if(!brand){
        brand = 'Bravus'
    }
    console.log(`My brand is ${brand}`)
}

cars('Maybach')
cars()
//es6 version
function car(brand='Ford'){
    console.log(`My brand is ${brand}`)
}
car('Hamann')
car()


function greeting(name='user') {
    return `Hello ${name}`;
}
console.log(greeting('Kamil'))