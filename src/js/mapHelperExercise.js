const paintings = [
    { name: 'Mona lisa', width: 200, height: 200 },
    { name: 'The scream', width: 400, height: 600 },
    { name: 'The last supper', width: 600, height: 800 }
]

const paintingsWithExplanations = paintings.map(function(painting){
    return `The ${painting.name} is ${painting.width} x ${painting.height}`
})

console.log(paintingsWithExplanations)

const cars = [
    { name: 'Ford', price: 200 },
    { name: 'Nissan', price: 400 },
    { name: 'Nissan', price: 600 }
]
function convertPrice(price){
  return price * 4.097
}
const carsWithCurrencies = cars.map(function(car){
    return `${car.name} is ${convertPrice(car.price)} TL`
})
console.log(carsWithCurrencies)