import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';
import { IHeaderSection } from './interfaces/HeaderInterface';

const HeaderSection = ({ textLink, title, children }: IHeaderSection) => {
  return (
    <div className="flex justify-between items-center">
      <h3 className="text-sm md:text-lg lg:text-xl font-medium">{title}</h3>

      {children}
    </div>
  );
};

export default HeaderSection;
