function recFibonacci(n){
if(n<2) return n
return recFibonacci(n-1) + recFibonacci(n-2)
}

console.log(recFibonacci(6))
/* 
f(5)  > f(4)+f(3)       RETURN 3+2=5
    *f(4) > f(3)+f(2)        RETURN 2+1=3
        -f(3) > f(2)+f(1)    RETURN 1+1=2
            f(2) > f(1)+f(0) RETURN 1
        -f(2) > f(1)+f(0)    RETURN 1
    *f(3) > f(2)+f(1)        RETURN 1+1=2
        f(2) > f(1)+f(0)     RETURN 1

*/
/* 
TIME COMPLEXITY
iterative  is O(N)
recursive is O(2^N)
so recursive is not good practice in fibonacci
*/