vehicles = [{"name":"Todd Curtis","type":"car","speed":576},{"name":"Monica Kim","type":"air","speed":366},{"name":"Eliza Barnes","type":"tank","speed":101},{"name":"Rebekah Wong","type":"tank","speed":305},{"name":"Valenzuela Charles","type":"air","speed":313},{"name":"Doreen Sweet","type":"car","speed":123},{"name":"Fay Baird","type":"car","speed":412},{"name":"Beulah Brady","type":"car","speed":143},{"name":"Boyer Marquez","type":"air","speed":270},{"name":"Martin Levine","type":"tank","speed":381},{"name":"Rebecca Hurst","type":"air","speed":419},{"name":"Moore Sweeney","type":"tank","speed":230},{"name":"Peggy Luna","type":"car","speed":650},{"name":"Myrtle Parker","type":"tank","speed":387},{"name":"Baxter Estrada","type":"tank","speed":182},{"name":"Salinas Finley","type":"car","speed":533},{"name":"Latasha Wallace","type":"tank","speed":669},{"name":"Amber Barber","type":"car","speed":460},{"name":"Green Green","type":"air","speed":519},{"name":"Beverly Weeks","type":"air","speed":454},{"name":"Avis Alexander","type":"car","speed":570},{"name":"Edith Short","type":"tank","speed":87},{"name":"Miller Riggs","type":"car","speed":558},{"name":"Carole Roberson","type":"tank","speed":151},{"name":"Pam Preston","type":"air","speed":169},{"name":"Stacie Lang","type":"car","speed":688},{"name":"Natalie Roach","type":"tank","speed":267}]
console.log('Number of vehicles: ' + vehicles.length)

let totalSpeed = vehicles.reduce((sum, vehicle) => sum + vehicle.speed, 0)
console.log('Total Speed: ' + totalSpeed)

// pick out only tanks and count
let isTank = x => x.type === "tank"
let tanks = vehicles.filter(isTank)
console.log('number of tanks: ' + tanks.length)

// vehicles faster than 650mph
let isFast = x => x.speed > 650
let fastVehicles = vehicles.filter(isFast)
console.log(fastVehicles.map(x => x.name))
console.log('number of fast vehicles: ' + fastVehicles.length)

// convert to km
let vehiclesKm = vehicles.map(x => x.speed * 1.609344)
console.log('Vehicles speed in km')
console.log(vehiclesKm)

// Output the entire array showing speed in kph
let vehiclesArr = vehicles.map(x => x)({'name' : x.name, 'speed' : x.speed})
console.log(vehiclesArr)
