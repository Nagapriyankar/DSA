let arr = [1,2,3,4,5,6,7,8,9,10]

function recBinarySearch(arr,n){ 
    return search(arr, n, 0, arr.length-1)
}

function search(arr,target,start,end){

    let mid = Math.floor((start+end)/2)

    if(target === arr[mid]) return mid
    if(target > arr[mid]) return search(arr, target, mid+1, end)
    else return search(arr, target, start, mid-1)
}
/* time complexity O(logN) */

console.log(recBinarySearch(arr,7))