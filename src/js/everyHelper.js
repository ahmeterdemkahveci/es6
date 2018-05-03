const students =[
    {name:"Erdem",grade:4},
    {name:"Tuğçe",grade:5},
    {name:"Kadircan",grade:7} 
]

let allStudentsPassedTheCourse = students.every(function(student){
    return student.grade>=3
})

console.log(allStudentsPassedTheCourse)