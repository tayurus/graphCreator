import React from 'react';


export const Point = props => {

  const { point, onClick } = props;

  return (
    <React.Fragment>
      <circle data-text={point.text} onClick={onClick} cx={point.x} cy={point.y} r='25' fill='#ccc' stroke="tomato" strokeWidth='2'/>
      <text data-text={point.text} onClick={onClick} x={point.x - 5} y={point.y + 5} stroke="red" strokeWidth='2'>{point.text}</text>
    </React.Fragment>
  )
}
