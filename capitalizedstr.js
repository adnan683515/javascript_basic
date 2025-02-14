let title = "I am learning Programming to become a programmer"
let ArrayTitle = title.split(' ')
let result = ''
for (let i = 0; i < ArrayTitle.length; i++) {
    let word = ArrayTitle[i]
    let ans = word.split('')
    ans[0] = ArrayTitle[i].charAt(0).toUpperCase();
    result += ans.join("") + ' ';
}
const ans = result.trimEnd()
// console.log(ans)





const randomNum = Math.ceil(11 + Math.random() * 10);
const text = 'I am learning Programming to become a programmer'
const TextArray = text.split(' ')
let maum ;
maum = TextArray[0].length
for(const word of TextArray){
    maum = Math.max(maum,word.length)
}
for(let i =1;i<TextArray.length;i++){

    if(TextArray[i].length === maum){
        console.log(TextArray[i])
        break
    }
}


const heights2 = [167, 190, 120, 165, 137];

let min= heights2[0]
for(let i =1;i<heights2.length;i++){
    min = Math.min(min,heights2[i])
}
console.log(min)
const SmallName = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let minname ;
minname = SmallName[0].length
for(const word of SmallName){
    minname = Math.min(word.length,minname)
}
for(let i =1;i<SmallName.length;i++){

    if(SmallName[i].length === minname){
        console.log(SmallName[i])
        break
    }
}