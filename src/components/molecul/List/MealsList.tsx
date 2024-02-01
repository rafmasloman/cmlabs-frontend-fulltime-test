import React, { useEffect, useState } from 'react';
import { IIngredientsListDataResponse } from './interfaces/IngredientListInterface';
import {
  IQueryMealByFilterDataResponse,
  IQueryMealDataResponse,
} from '@/interfaces/Meal';
import { IMealsListPropsTypes } from './interfaces/MealsList.interface';
import { useRouter } from 'next/router';
import CardImage from '../Card/CardImage';
import dynamic from 'next/dynamic';
import CardLoading from '../Loading/CardLoading';

const CardMeals = dynamic(() => import('@/components/molecul/Card/CardImage'), {
  loading: () => <CardLoading />,
});

const MealsList = ({ meals }: IMealsListPropsTypes) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-x-20 lg:gap-y-10 md:justify-items-center">
      {meals?.map((meal: IQueryMealByFilterDataResponse) => {
        return (
          <CardMeals
            key={meal.idMeal}
            id={meal.idMeal}
            name={meal.strMeal}
            imgUrl={meal.strMealThumb}
            href={`/meals/detail/${meal.idMeal}`}
          />
        );
      })}
    </div>
  );
};

export default MealsList;
