const previous = 125

const current = [
    {expense:"Ayakkabı",amount:150},
    {expense:"Tişört",amount:40},
    {expense:"Parfüm",amount:185}
]

const result = current.reduce(function(sum,expense){
  return expense.amount + sum
},previous-50)

console.log(result)

const users = [
    {name:"Erdem",lastName:"Kahveci"},
    {name:"Tuğçe",lastName:"Kahveci"},
    {name:"Kadircan",lastName:"Kahveci"}
]

const names = users.reduce(function(start,user){
 start.push(user.name)
 return start
},[])

console.log(names)