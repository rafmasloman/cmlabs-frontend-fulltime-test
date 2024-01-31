import Navigation from '@/components/molecul/Navigation/Navigation';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useState } from 'react';

const HeaderNavbar = () => {
  const [isNavigationActive, setisNavigationActive] = useState(false);

  const handleShowNavigation = () => {
    setisNavigationActive(!isNavigationActive);
  };

  return (
    <section
      className={`container w-full   ${
        !isNavigationActive ? ' h-fit ' : 'h-screen '
      } md:flex md:p-0 items-center justify-between `}
    >
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-2xl">MealForYu</h4>
        {!isNavigationActive ? (
          <IconMenu2
            className="block md:hidden"
            size={30}
            onClick={handleShowNavigation}
          />
        ) : (
          <IconX
            className="block md:hidden"
            size={30}
            onClick={handleShowNavigation}
          />
        )}
      </div>

      <Navigation isActive={isNavigationActive} />
    </section>
  );
};

export default HeaderNavbar;
