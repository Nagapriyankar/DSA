let n =5

/*     *    
      ***
     *****
    *******    
   ********* 
    space   star    space
0   4       1       4           n-i-1, 2*i+1 ,n-i-1
1   3       3       3
2   2       5       2
3   1       7       1
4   0       9       0
*/

function print1(n){
    for(i=0;i<n;i++){ 
    let str = ''
      for(let j=0;j<n-i-1;j++){
        str += " " 
      }
      for(j=0;j<2*i+1;j++){
        str += "*"
      }
      for(let j=0;j<n-i-1;j++){
        str += " "
      }  
                
      console.log(str)
    }
}
/*               star  i     space   star
   *********      9   4     4-4     2*4+1
   s*******s      7   3     4-3     2*3+1
   ss*****ss      5   2     4-2
   sss***sss      3   1     4-1
   ssss*ssss      1   0     n-i     n*i+1

FOORMULA = 2N - (2i+1)  , 10-1, 10-3, 10-5

   for(i=4;i>=0;i--){
    for(j=0;j<4-i;j++){}
   }
 */


function print2(n){
    for(i=n-1;i>=0;i--){ 
    let str = ''
      for(let j=0;j<n-1-i;j++){
        str += " " 
      }
      for(let j=0;j<2*i+1;j++){
        str += "*" 
      }
      for(let j=0;j<n-1-i;j++){
        str += " " 
      }
                
      console.log(str)
    }
}

function print2a(n){
    for(i=0;i<n;i++){
        let str = ""
        for(j=0;j<i;j++){
            str += " "
        }
        for(j=0;j<2*n-(2*i+1);j++){
            str += "*"
        }
        for(j=0;j<i;j++){
            str += " "
        }
        console.log(str)
    }
}

/* 
*
**
***
****
*****
****
***
**
*

rows    stars 
1       1   i
2       2   i
3       3
4       4
5       5   i
6       4   10-6 
7       3   10-7
8       2   10-8
9-2n-1  1   2n-i

*/

function print3(n){
    for(i=1;i<2*n-1;i++){
        let str = ""
        let stars = i
        if(i>n) stars = 2*n-i
        for(j=1;j<stars;j++){
            str += '*'
        }
        console.log(str)
    }
}
/* 
1
01          str = 1 - 1 = 0    
101         str = 1 - 0 = 1    logic to flip 0 and 1
0101
10101
*/
function print4(n){
    for(i=0;i<n;i++){
        let str = ""
        let start
        if(i%2) start = 1
        else start = 0
        for(j=0;j<=i;j++){
            str += start+" "
            start = 1 - start
        }
        console.log(str)
    }
}

/* 
1      1
12    21
123  321
12344321 

row   num space num   spaceformula: 

1      1    6   1           
2      2    4   2           
3      3    2   3
4      4    0   4   


*/

function print5(n){
    let space = 2*(n-1)
    for(let i=1;i<=n;i++){
        let str = '';
        for(let j=1;j<=i;j++){
            str += j
        }
        for(j=1;j<=space;j++){
            str += " "
        }
        for(let k=i;k>0;k--){
            str += k
        }
        console.log(str)
        space -= 2
    }
}

function print6(n){
    let s = 1;
    for(i=1;i<=n;i++){
        let str = ''
        for(j=1;j<=i;j++){
            str += s+" "
            s++
        }  
        console.log(str)
        
    }
}

function print7(n){
    for(i=0;i<n;i++){
        let str = ''
        for(j=65;j<=65+i;j++){
            str += String.fromCharCode(j)
        }
        console.log(str)
    }
}

function print8(n){
    for(i=0;i<n;i++){
        let str = '';
        for(j=65;j<65+n-i;j++){
            str += String.fromCharCode(j)
        }
        console.log(str)
    }
}

function print9(n){
    for(i=0;i<n;i++){
        let str = ''
        let al = 65 + i
        for(j=0;j<=i;j++){
            str += String.fromCharCode(al)
        }
        console.log(str)
    }
}

/* 
    A   
   ABA
  ABCBA
 ABCDCBA

row     0 1 2 3 4 
        1 2 3 4 5


space   4 3 2 1 0 
alpha   1 3 5 7 9
space   4 3 2 1 0  
*/

function print10(n){
    for(i=1;i<=n;i++){
        let str = ""
        for(j=1;j<n-i+1;j++){
            str += " "
        }
        let ch = 65
        for(j=1;j<=2*i-1;j++){
            str += String.fromCharCode(ch)
            if(j < 2*i/2) ch = ch+1
            else ch=ch-1
        }

        for(j=1;j<n-i+1;j++){
            str += " "
        }

        console.log(str)
    }

}


function print11(n){
    for(i=1;i<=n;i++){
        let str = ''
        let ch = 70-i
        for(j=1;j<=i;j++){
            str += String.fromCharCode(ch) 
            ch = ch+1
        }
        console.log(str)
    }
}

/* 
**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********

star(n-i) space(2i) space 
5 0 5
4 2 4
3 4 3
2 6 2
1 8 1

star    1 2 3 4 5
space   8 6 4 2 0
star    1 2 3 4 5
*/

function print12(n){
    for(i=0;i<n;i++){
        let str = ''
        for(j=0;j<n-i;j++){
            str += '*'
        }
        for(j=0;j<2*i;j++){
            str += ' '
        }
        for(j=0;j<n-i;j++){
            str += '*'
        }
        console.log(str)
    } 
}
function print12a(n){
    for(i=0;i<n;i++){
        let str = ''
        for(j=0;j<=i;j++){
            str += '*'
        }
        for(j=0;j<2*(n-i-1);j++){
            str += ' '
        }
        for(j=0;j<=i;j++){
            str += '*'
        } 
        console.log(str)
    } 
}
print12(5)
//print12a(5) 

