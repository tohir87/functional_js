
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  var min = Math.min(A)
  console.log(min)

  let is = A.map(function(x, idx, arr){
    var min = 1;
    return min == x ? ++min : min;

  } )
}

var bb = solution([1,3,6,4,1,2])
console.log(bb)
