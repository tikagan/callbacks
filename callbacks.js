// The second argument/parameter is expected to be a function
function findWaldo(person, index) {
  //for (var i = 0; i < arr.length; i++) {
    if (person === "Waldo") {
      return true
    }
}

var people = ["Alice", "Bob", "Waldo", "Winston"]

// function actionWhenFound(index) {
//   console.log("Found him at index " + index + "!")
// }


people.forEach(function wheresWaldo(person, index) {
  if (findWaldo(person, index)) {
    console.log("Found him at index " + index + "!")
  }
})