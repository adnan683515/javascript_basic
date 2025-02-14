let x = 10;
let team;
let y = 20;
team = x;
x = y;
y = team;
console.log("x=>", x, 'y=>', y)
console.log(Math.ceil(7.004));

{
    var a = 100
}
function add(a, b) {
    var p = 2;
    if (b === undefined) {
        console.log("uda")
    }
}
add(1)
console.log(a)
console.log(Math.pow(2, 3))

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}
console.log(Math.sqrt(10))