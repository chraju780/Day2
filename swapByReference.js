var obj = {
    value1 : "abc",
    value2 : "def"
}
console.log(obj)
function swapByReference(obj){
    let temp
    temp = obj.value1
    obj.value1 = obj.value2
    obj.value2 = temp
    console.log(obj)
}
swapByReference(obj)
console.log(obj)