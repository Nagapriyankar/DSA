let arr = [0,1,2,3,4,5,6,7,8,10]

function findElementinArr(arr,n){
    for(let i in arr){
        if(arr[i] === n)
        return i
    }
    return -1
}


/* Time complexity O(N) */

console.log(findElementinArr(arr,5))
console.log(findElementinArr(arr,10))
console.log(findElementinArr(arr,20))