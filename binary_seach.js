let arr = [1,2,3,4,5,6,7,8,9,10];
let target = 2


function bin_search(arr,target){
let first = 0
let last = arr.length-1

while(first<=last){
    let mid = first + Math.floor((last-first)/2)
    if(arr[mid] == target) return mid
    else if(arr[mid] > target) last = mid-1
    else
     first = mid+1
}}


console.log(bin_search(arr,6))