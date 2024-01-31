import { ReactNode } from 'react';

export interface IButtonPropsTypes {
  type: 'submit' | 'button' | 'reset' | undefined;
  children: ReactNode;
  className?: string;
}
