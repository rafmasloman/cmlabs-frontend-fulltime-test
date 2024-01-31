import NavbarLink from '@/components/atomic/Navigation/NavbarLink';
import { NavigationRoutes } from '@/utils/NavigationRoutes';
import React from 'react';
import { INavigationPropsTypes } from './interfaces/NavigationInterface';
import { useRouter } from 'next/router';

const Navigation = ({ isActive }: INavigationPropsTypes) => {
  return (
    <ul
      className={`lg:flex ${
        !isActive
          ? 'hidden md:flex'
          : 'h-screen flex flex-col items-center justify-evenly '
      }`}
    >
      {NavigationRoutes.map((navItem) => {
        return (
          <li
            key={navItem.id}
            className={`my-5 text-xl border-solid border-b-[3px] border-transparent hover:border-secondary-color lg:my-0 md:mx-7 md:text-base`}
          >
            <NavbarLink href={navItem.href} text={navItem.text} />
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
