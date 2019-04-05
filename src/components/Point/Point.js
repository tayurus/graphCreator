import React from 'react';


export const Point = props => {

  const { point } = props;

  return (
    <React.Fragment>
      <circle cx={point.x} cy={point.y} r='25' fill='none' stroke="tomato" stroke-width='2'/>
      <text x={point.x - 5} y={point.y + 5} stroke="red" stroke-width='2'>{point.text}</text>
    </React.Fragment>
  )
}
