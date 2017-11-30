//Create an object
const tohir = {
    name:"Tohir",
    Country:"Nigeria",
    talk: function(){
       console.log("Hello, I am", this.name, "from", this.Country)
    }
}

tohir.talk()

console.log(tohir.__proto__)

// Object.create
const umu = Object.create(tohir)
console.log(umu.__proto__) //{name:'Adam', talk: function}
umu.talk() 

// Updating Prototype
tohir.name = "Omoloye" //Change the prototype
tohir.talk() //Hello, I am Bob, OK good
umu.talk() //Hello, I am Bob (delegation!)
umu.name = "Umuani"
umu.talk() 

//Check prototype?
console.log(tohir.isPrototypeOf(umu)) //true