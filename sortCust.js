var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a, b){
  let nameA = a.name.toUpperCase()
  let nameB = b.name.toUpperCase()
  if (nameA < nameB){
      return -1
  }
  if (nameA > nameB){
    return 1
  }
  var ageA = a.age
  var ageB = b.age
  if (ageA < ageB){
    return 1
  }
  if (ageA > ageB){
    return -1
  }
  return 0
})

console.log(students)