function anagram(str1, str2){
    var l1 = str1.length;
    var l2 = str2.length;
    
    if(l1!=l2)
    return false;

    let a = str1.split('').sort().join('');
    let b = str2.split('').sort().join('');
    // console.log(a);
    // console.log(b);
    for( let i = 0 ; i <l1; i ++)
    {
        if(a[i]!=b[i])
        return false;
    }
    return true;
}
var a = prompt("enter a string");
var b = prompt("enter a string");
if(anagram(a,b))
console.log("It is a Anagram string");
else
console.log("it is Not an anagram string");