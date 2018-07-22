// import fs
let fs = require('fs')

// read external file
let data = JSON.parse(fs.readFileSync('data.json', 'utf8')).data

// count number of email addresses in the data
let email_addresses = data.map(x => x[2])
console.log("\n\nThere are" ,email_addresses.length , "addresses in the data \n\n");

// Show all emails that returned
// All emails with return ID of 1 are believed to be spammers.
let spammers_emails = data
        .filter(x => x[3] == 1) 
        .map(x => x[2])
console.log("\n\n List of spammers email \n" ,spammers_emails)

// emails with largest ID
var largest_id = data.map(x => parseInt(x[0]))              // collate all the IDs
                    .reduce( (a,b) => Math.max(a,b) )       // reduced to the max
console.log("\n\Largest ID:" ,largest_id )


// Average id
/**
 * I have to fractionalise each of the IDs to be able to get the sum. 
 * Because no numeric data types can store the lenght of thos numbers.
 * The best I could do here is to device all the ID's by 1 million,
 * compute the average and multiply the result by 1000000.
 */
let averageID = data.reduce((sum, data) => sum + data[0]/1000000, 0) / data.length
console.log("\n Average ID = " , averageID * 1000000)


// Total number of spammers
console.log("\n Total number of spammers " , spammers_emails.length)


// Find locations where BF is contained in part
console.log("Locations with BF", data.filter( x => x[1]) )