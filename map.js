var words = ["ground", "control", "to", "major", "tom"]

function map(array, func) {
  let newArray = []
  for (i = 0; i < array.length; i++) {
    newArray.push(func(array[i]))
    // console.log(newArray)
  }
  console.log(newArray)
  return newArray
}



map(words, function(word) {
  return word.length;
})

map(words, function(word) {
  return word.toUpperCase()
})

map(words, function(word) {
  return word.split('').reverse().join('')
})