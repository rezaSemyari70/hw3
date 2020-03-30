// function with array methods
function extractNumbers(str){
    let res = str.split('').filter(item => +item).map(item => Number(item)) ;
    return res ;
}

console.log(extractNumbers("ihave2applesand3pineapples")) ;

//--------------------------------------------------------

//function with algorithem 
function algorithemExtractNumbers(str){
    let res = [] , j = 0;
    for(let i = 0; i < str.length; i++){
        if( +str.charAt(i) )  
            res[j++] = +str.charAt(i) ;
    }
    return res ; 
}

console.log(algorithemExtractNumbers("ihave2applesand3pineapples")) ;