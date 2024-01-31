import React from 'react';
import { IButtonPropsTypes } from './Button.interfaces';

const Button = ({ type, children, className }: IButtonPropsTypes) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
