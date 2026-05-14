"use strict";

function isPrime (n) {
    for(let i=2;i<n;i++){
        if(n%i==0){
            console.log("false");
            break;
        }

        if(i==n-1){
            console.log("true");
        }
    }
    
}
isPrime(33);