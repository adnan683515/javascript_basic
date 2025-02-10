const FullName = 'Golam Faruk Adnan'

let rev = '';

for(const letter of FullName){

    rev = letter + rev;
    
}
console.log(rev)

const reversword = FullName.split('').reverse().join("")
console.log(reversword)