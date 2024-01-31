import React from 'react';
import { IBadgeTypesProps } from './interfaces/BadgeInterface';

type Props = {};

const Badge = ({ color, radius, variant, children }: IBadgeTypesProps) => {
  return (
    <div className={`px-4 py-2.5`}>
      <h3>{children}</h3>
    </div>
  );
};

export default Badge;
