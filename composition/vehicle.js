// read external file
let fs = require('fs')
let carLogs = JSON.parse(fs.readFileSync('carsOOP.json', 'utf8'))

//Create a engine object
const enginec = {
    
    totalRunningTime: function(){
        //get total runnung time
        var find = carLogs.filter(x => x.chassis === this.chassis) 
        return find.reduce((sum, find) => sum + find.runtime, 0)
     },
     totalDistanceCovered: function(){
        //get total runnung time
        var find = carLogs.filter(x => x.chassis === this.chassis) 
        return Math.round(find.reduce((sum, find) => sum + parseFloat(find.distance), 0))
     }
}

// create vehicle object
const vehicle1 = {
    getVehicleInfo : function(){
        var find = carLogs.filter(x => x.chassis === this.chassis) 
        return find.length > 0 ? {
            "owner" : this.owner(),
            "Total Distance Covered" : this.totalDistanceCovered(),
            "Total Running Time" : this.totalRunningTime(),
        } : "invalid chasis number detected"
    }
}

// create an owner object
const personn = {
    name : '',
    address : '',
    owner: function(){
        var find = carLogs.filter(x => x.chassis === this.chassis) 
        return {
            "Name" : find[0].owner,
            "Read Poetry" : this.readPoetry(),
            "Driving Skill" : this.canDrive(),
        }
    },
    canDrive : function(){
        return "A professional driver"
    }
}

const poetry = {
    readPoetry : function(){
        return "Hey! I do read poetry"
    }
}

// perform object assign
Object.assign(vehicle1, enginec, Object.assign(personn, poetry))

// set vehicle chasis to search
vehicle1.chassis = "J9O 5P3"
console.log(vehicle1.getVehicleInfo())
