const numbers = [1,2,3,4,5]

const otherNumber = numbers.map(function(number){
    return number * 10
})
console.log(otherNumber)


const users = [
    {name:'Erdem Kahveci',age:28,eyes:'green'},
    {name:'Tuğçe Kahveci',age:24,eyes:'black'},
    {name:'Kadircan Kahveci', age:17, eyes:'black'}
]

const activeUsers = users.map(function(user){
    return user.name
})

const listOfActiveUsers = document.querySelector('.userList')

activeUsers.forEach(function(name){
    listOfActiveUsers.insertAdjacentHTML("beforeEnd", `<option value="${name}">${name}</option>`)
})


console.log(activeUsers)