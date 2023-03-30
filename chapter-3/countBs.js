// function countB(myString){
//     let count = 0
//     // ! run a loop through all the chacters of the string and on every iteration compare if the character is B
//     for(i=0;i<myString.length;i++){
//         if(myString[i]==='B'){
//             count = count + 1
//         }
//     }
//     return count
// }


// console.log(countB("Breaking Bad"))



// ! this is the modofied version as asked in the chapter
function countB(myString,characterToCount){
    let count = 0
    // ! run a loop through all the chacters of the string and on every iteration compare if the character is B
    for(i=0;i<myString.length;i++){
        if(myString[i]===characterToCount){
            count = count + 1
        }
    }
    return count
}


console.log(countB("Myterious & Magical","a"))