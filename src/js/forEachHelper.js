const names = ['Erdem','Kadircan','Tuğçe']

names.forEach(function(name){
    console.log(name)
})


const purchases = [
    {quantity:4,amount:60},
    {quantity:3,amount:57},
    {quantity:6,amount:33}
]
let total = 0
purchases.forEach(function(purchase){
    total+= purchase.quantity * purchase.amount

})
console.log(total)