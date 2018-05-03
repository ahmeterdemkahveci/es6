const students = [
    { name: "Erdem", grade:1 },
    { name: "Tuğçe", grade:2},
    { name: "Kadircan", grade: 3 }
]


let allStudentsPassedTheCourse = students.some(function (student) {
    return student.grade >4
})

console.log(allStudentsPassedTheCourse)