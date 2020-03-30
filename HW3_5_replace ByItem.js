//function with array methods
function replaceByItem(array , currentItem , newItem){
    let res = array.map((item ,index , array) => 
        array[index] === currentItem ? array[index] = newItem : item ) ;
    return res ;
}

console.log( replaceByItem(['a','b','c','d','e','f'] , 'e' , 't') );

//-------------------------------------------------------

//function with algorithem
function algorithemReplaceByItem(array , currentItem , newItem){
    for(let i = 0; i < array.length; i++){
        if(array[i] == currentItem) array[i] = newItem ;
    }
    return array ;
}

console.log( algorithemReplaceByItem(['a','b','c','d','e','f'] , 'e' , 't') );