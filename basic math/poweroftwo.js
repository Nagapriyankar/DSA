function powerOfTwo(n){
    /* Time compleity  O(log n) */
    if(n<1) return false
    while(n>1){
        if(n%2!=0) return false
        else n=n/2
    }
    return true
}


function isPowerOfTwoBitwise(n){
    /* Time compleity  O(1) */
    if(n<1) return false
    return (n &  (n-1)) === 0
}


console.log(powerOfTwo(8))
console.log(isPowerOfTwoBitwise(8))
console.log(isPowerOfTwoBitwise(10))
console.log(powerOfTwo(10))