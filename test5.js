let student =
    name =>
        number =>
            gpa =>
                name + "(no:" + number + ") gpa:" + gpa
                
console.log(student("bob")("123123")("4"))

let x = student("bob")("123123")
console.log(x("3"))


