let arr = [8, 20, -2, 4, -6, 1]

function splitArray(arr){
    if(arr.length<2) return arr

    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)
    return mergeArray(splitArray(right), splitArray(left))
}

function mergeArray(leftArr, rightArr){

    const sortedArr = []
    while(rightArr.length && leftArr.length){
         if(leftArr[0]<=rightArr[0]) sortedArr.push(leftArr.shift())
        else sortedArr.push(rightArr.shift())
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}


console.log(splitArray(arr))