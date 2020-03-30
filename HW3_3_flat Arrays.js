//function with array methods
function flatArrays(arr){
    return arr.reduce((flat , value) => 
        Array.isArray(value) ? flat.concat(flatArrays(value)) : flat.concat(value) ,[]) ;
}

console.log(flatArrays([[2,3],5,[[[2,9],4],4],1,0]));


//---------------------------------

//with flat fucntion 
function funcFlat(arr){
    return arr.flat(Infinity) ;    
}

console.log(funcFlat([[2,3],5,[[[2,9],4],4],1,0]));