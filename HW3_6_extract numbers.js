// function with array methods
function extractNumbers(str){
    let res = str.split('').filter(item => +item || +item === 0).map(item => Number(item)) ;
    return res ;
}

console.log(extractNumbers("ihave2applesand3pineapples")) ;

//--------------------------------------------------------

//function with algorithem 
function algorithemExtractNumbers(str){
    let res = [] , j = 0;
    for(let i = 0; i < str.length; i++){
        if( +str.charAt(i) || +str.charAt(i) === 0)  
            res[j++] = +str.charAt(i) ;
    }
    return res ; 
}

console.log(algorithemExtractNumbers("ihave2applesand3pineapples")) ;