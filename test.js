let numbers = [1, 2, 3, 4, 5, 4, 5,4]
let uniq = [...new Set(numbers)]
let frequency = [];
let reso = uniq
    .map( function(cur_val, idx){
        freq = numbers.filter(x => x == cur_val).length
        frequency.push(freq);
        return [cur_val, freq]
    })

    .filter(y => y[1] == Math.max(...frequency))
     .map(x => x[0])

  console.log("\n\n")

   let findWord = "This is a boring sentence."
   .replace(/is/g,"at") 
   .replace(/o/,"cark") 
   .replace(/se/,"he") 
   console.log(findWord)
//    let findWord2 = "bbc".search(/ab+c?/) 
//    console.log(findWord2)
//    let findWord3 = "ac".search(/ab+c?/) 
//    console.log(findWord3)
//    let findWord4 = "abc".search(/ab+c?/) 
//    console.log(findWord4)

//   console.log("\n\n")
//   let pablo = "Computers are useless. They can only give you answers."
//   console.log(pablo.replace(/p/gi,"m").replace(/answers/g,"diseases"))
