class ComplexNumber{
    constructor(){
        this.real = ''
        this.imaginary = ''
    }

    print(){
        console.log(this.real + ' ' + (this.imaginary > 0 ? '+' : '' )+ this.imaginary + 'i')
    }

    conjugate() {
        this.imaginary = this.imaginary * -1
    }

    reciprocal() {
        return "1 / " + this.real + ' + ' + this.imaginary + 'i';
    }

    polar(){
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2))
    }
}

class Test extends ComplexNumber{
    constructor(real, imaginary){
        super()
        this.real = real
        this.imaginary = imaginary
    }
}

let sample = new Test(4, -5)
sample.print()
sample.conjugate()
sample.print()
console.log("Polar", sample.polar())
console.log("Reciprocal", sample.reciprocal())
