let arr = [2,7,11,15];
let trgt = 9;

function toSum(arr, trgt) {
   
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        let dfrnt = trgt - arr[i];
        
            for (let j= 1+i; j<arr.length; j++) {
            if ( arr[j] == dfrnt)
            {   
                array.push(i);
                array.push(j);
                return array;
            }
        }
    }
    return 'target missmatch';
}

console.log(toSum(arr,trgt));