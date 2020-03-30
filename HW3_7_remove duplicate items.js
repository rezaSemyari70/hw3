// function with array methods
function removeDuplicate(arr){
    let res = [] ;
    for(let item of arr){
        if(!res.includes(item)) res.push(item) ;
    }
    return res ;
}

console.log(removeDuplicate([1,1,4,5,3,5,3,9]));


//-------------------------------------------------------------

//function with algorithem 
function algorithemRemoveDuplicate(arr){
    let res = [] , k = 0 ;
    for(let i = 0; i < arr.length; i++){
        let flag = 1 ;
        for(let j = 0; j < res.length ; j++){
            if(res[j] == arr[i]){
                flag = -1 ;
            }
        }
        if(flag == 1) res[k++] = arr[i] ;
    }
    return res ;
}

console.log(algorithemRemoveDuplicate([1,1,4,5,3,5,3,9]));
