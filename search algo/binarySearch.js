let arr = [1,2,3,4,5,6,7,8,9,10];

function binarySearch(arr,n){
    let start = 0
    let end = arr.length-1

    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(arr[mid]==n) return mid
        if(arr[mid]>n) end = mid-1
        else start = mid+1
    }

    return -1   //when no match found

}

console.log(binarySearch(arr,6))

/* time complexity O(logN) */