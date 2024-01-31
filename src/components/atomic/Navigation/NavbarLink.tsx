import React from 'react';
import { INavbarListPropsTypes } from './interfaces/NavbarLink.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavbarLink = ({ href, text }: INavbarListPropsTypes) => {
  const { pathname } = useRouter();

  const isLinkActive =
    text?.toLowerCase() === 'home'
      ? pathname == '/'
      : pathname.includes(text.toLowerCase());

  return (
    <Link href={href}>
      <p
        className={`${
          isLinkActive ? 'text-primary-color font-medium' : 'text-black'
        }`}
      >
        {text}
      </p>
    </Link>
  );
};

export default NavbarLink;
