import React from 'react';
import { IButtonPropsTypes } from './Button.interfaces';

const Button = ({ text }: IButtonPropsTypes) => {
  return <button>{text}</button>;
};

export default Button;
