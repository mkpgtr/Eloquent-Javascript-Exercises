function countB(myString,characterToCount){
    // ! just pass the arguments down to countChars
    // ! return will return what countChars will return
    // ! it means countB will return whatever countChars gives it backed after computing
   return countChars(myString,characterToCount)
}


console.log(countB("Breaking Bad","B"))



// ! this is the modofied version as asked in the chapter
function countChars(myString,characterToCount){
    let count = 0
    // ! run a loop through all the chacters of the string and on every iteration compare if the character is B
    for(i=0;i<myString.length;i++){
        if(myString[i]===characterToCount){
            count = count + 1
        }
    }
    return count
}


