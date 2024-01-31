import { poppins } from '@/utils/Font';
import React from 'react';
import { IMainLayotPropsTypes } from './interfaces/MainLayoutInterfaces';

const MainLayout = ({ children }: IMainLayotPropsTypes) => {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between px-6 py-10 md:px-16 md:py-10 lg:px-24   ${poppins.className}`}
      >
        {children}
      </main>
    </>
  );
};

export default MainLayout;
