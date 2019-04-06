import React from 'react';
import './AdjacencyMatrix.css'
export const AdjacencyMatrix = props => {

  const { matrix } = props;

  const thRow = new Array(matrix.length).fill(0);
  return (
    <table className="adjacencyMatrix">
      <thead>
        <tr>
          <th></th>
          {thRow.map( (item, itemIndex) => <th>{itemIndex}</th>)}
        </tr>
      </thead>

      <tbody>
        {matrix.map( (row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              <td style={{'fontWeight':'bold'}}>{rowIndex}</td>
              {row.map( (item, itemIndex) => <td key={itemIndex}>{item}</td>)}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
