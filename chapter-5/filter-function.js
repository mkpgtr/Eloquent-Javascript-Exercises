const numbers = [1,54,339,30,29,108,120]

function filter(array,test){
    let filteredNumbers = []

    for(let element of numbers){
        // ! this test(element) means that the function takes an element and checks the element against the condition written inside
        if(test(element)){
            filteredNumbers.push(element)
        }
    }

    return filteredNumbers
}
// ! return all numbers greater than 100 that are even numbers
console.log(filter(numbers,number=>number > 100 && number %2 ===0));


// ! alternate syntax that does the same thing
// ! yeh mereko jyaada clear lagta h
console.log(filter(numbers,function(number){
    return number>100 && number%2==0
}));