
// function shuffle(array) {
//     var tmp, current, top = array.length;
//     if(top) while(--top) {
//       current = Math.floor(Math.random() * (top + 1));
//       tmp = array[current];
//       array[current] = array[top];
//       array[top] = tmp;
//     }
//     return array;
//   }



//   const randomArray = (length, max) => [...new Array(length)]
//   .map(() => Math.round(Math.random() * max));

const myArray = [ 37, 58, 98, 19, 92]

  
console.log(myArray)
// ! lastIndex of searches backwards



function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}



console.log(remove(myArray,2))