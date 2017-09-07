// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  console.log(arr)
  arr.forEach(function(element, index)) {
    if (element === "Waldo") {
      console.log(element)
      found(index)
    }
  }
}

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       const index = i
//       found(index)   // execute callback
//     }
//   }
// }

function actionWhenFound(index) {
  console.log("Found him at index " + index + "!")
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound)