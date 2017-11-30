const robot = {
    feeling: "nothing",
    name: function(name){
        this.name = name
    },
    getFeels: function(){
        console.log(this.name, "feels", this.feeling)
    }
}

   const hal = Object.create(robot)
   hal.name("hal") //Obvious code is obvious

   console.log(hal.__proto__)

// Additional objects
const calculations = {
    addition: function(){
        this.feeling = "happy"  
    }
 }
 
 const kill = {
    killHuman: function(){
        this.feeling = "sad"
    }
 }
   

 // Some composition
 hal.getFeels() //hal feels nothing
//  hal.addition() //won't work yet!
 Object.assign(hal, calculations, kill)
 hal.getFeels() //hal feels nothing
 hal.addition() //hal does some addition
 hal.getFeels() //hal feels happy
 hal.killHuman() //hal's friend is kill
 hal.getFeels() //hal feels sad