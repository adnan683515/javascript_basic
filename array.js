

var array = ['adnan','rahim','sakib','rakib']
// console.log(array.splice(2,2)) // splice mean koto ta kete niba ..splice(startindex, koita niba)
var food = 'h h l e'
array.push('hero','zero')
array.unshift('Kire')
// array.shift()
// array.pop()

console.log(array)

console.log(array.length)

array.unshift('Adnan') //unshift first a kono akta elements add kore

if (array.includes('zero')){
    console.log(array)
    console.log('zero exits')
    console.log(array.indexOf('zero'))
}
else{
    console.log('not found')
}

console.log(Array.isArray(food))


console.log(array.join())
var new_array = array.join()
console.log(new_array.length)
var letter = []
for (let i =0;i<new_array.length; i++){
    if(new_array[i] !=','){
        console.log(new_array[i])
        letter.push(new_array[i])
    }
}
console.log(letter)
console.log("slice: ",letter.slice(0,5))
console.log("splice :",letter.splice(6,5))

var Nam = ['habib','sami']
var roll = [12,3,4,5,6]

var nameRoll = Nam.concat(roll)
console.log(nameRoll)
console.log(Nam.indexOf('habib'))

console.log(Nam.includes('habib'))

