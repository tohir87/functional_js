// import fs
let fs = require('fs')

// read external file
let chatLogs = JSON.parse(fs.readFileSync('chatLogs.json', 'utf8'))

q1 = chatLogs.filter(x => x.uname === "Dieter").length
console.log(q1)

q2 = chatLogs.filter(x => x.uname === "Dieter" || x.uname === "Pieter" ).length
console.log(q2)

// who wrote lobortis
str = '';
q4 = chatLogs
    .map( function(obj){
        str = str + obj.line + " "
    })
    console.log("no of words", str.split(" ").length)

    console.log("no of xters", str.replace(/\s/g,"").split("").length)


    // 5 who wrote lobortis
   q5 =  chatLogs.map( function(obj, idx, cur){
        // console.log(cur[idx].line)
        return cur[idx].line.search('lobortis') ? cur[idx].uname : ''
    })

    // console.log(q5)
    // console.log(chatLogs.map(x => x.line).search('lobortis'))