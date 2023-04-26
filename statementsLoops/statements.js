function integers(a,b){
    if (a > b){
        console.log(a)
    }
    else if (b > a){
        console.log(b)
    }
    else if(a == b){
        console.log(`${a} and ${b} are equal.`)
    }
    else{
        console.log(`Integers are invalid`)
    }
}

integers(1,5)


function evenOrOdd(num){
    if (num%2 == 0){
        console.log(`${num} is an even number.`)
    }
    else{
        console.log(`${num} is an odd number.`)
    }
}

evenOrOdd(10)