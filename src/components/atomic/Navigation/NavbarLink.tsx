import React from 'react';
import { INavbarListPropsTypes } from './interfaces/NavbarLink.interface';
import Link from 'next/link';

const NavbarLink = ({ href, text }: INavbarListPropsTypes) => {
  return (
    <Link href={href}>
      <p>{text}</p>
    </Link>
  );
};

export default NavbarLink;
