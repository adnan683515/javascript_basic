const subject = "Chemistry"
const Chemistry = "Chemistry "

if (subject.trim() === Chemistry.trim()) {
    console.log("ami pora suna korte raji")
} else {
    console.log("time pass korte bosci")
}

const sectence = "I am a good student of my class.";

console.log("split",sectence.split(" "))//substing ar jonno split use kora hoi
// console.log(sectence.split("a"))
const AllWord = ['I', 'am','a', 'good','student', 'of','my', 'class.']
console.log(AllWord.join(","))
console.log(AllWord.join("|")) //join means akta array all upadan k jora lagano
console.log(AllWord.join("/"))

const FullName = 'Golam Faruk'
const lastname = "Adnan"

console.log(FullName.concat(' ').concat(lastname))
console.log(FullName.concat(lastname))

console.log(lastname.includes('d'))