let arr = [1]
let target = 1

function recursive_binary_search(arr,target){
if(arr.length  === 0) return false
else mid = Math.floor(arr.length/2)
if (arr.length === 1 && arr[0] != target) return false;
if(arr[mid] == target) return true
else if(arr[mid] < target) return recursive_binary_search(arr.slice(mid),target)
else return recursive_binary_search(arr.slice(0,mid),target)
}


console.log(recursive_binary_search(arr,target))