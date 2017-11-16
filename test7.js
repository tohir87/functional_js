const twice = (f, v) => f( f(v) )
const add3 = v => v + 3
console.log( twice(add3, 7) )
