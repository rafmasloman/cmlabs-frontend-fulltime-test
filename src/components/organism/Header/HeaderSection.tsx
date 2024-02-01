import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';
import { IHeaderSection } from './interfaces/HeaderInterface';

const HeaderSection = ({
  textLink,
  title,
  children,
  divider,
}: IHeaderSection) => {
  return (
    <>
      <div
        className={`flex ${
          !textLink ? 'flex-col' : 'flex-row'
        } md:flex-row justify-between ${
          !textLink ? 'items-start' : 'items-center'
        } lg:items-center`}
      >
        <h3 className="text-sm md:text-lg lg:text-xl font-medium">{title}</h3>

        {children}
      </div>

      {!divider ? null : (
        <div className="w-full h-[1px] bg-slate-300 my-8"></div>
      )}
    </>
  );
};

export default HeaderSection;
