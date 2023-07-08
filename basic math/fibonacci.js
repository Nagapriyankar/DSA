let n = 6     /// [0,1,1,2,3,5....]
function fibonacci(n){
  const f = [0,1]
    for(i=2;i<=n;i++){
        f[i] = f[i-1]+f[i-2]
    }
    return f
}


let result = fibonacci(n)
console.log(result)

/*  Time complexity  O(n) */