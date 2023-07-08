let arr =[1,9,2,8,3,7,4,5]

function BubbleSortASC(arr){
let swapped 
    do {
        swapped = false
        for(i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            swapped = true
        }
    }
}while(swapped)
return arr
}

function BubbleSortDES(arr){
    let swapped 
        do {
            swapped = false
            for(i=0;i<arr.length-1;i++){
            if(arr[i]<arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)
    return arr
    }

console.log(BubbleSortASC(arr))
console.log(BubbleSortDES(arr))


/* TIME COMPLEXITY : O(N)
    basic idea is swap
*/