let arr = [1,3,7,3,9,5,8,6,0]

function quickSortAsc(arr){
    if(arr.length < 2) return arr     //stoping condition

    let pivot = arr[arr.length-1]
    let left = []
    let right =[]

    for(i=0;i<arr.length-1;i++){
        if(arr[i]>pivot) right.push(arr[i])
        else left.push(arr[i])
    }
    return [...quickSortAsc(left), pivot, ...quickSortAsc(right)]
}


function quickSortDec(arr){
    if(arr.length < 2) return arr     //stoping condition

    let pivot = arr[arr.length-1]
    let left = []
    let right =[]

    for(i=0;i<arr.length-1;i++){
        if(arr[i]<pivot) right.push(arr[i])
        else left.push(arr[i])
    }
    return [...quickSortDec(left), pivot, ...quickSortDec(right)]
}

console.log(quickSortDec(arr))
console.log(quickSortAsc(arr))


/* 
time complexity
    worst case : O(n^2)
    avg case : O(nlogn)
*/
