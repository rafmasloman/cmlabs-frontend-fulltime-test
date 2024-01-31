import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';
import { IHeaderSection } from './interfaces/HeaderInterface';

const HeaderSection = ({ textLink, title, href }: IHeaderSection) => {
  return (
    <div className="flex justify-between items-center">
      <h3 className="text-sm md:text-lg lg:text-xl font-medium">{title}</h3>
      <div className="space-x-1 md:space-x-3 flex items-center bg-primary-color px-2.5 py-2 md:px-3.5 rounded-full">
        <Link
          href={!href ? '/' : href}
          className="text-xs md:text-sm text-white"
        >
          {textLink}
        </Link>

        <div className="p-1 md:p-2 bg-white rounded-full">
          <IconArrowRight className="text-sm text-black " size={16} />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
