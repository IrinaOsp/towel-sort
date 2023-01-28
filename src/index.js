// You should implement your task here.
module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length===0) {
    return [];
  }
  for (i=0; i<matrix.length && matrix[i].length>1; i++) {
    if (i%2 !== 0) {
      matrix[i].reverse();
    } 
  }
  return matrix.join().split(',').map(Number);
  
}
