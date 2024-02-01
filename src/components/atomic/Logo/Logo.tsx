import RecipeIconLogo from '@/assets/icons/RecipeIcon';
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <RecipeIconLogo width="32" height="32" />
      <h4 className="font-semibold text-2xl">MealForYu</h4>
    </div>
  );
};

export default Logo;
