import React from 'react';

export const AdjacencyMatrix = props => {

  const { matrix } = props;

  return (
    <table className="adjacencyMatrix">
      <tbody>
        {matrix.map( (row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {row.map( (item, itemIndex) => <td key={itemIndex}>{item}</td>)}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
