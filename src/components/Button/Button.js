import React from 'react';

export const Button = (props) => {

  const { title, className } = props;

  return (
    <button className={"button " + className}>{title}</button>
  )
}

Button.defaultProps = {
  title: ":)",
  className: ""
}
