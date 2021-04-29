
var a =20;
var b = 10;
console.log('a = ' +a)
console.log('b = ' +b)
function swapBbValue(a,b){
    let temp;
    temp=a;
    a=b;
    b=temp;
    console.log('in function ')
    console.log('a = ' +a)
    console.log('b = ' +b)
}
swapByValue(a,b)
console.log('outside function ')
console.log('a = ' +a)
console.log('b = ' +b)



