let n = 5   
// 5*4*3*2*1 = 120
//fact of 0 is 0
function factorial(n){
    let res = 1
   /*  for(i=n;i>0;i--){
         res = res * i
    } */
    for(i=2;i<=n;i++){
        res = res * i
   } 
    return res
}

if(n==0 || n==1) console.log(n)
else  console.log(factorial(n))


/* time complexity: O(N) */