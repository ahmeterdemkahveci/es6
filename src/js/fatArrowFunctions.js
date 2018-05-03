const value = (name,lastName) => {
    return `My name is ${name} ${lastName}` 
}

console.log(value("Erdem","Kahveci"))
 
//
const sum = (x,y) => x+y

console.log(sum(1,5))

//
const result = x => x*7

console.log(result(4)) 


const cars = {
    brands:['Lamborghini','Ferrari','Pagani'],
    category:'Luxury Sport Car',
    /*message : function(){
        let elm = this
        return this.brands.map(function(brand){
            console.log(`${brand} is ${elm.category}`)
        })
    }*/
    message: function(){
        return this.brands.map((brand)=>{
            console.log(`${brand} is ${this.category}`)
        })
    }
}

cars.message()