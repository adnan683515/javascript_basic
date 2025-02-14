function Addition(a,b){
    
    console.log(b)
    let Even = []
    let odd = []
    for(let i=0;i<a.length;i++){
        if(a[i]%2==0){
            Even.push(a[i]);
            continue;
        }
        odd.push(a[i])
    }
    console.log(odd)
    return Even;
}
const array = [10,21,30,1]
const final = Addition(array,200)

console.log(final)


