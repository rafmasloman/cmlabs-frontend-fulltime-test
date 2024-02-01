import React, { useEffect, useState } from 'react';
import { IIngredientsListDataResponse } from './interfaces/IngredientListInterface';
import { IQueryMealDataResponse } from '@/interfaces/Meal';
import { useGetFilterIngredients } from '@/hooks/useGetFilterIngredients';
import { API_UTILS } from '@/utils/API';
import Card from '@/components/molecul/Card/Card';
import dynamic from 'next/dynamic';
import CardLoading from '../Loading/CardLoading';

type Props = {};

const CardIngredient = dynamic(() => import('@/components/molecul/Card/Card'), {
  loading: () => <CardLoading />,
});

const IngredientsList = ({ meals }: IIngredientsListDataResponse) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-x-20 lg:gap-y-10 md:justify-items-center">
      {meals?.map((meal: IQueryMealDataResponse) => {
        return (
          <CardIngredient
            key={meal.idIngredient}
            id={meal.idIngredient}
            name={meal.strIngredient}
            description={meal.strDescription}
            imgUrl={`${API_UTILS.IMAGE_THUMBNAIL_ENDPOINT}/${meal.strIngredient}.png`}
            href={`/ingredients/detail/${meal.strIngredient}`}
          />
        );
      })}
    </div>
  );
};

export default IngredientsList;
