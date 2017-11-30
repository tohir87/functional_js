class Engine{
    constructor(number, size, totalRunningTime){
        this.number = number
        this.size = size
        this.totalRunningTime = totalRunningTime
    }

    engineInfo(){
        console.log("\nEngine No: " + this.number + "\nLitres of Fuel: " + this.size + "\nRunning Time: " + this.totalRunningTime + " km/h")
    }

    runningTime(){
        console.log(this.totalRunningTime + " km/h")
    }
}

class Person{
        constructor(){
            this.name = ''
            this.address = '' 
        }
    
        canDrive(){
            console.log("driving...")
        }
    
        readPoetry() {
            console.log("I don't read poetry", this.name)
        }
    
    }

class Vehicle extends Person {

    constructor(obj){
        super()
        this.chassisnumber = obj.chassis
        this.name = obj.owner
        this.address = ''
        this.distance = obj.distance
        this.runtime = obj.runtime
        this.numberOfWheels = 4

        this.details = []
    }

    findOwner(){
        let fs = require('fs')
        // read external file
        let chatLogs = JSON.parse(fs.readFileSync('carsOOP.json', 'utf8'))
        this.details = chatLogs.filter(x => x.chassis === this.chassisnumber) 
    }

    getTotalRunningTime(){
        let fs = require('fs')
        // read external file
        let chatLogs = JSON.parse(fs.readFileSync('carsOOP.json', 'utf8'))
        var find = chatLogs.filter(x => x.chassis === this.chassisnumber) 
        //get total runnung time
        
        console.log("Total Running Time is:", find.reduce((sum, find) => sum + find.runtime, 0))
    }
    
}

var object = {
    "chassis": "J9O 5P3",
    "owner": "Alexis",
    "distance": "22.4078718509",
    "runtime": 90
}

let vehicle = new Vehicle(object)
vehicle.getTotalRunningTime()
vehicle.readPoetry()