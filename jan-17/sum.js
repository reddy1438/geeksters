var n  = parseInt(prompt("Enter a number"));
function manipulateArr(n,x,y){
  /* return[
    'Multiply by 4':x(n) , 'Add By 9':y(n)
   ]*/
   var mul = x(n);
   var add = y(n);
   return[x(n),y(n)];
}
function mulBy4(x){
    return x * 4;
}
function add9(y){
    return y * 9;
}
var call = manipulateArr(n,mulBy4,add9)
console.log(call);
document.write("The multiplication and sum of the number is ",call)