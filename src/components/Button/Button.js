import React from 'react';

import './Button.css';

export const Button = (props) => {

  const { title, className, onClick } = props;

  return (
    <button onClick={onClick} className={"button " + className}>{title}</button>
  )
}

Button.defaultProps = {
  title: ":)",
  className: ""
}
