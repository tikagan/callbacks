var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(obj, index) {
  let x = obj.x
  let y = obj.y
  let z2 = Math.pow(x, 2) + Math.pow(y, 2)
  let z = Math.sqrt(z2)
  return z
})

console.log(result)
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);