console.log("============== OOP ==================")
class Engine{
    constructor(number, size, totalRunningTime){
        this.number = "84747464"
        this.size = 50
        this.totalRunningTime = totalRunningTime
    }

    engineInfo(){
        console.log("\nEngine No: " + this.number + "\nLitres of Fuel: " + this.size + "\nRunning Time: " + this.totalRunningTime + " km/h")
    }
}

// Class person
class Person{
        constructor(name){
            this.name = name
            this.address = '' 
        }
        
        // can drive method
        canDrive(){
            return this.name + " is a professional driver"
        }
    
        // read poetry
        readPoetry() {
            return this.name + " does not read poetry"
        }

        // returns info about the owner
        getInfo(){
            return {
                "Name" : this.name,
                "Driving skill" : this.canDrive(),
                "About" : this.readPoetry()
            }
        }
    }

class Vehicle extends Engine {

    constructor(obj){
        super()
        this.chassisnumber = obj.chassis
        this.numberOfWheels = 4

        // add the file system library
        let fs = require('fs')
        // read external json file
        this.carLogs = JSON.parse(fs.readFileSync('carsOOP.json', 'utf8'))
        this.vehicleDetails = this.carLogs.filter(x => x.chassis === this.chassisnumber) 
        
        
    }

    displayError(){
        return "The chasis you entered is invalid"
    }

    findOwner(){
        let person = new Person(this.vehicleDetails[0].owner )
        return person.getInfo()
    }

    getTotalRunningTime(){
        //get total runnung time
        var vehicleDetails = this.vehicleDetails
        return vehicleDetails.reduce((sum, vehicleDetails) => sum + vehicleDetails.runtime, 0) + " Mins"
    }

    getTotalDistance(){
        //get total distance travelled
        var vehicleDetails = this.vehicleDetails
        return Math.round(vehicleDetails.reduce((sum, vehicleDetails) => sum + parseFloat(vehicleDetails.distance), 0)) + " km/h"
    }

    getVehicleInfo(){
        return this.vehicleDetails.length == 0 
            ? this.displayError() :
        {
            
            "Owner" : this.findOwner(),
            "Details" : {
                "chasis" : this.chassisnumber,
                "Total Running Time" : this.getTotalRunningTime(),
                "Total Distance Covered" : this.getTotalDistance(),
            }
           
        }
    }
    
}

var object = {
    "chassis": "J9O 5P3"
}

let vehicle = new Vehicle(object)
console.log(vehicle.getVehicleInfo())

console.log("============== Compositional Style ==================")
// read external file
let fs = require('fs')
let carLogs = JSON.parse(fs.readFileSync('carsOOP.json', 'utf8'))

//Create a engine object
const enginec = {
    
    totalRunningTime: function(){
        //get total runnung time
        var find = carLogs.filter(x => x.chassis === this.chassis) 
        return find.reduce((sum, find) => sum + find.runtime, 0) + " Mins"
     },
     totalDistanceCovered: function(){
        //get total runnung time
        var find = carLogs.filter(x => x.chassis === this.chassis) 
        return Math.round(find.reduce((sum, find) => sum + parseFloat(find.distance), 0)) + " km/h"
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