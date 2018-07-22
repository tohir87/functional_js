var cars = [
    {"make":"Nissan", "model":"2000", "type":"SUZ"},
    {"make":"Toyota", "model":"2001", "type":"SUV"},
    {"make":"Honda", "model":"2002", "type":"Sallon"},
]

cars.map( (car, idx) => Object.assign(car, {"speed":200 * idx + "kmph"}) )

console.log(cars)