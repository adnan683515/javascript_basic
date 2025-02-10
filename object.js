const student = {
    Name:'Adnan',
    Roll:'683515',
    Dept:"CST",
    regular : true,
    gpa :[3.39,3.50,3.60,80],
    semester:'7th',
    year:'final',
    certificate:function(a,b){
        const sum = a+b;
        console.log("Total",sum)
    }
}


student.semester='8th'
console.log(student)
console.log(student.gpda)
console.log(student.certificate(5,6))

for(let i =0;i<student.gpa.length;i++){

    console.log(student.gpa[i])
}
const key = Object.keys(student)//key ber korar system
console.log("key",key)

for(let i = 0; i< Object.keys(student).length ;i++){
    console.log(key[i])
}
console.log(Object.values(student))//value ber korar system
// delete(student.Roll)
delete student.Roll
// delete(student, "Name")
console.log(student)

for(const key in student){
    console.log(student[key])
}


const makeobj = new Object({name:"adnan",roll:12})
console.log("make object",makeobj)

const makeobject2 = Object.create({name:"adnan",roll:12})
console.log("object crate",makeobject2.roll)

const x = ""
if(!x.length){
console.log("Hey")
}else{
console.log("Hi")
}

let str = "Mississippi";
console.log(str.indexOf("i", 3));
console.log(str.indexOf("M", 1));

const s = "Hello";
s[0] = "h";
console.log(s);