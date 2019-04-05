export const appendPointToAdjacencyMatrix = (matrix) => {
  let result = [...matrix];

  result.forEach( row => {
    row.push(0);
  });

  const newRow = Array(result.length + 1).fill(0);

  newRow[result.length] = 1;

  result.push(newRow)

  return result;
}
