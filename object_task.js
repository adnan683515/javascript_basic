const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors['golden rod'])


const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car["passenger cepacity"] = 5;
console.log(car)

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks)

let student_2 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let numberOfKeys = 0;
for (let val in student_2) {
    numberOfKeys += 1;
}
console.log("number of properties", numberOfKeys)

const Obj = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}

for (const key in Obj) {
    console.log(key, ":", Obj[key], "type |", typeof Obj[key])
}


