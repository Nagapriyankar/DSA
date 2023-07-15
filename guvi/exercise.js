function naturalNo(n){
    if(n==0) return
    console.log(n)
    naturalNo(n-1)
}


function naturalNo2(n){
    if(n==0) return
    naturalNo2(n-1)
    console.log(n)
    
}

naturalNo2(5)