var arr = [2,7,11,15,14,5,9,6];
var target = 19;
var out=document.getElementById("output")
function findIndex(){

for(let i = 0 ; i < arr.length ; i++){
    for (let j = i + 1; j <= arr.length - 1; j++){
        if(target == arr[i] + arr[j]){
            
            out.innerHTML=(`The indexes with target  = 19 is ${[i,j]}`)
        }
    }
}
}