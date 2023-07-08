
let arr =[1,9,2,8,3,7,4,5]

function insertionSort(arr){
    for(i=1;i<arr.length;i++){
        let numtoinsert = arr[i]
        let j = i-1             //sort element
        while(j>=0 && arr[j]>numtoinsert){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = numtoinsert
    }
}
insertionSort(arr)
console.log(arr)


/* TIME COMPLEXITY : O(N^2) */