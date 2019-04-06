export const appendPointToAdjacencyMatrix = (matrix) => {
  let result = [...matrix];

  result.forEach( row => {
    row.push(-1);
  });

  const newRow = Array(result.length + 1).fill(-1);

  newRow[result.length] = 1;

  result.push(newRow)

  return result;
}
