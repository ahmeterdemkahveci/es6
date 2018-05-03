var divs = document.getElementsByTagName('div')
console.log(divs )

for(let i = 0 ; i<divs.length;i++){
     divs[i].addEventListener('click',function(){
         alert('You clicked the '+i+ ' div')
     })
}
/*String Concatenation in ES6 */
function returnEmployee(){
    /*var name = "Erdem"
    var age = 28
    var position = "Software Developer"
    console.log("My name is " + name + " and I am " + age + " years old and work as "+ position) ES5*/
    
    var user={
         name: "Erdem",
         surname: "Kahveci",
         age:28,
         salary:1500
    }

    const name = "Erdem"
    let age = 28
    let position = "Software Developer"

    console.log(`My name is ${name} and I am ${age} years old and work as a ${position}`)
    /* Template Strings with some logic and function call*/
    const names = ["Erdem","Kadircan"]
    let flag = false
    console.log(`Acording to the flag name is ${flag === true ? names[0] : names[1]}`)
    console.log(`The result is ${7*6}`)
    console.log(`Name of the car is ${carName(false)}`)

    console.log(`My name is ${user.name} ${user.surname} and I am ${user.age} years old and earn ${user.salary}$ per month`)
}

function carName(flag){
    return flag ? 'Ferrari': 'Lamborghini'
}
 
returnEmployee()