
// ! my naive approach and there are better ways of doing it.
// ! going to sleep. will see tomorrow about this.
function reverseArray(arr){
    const arrayLength = arr.length
    const arrayLastIndex = arrayLength - 1
    let newArray = []
   for(i=arrayLength-1;i>=0;i--){
    newArray.push(arrayToReverse[i])
   }
   return newArray
}
const arrayToReverse = [87,90,49,103,4023]

const reversedArray = reverseArray(arrayToReverse)

console.log(reversedArray)