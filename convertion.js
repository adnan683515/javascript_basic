//12 enchi te 1 feet

function convert(inchi) {
    const storeFeet = [];
    const feet = inchi / 12;
    storeFeet.push(parseInt(feet))

    storeFeet.push(inchi % 12)
    return storeFeet;
}
let value = convert(75)
console.log(value[0], "Feet", value[1], "inchi")


function leafYear(year) {

    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    } if (year % 400 === 0) {
        return true
    }

    return false
}

console.log(leafYear(2052))

