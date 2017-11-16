// import fs
let fs = require('fs')

// read external file
let data = JSON.parse(fs.readFileSync('lab4WHODemographic.json', 'utf8'))

// Output an array containing just the heights.
let populationHeights = data.map(x => x.height)
console.log('\nHeights in m:', populationHeights)

// output heights in cm : 100cm = 1m
let populationHeightsCm = data.map(x => Math.round(x.height * 100))
console.log('\nHeights in cm', populationHeightsCm)

// Get the mean height
let totalHeight = populationHeightsCm.reduce((sum, populationHeightsCm) => sum + populationHeightsCm.height, 0)
let meanHeight = totalHeight/data.length
console.log('\nMean Height:', meanHeight)

// Get the mean age
let totalAge = data.reduce((sum, data) => sum + data.age, 0)
let meanAge = totalAge/data.length
console.log('\nMean Age', meanAge)

// get Height population variance
let heightVariance = data.reduce((sum, data) => sum + Math.pow(data.height - meanHeight, 2), 0)/data.length
console.log('\nHeight Population Variance', heightVariance)
console.log('\nHeight Standard Deviation', Math.sqrt(heightVariance))

// get Age population variance
let ageVariance = data.reduce((sum, data) => sum + Math.pow(data.age - meanAge, 2), 0)/data.length
console.log('\nAge Population Variance', ageVariance)
console.log('\nAge Standard Deviation', Math.sqrt(ageVariance))


// get the mode height
console.log("\nPopulation mode height")
// loop over the population height
// get unique heights
let uniq = [...new Set(populationHeights)]      // get the unique hights
let frequency = [];
let modeHeights = uniq
    .map( function(cur_val, idx){
        freq = populationHeights.filter(x => x == cur_val).length
        frequency.push(freq);
        return [cur_val, freq]
    })
    .filter(y => y[1] == Math.max(...frequency))        // filter by the max frequency
    .map(x => x[0])

  console.log(modeHeights)


// get population median height
// sort the hights
let sortedHeights = populationHeightsCm.sort();
// check if entries is even or odd
idx =  sortedHeights.length/2;
median = populationHeightsCm.length % 2 == 0 ? (sortedHeights[idx] + sortedHeights[idx - 1]) / 2 : sortedHeights[Math.round(idx)]
console.log("\n Median Height " + median);


// get the mode Age
console.log("\nPopulation Age Mode")
// loop over the population height
// get unique ages
let populationAges = data.map(x => x.age)
let uniqAges = [...new Set(populationAges)]      // get the unique ages
let ageFrequency = [];
let modeAges = uniqAges
    .map( function(cur_val, idx){
        freq = populationAges.filter(x => x == cur_val).length
        ageFrequency.push(freq);
        return [cur_val, freq]
    })
    .filter(y => y[1] == Math.max(...ageFrequency))        // filter by the max frequency
    .map(x => x[0])

  console.log(modeAges)

// get median age
// sort the hights
let sortedAges =  data.map(x => x.age).sort();
// check if entries is even or odd
idx =  sortedHeights.length/2;
medianAge = data.length % 2 == 0 ? (sortedAges[idx] + sortedAges[idx - 1]) / 2 : sortedAges[Math.round(idx)]
console.log("\n Median Age " + medianAge);

// Sample from brazil
// filter by country brazil
let brazillians = data.filter(x => x.country === "Brazil")      
// get the heights of people from brazil
let brazillianHeights = brazillians.map(x => x.height)
// mean height of brazillians
let brazilianMeanHeight = brazillians.reduce((sum, brazillians) => sum + brazillians.height, 0)
// Brazillain height sample standard deviation
let brazilSampleDeviation = Math.sqrt(brazillians.reduce((sum, brazillians) => sum + Math.pow(brazillians.height - brazilianMeanHeight, 2), 0)/data.length);
console.log("\nBrazillian Height Standard Deviation: ", brazilSampleDeviation)