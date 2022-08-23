// bonacci.js is for implementing fibonacci according to TDD
// Checks if a symbol (element) is in a string

function contains(string, element){
    for(i=0, l=string.length; i<l; i++){
        if (string[i] == element){
            return true;
        }
        return false;
    }
}

// checks to see if a period is in the string but could accomodate more symbols.
function verify_string(string){
    SYMBOLS = ['.']
    for (i=0, j=SYMBOLS.length; i<j; i++){
        if (contains(string, SYMBOLS[i])){return false;}
    }
    return true;
}


function fib(n){
    if (typeof n != 'number'){
        throw 'NaN'
    }
    if(!verify_string(String(n))){
        throw 'Integers only, please.'
    }
    if(n<2){
        return (n==1 ? 1 : 0);
    }
    else{
        return fib(n-1) + fib(n-2)
    }
}



module.exports.fib = fib
module.exports.contains = contains
module.exports.verify_string = verify_string
