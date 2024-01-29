import NavbarLink from '@/components/atomic/Navigation/NavbarLink';
import { NavigationRoutes } from '@/utils/NavigationRoutes';
import React from 'react';

const Navigation = () => {
  return (
    <ul>
      {NavigationRoutes.map((navItem) => {
        return (
          <NavbarLink
            key={navItem.id}
            href={navItem.href}
            text={navItem.text}
          />
        );
      })}
    </ul>
  );
};

export default Navigation;
