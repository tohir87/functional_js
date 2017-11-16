class Animal{
    constructor(){
        this.sound = ''
        this.speed = 0
    }

    makeSound() { 
        return this.sound 
    }
}

class Cat extends Animal {
    constructor(sound, speed) {
        super();
        this.sound = sound
        this.speed = speed
    }
 }

 let pixel = new Cat('meow',20)
 console.log(pixel.makeSound())
 