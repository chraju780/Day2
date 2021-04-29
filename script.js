function val(id){
    document.getElementById('answer').value+=id;
}
function ans(){
    var res=document.getElementById('answer').value;
    var finalResult=eval(res);
    document.getElementById('answer').value=finalResult;
}
function clea(){
    var a =0;
    document.getElementById('answer').value=" ";
}
function cle1(){
    var c = document.getElementById('answer').value
    document.getElementById("answer").value= c.slice(0,c.length-1)
}