function primefind(n){
    if(n<2)
    return false
    for(i=2;i<n;i++){
        if(n%i === 0) return false
    }
    return true
}    

function primeoptimized(n){
    //to check till square root of the number
    //for any integer , out of two factor, one will always be less than or equal squareroot of that integer
    //O(sqrt(n))
    if(n<2)
    return false
    for(i=2;i<=Math.sqrt(n);i++){
        if(n%i === 0) return false
    }
    return true
}

console.log(primefind(10))
console.log(primefind(0))
console.log(primefind(1))
console.log(primefind(17))
console.log(primeoptimized(17))
console.log(primeoptimized(179))
