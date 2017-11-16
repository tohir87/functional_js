// substitute for loop
let numbers = [1, 2, 3, 4, 5]
let ss = numbers.filter( x => (x===2||x===5) )
 .map( x => x*2 )
console.log(ss);

// Another task
// total profit from all cars sold
let cars = [
    {"model":"Justin","price":171124,"sold":1},
    {"model":"Omar","price":47457,"sold":1},
    {"model":"Uriel","price":60847,"sold":0},
    {"model":"Perry","price":156782,"sold":1},
    {"model":"Jelani","price":94857,"sold":0}
 ]

 let totalProfit = cars.filter(x=>x.sold)
 .reduce((a,c)=>(a+c.price), 0)
 let totalProfit2 = cars.reduce( (a, c) => ( c.sold ? (a + c.price) : a ), 0)
 

 console.log("\n Total profit", totalProfit)
 console.log("\n Total profit2", totalProfit2)

 console.log("\n Mode example")
 let heightsArr = [7, 4, 4, 3, 18, 7, 6, 3, 5, 4, 4, 15, 4]
//  rr = heightsArr.map( x => [x, heightsArr.filter(x => x == x).length] )
//  console.log("\n Mode example", rr)

 let mapped = [];
 var ttt = heightsArr.map(function(cur_val, idx, arr){
    let freq = arr.filter(x => x == cur_val).length
    mapped.push([cur_val, freq]);
    // let jk = mapped.map(function(cur_val2, idx2, arr2){
    //     var max = Math.max(...arr2);
    //     console.log("max.", max);
    //  })
 })

 let uniques = [...new Set(mapped)]
 

  console.log("\nmapped, ", uniques);
//  let mode = mapped.reduce(x => x.frequency > 3).value
//  console.log("\nmode, ", mode);

