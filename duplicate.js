

function duplicate(array){

    const result = []

    for(const num of array){
        if(result.includes(num) === false){
            result.push(num)
        }
    }
    return result;
}
const DupArray=[10,10,10,102,10,40,2,40,10,50]
console.log(duplicate(DupArray))
const dupres = duplicate(DupArray)
console.log("MIN",Math.min(10,10,10,20,3,4))
console.log("MAX",Math.max(102,12320123,12301,10,-1))
console.log(Math.PI)
console.log(Math.abs(-10))
console.log(Math.ceil(2.40))
console.log(Math.floor(1.2))
console.log(Math.round(3.9))

console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.round(Math.random()*10))