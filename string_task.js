const statement = 'examplexx'
const makestatment = statement.split("")
console.log(makestatment)
for(let i =0;i<makestatment.length;i++){

    if(makestatment[i] === 'x' || makestatment[i] === 'X'){
        makestatment[i]='y'
    }
}
console.log(makestatment.join("").toUpperCase())

const array =['apple','mango','banana','kumra']
const campus = "feni computer institute"
const name ="Golam Faruk Adnan"
// console.log(Array.from(name)) //array from ar kaj hocce kono akta string k array banano
// console.log(array.slice(0,3))
// console.log(campus.split(" ")) //splite akta sting k array banai pele
// console.log(array.join(" "))//join akta array updan gula k contact kore pele

// console.log(array.splice(0,3)) //splice array ta modify kore pele mane change kore pele
// console.log(array)
