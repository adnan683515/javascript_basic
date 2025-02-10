const number = [23, 4, 343, 43, 232, 45];

// for (const num of number) {
//     console.log(num)
// }

console.log("--------------------")
let i = -1;
while (i < number.length) {
    i += 1;
    if (number[i] == 4) {
        continue;
    }
    console.log(number[i])




}

console.log("asdfadsf")
const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = -1; i < array.length; i++) {
    if (i == 5) {
        continue;
    }
    console.log(array[i]);
}



const colors = ['red', 'blue', 'green', 'yellow', 'orange']

let j = colors.length - 1;

while (j >= 0) {


    console.log(colors[j])
    j--;
}

const numbers = [12, 98, 5, 41, 23, 78, 46];

let p = 0;

while(p<numbers.length){
    if(numbers[p]%2===0){
        console.log(numbers[p])
    }
    p++;
}
var word = ['Tom', 'Tim', 'Tin', 'Tik']
let BigWord=''
for(let w of word){
    
    BigWord+=w;
}

console.log(typeof BigWord)

const statement = 'I am a hard working person'
let storeWord=[]

let makeWord =''

for(let i = 0;i<statement.length;i++){

    if (statement[i] !=' '){
        makeWord += statement[i]
    }
    else{
        storeWord.push(makeWord);
        console.log(makeWord)
        makeWord=''
    }
}
storeWord.push(makeWord)
let k = storeWord.length-1;
while(k>=0){
    console.log(storeWord[k]);
    k--;
}

let MakeString =' '

for(let i=storeWord.length-1;i>=0;i--){

    MakeString+=storeWord[i];
    MakeString +=' '
}
console.log(MakeString.length)
console.log(MakeString)