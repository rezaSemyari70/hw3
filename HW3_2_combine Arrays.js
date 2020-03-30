//function with array methods
function combineArrays(arr1 , ...array){
    return arr1.concat(...array).sort() ;
}

console.log( combineArrays([1,2,3],[4,5,6],[9,8,7,0]) );

//---------------------------------------------------------

//function with algorithem
function algorithemCombineArrays(arr1 , arr2 , arr3){
    let res = [] , k = 0 ;
    for(let i = 0; i < arr1.length; i++){
        res[k++] = arr1[i];
    }
    for(let i = 0; i < arr2.length; i++){
        res[k++] = arr2[i] ;
    }
    for(let i = 0; i < arr3.length; i++){
        res[k++] = arr3[i] ;
    }
    
    return res ;
}

//algoritm of sort

// function bubbleSort(arr){
//     for(let i = 1; i < arr.length ; i++){
//         for(let j = 0; j < arr.length - i; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp ;
//             }
//         }
//     }
// }

console.log( algorithemCombineArrays([1,2,3],[4,5,6],[9,8,7,0]) );
