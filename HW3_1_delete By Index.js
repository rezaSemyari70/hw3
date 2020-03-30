//function with array methods
function deleteByIndex(arr , index){
    return arr.filter(item  => item !== arr[index]);
}

console.log( deleteByIndex(['a','b','c'] , 1) );


//---------------------------------------------------------

//function with algorithem
function algorithemDeletByIndex(arr , index){
    let res = [] , k = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != arr[index]) res[k++] = arr[i] ;
    }
    return res ;
}

console.log( algorithemDeletByIndex(['a','b','c'] , 1) );