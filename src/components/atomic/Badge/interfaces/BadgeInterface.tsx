import { ReactNode } from 'react';

export interface IBadgeTypesProps {
  color: string;
  variant: 'filled' | 'outline';
  radius: string;
  children: ReactNode;
}
