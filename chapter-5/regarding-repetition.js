// ! the most basic for loop

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }



//   function repeatLog(n) {
//     for (let i = 0; i < n; i++) {
//       console.log(i);
//     }
//   }

// repeatLog(3) // ! this will print 0 1 2


// ! a very interesting function
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
  }

// repeat(7,console.log)


let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]