
// You should implement your task here.

function towelSort (matrix) {
  
  for (i=0; i<matrix.length && matrix[i].length>1; i++) {
    if (i%2 !== 0) {
      matrix[i].reverse();
    } 
  }
  return matrix.join().split(',').map(Number);
  
  }


/*
towelSort function should expect matrix of any shape for example:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ],
]
Following matrix should be 'sorted' to:

 [1, 2, 3, 6, 5, 4, 7, 8, 9 ]

*/



module.exports = function towelSort (matrix) {
  return [];
}
