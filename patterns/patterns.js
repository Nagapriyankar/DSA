let n = 5;
let s = "";
function print1(n){
    for(let i=0;i<n;i++){
        let s = "";
        for(let j=0;j<n;j++){
            s += '* '
        }
        console.log(s)
    }
}

function print2(n){
    for(let i=0;i<n;i++){
        let s = "";
        for(let j=0;j<=i;j++){
            s += '* '
        }
        console.log(s)
    }
}

function print3(n){
    for(let i=0;i<n;i++){
        let s = "";
        for(let j=0;j<=i;j++){
            s += `${j+1} `
        }
        console.log(s)
    }
}

function print4(n){
    for(let i=0;i<n;i++){
        let s = "";
        for(let j=0;j<=i;j++){
            s += `${i+1} `
        }
        console.log(s)
    }
}

function print5(n){
    for(let i=0;i<n;i++){
        let s = "";
        for(let j=i;j<n;j++){
            s += `* `
        }
        console.log(s)
    }
}

function print6(n){
    for(let i=0;i<n;i++){
        let s = "";
        for(let j=1;j<n-i+1;j++){
            s += `* `
        }
        console.log(s)
    }
}

function print6(n){
    for(let i=0;i<n;i++){
        let s = "";
        for(let j=1;j<n-i+1;j++){
            s += `* `
        }
        console.log(s)
    }
}

print6(n)

