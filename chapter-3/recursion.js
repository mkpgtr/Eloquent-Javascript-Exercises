
function isEven(number){
    // ! lets say we input 2, we will get 0. so now we know that 2 is even
    if(number-2==0){
        return true
    }
    // ! let's say we input 1 we will get -1, so we now know that 1 is odd
    if(number-2<0){
        return false
    }
    // ! suppose we enter 4, we will get 2 after subtracting 2. now because we are not getting zero, we will try to reach zero anyway.
    // ! and because this is a recursion problem, I instantly figured out that to reach zero, I must do something repeatedly using the same function isEven
    // ! so to make 4 reach 0, we should call isEven on 4 .....   2 times. right?
    // ! and then if the number is zero then the number which was first entered(i.e. 4) is also even
    if(number-2!==0){
        return isEven(number-2)
    }
}

const isTwoEven = isEven(12)
console.log(isTwoEven)