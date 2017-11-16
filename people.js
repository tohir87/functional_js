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
let add = (x, y) => x + y //a simple (reusable) addition function

console.log('\nMean Age', data.reduce(add, 0)/data.length)