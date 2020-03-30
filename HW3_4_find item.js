//function with array methods
function findItem(arr , val){
    let value = arr.filter(item  => item == val) ;
    let index = arr.indexOf(val) ;
    return `{index:${index},item:${value}}`
}

console.log( findItem([2,3,4] , 3) );

//--------------------------------------------------

//function with algoritem 
function algoritemFindItem(arr , val){
    let item ,index ;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == val){
            index = i ;
            item = arr[i] ;
            break ;
        }
    }
    return `{index:${index},item:${item}}`
}

console.log( algoritemFindItem([2,3,4] , 3) );
