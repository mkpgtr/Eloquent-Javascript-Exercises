
// ! simple function that takes two numbers
// ! if both comparisons fail, it means number is equal
function getMinimum(number_one,number_two){
    if(number_one < number_two){
        return number_one
    }
    else if(number_two < number_one){
        return number_two
    }else{
        return "Both numbers are equal"
    }
}

const minimumNumber = getMinimum(9,100)
