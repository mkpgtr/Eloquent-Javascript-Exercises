function range(start,end){

    const listOfNumbers = []
// ! run a simple for loop that starts with start and ends with end+1 
// !end+1 is because we are using less than operator
// ! one every count push i into the listOfNumbersArray
// ! in the end, return the list of numbers
    for(i=start;i<end+1;i++){
      listOfNumbers.push(i)
    }

    return listOfNumbers
}

// ! this is very simple function to calculate the sum of every number in an array.
// ! on every iteration we add the current total to already existing total
// ! in the end return the sum
function sum(arrayOfNumbers){
    let sum = 0
    for(i=0;i<arrayOfNumbers.length;i++){
        sum+=arrayOfNumbers[i]
    }
    return sum
}
// ! range will return [1,2,3,4,5,6,7,8,9,10]
// ! sum will return 55
console.log(sum(range(1,100))) // ! this will 5050
console.log(sum(range(1,8))) // ! this will 36