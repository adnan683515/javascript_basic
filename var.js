var age=12;
console.log(age)


var number = [12,4,34,5,6,787,5]
function fun(num){

    for(let i=0;i<num.length ;i++){
        if (num[i]%2==0){
            console.log("Even")
        }
        else{
            console.log("Odd")
        }
    }
}
fun(number)

const statement = 'i am a hard working person'
const FullName ="Adnan Miya"
console.log("upercase",FullName)
var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

console.log(statement)
const newstatement = statement.split(" ")
const newnumser = numbers.join("")
console.log(newnumser)
const MakeString = newstatement.reverse().join("  ")
console.log(MakeString)
const ans = ''
for(const word of newstatement){

    ans.concat(word)
}
console.log(ans)