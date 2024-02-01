import IngredientsList from '@/components/molecul/List/IngredientList';
import SearchInput from '@/components/molecul/SearchInput/SearchInput';
import HeaderNavbar from '@/components/organism/Header/HeaderNavbar';
import HeaderSection from '@/components/organism/Header/HeaderSection';
import MainLayout from '@/components/organism/Layouts/MainLayout';
import { useGetIngredientsList } from '@/hooks/useGetIngredientsList';
import { useSearch } from '@/hooks/useSearch';
import dynamic from 'next/dynamic';
import React, { ChangeEvent, FormEvent, useState } from 'react';

type Props = {};

const IngredientsPage = (props: Props) => {
  const { ingredientsList } = useGetIngredientsList();

  const [searchValue, setSearchValue] = useState('');

  const handleOnSearch = (searchTerm: string) => {
    setSearchValue(searchTerm);
  };

  const filterIngredients = ingredientsList?.meals?.filter(
    (ingredient: any) => {
      return ingredient.strIngredient
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    },
  );

  return (
    <MainLayout>
      <HeaderNavbar />

      <section className="container">
        <div className="my-7"></div>

        <HeaderSection title={'All List Ingredients'} divider={true}>
          <SearchInput onSearch={handleOnSearch} />
        </HeaderSection>

        <div className="my-7"></div>

        <p className="text-xs md:text-base text-gray-400">
          ({filterIngredients?.length}) Ingredients Items Found
        </p>

        <div className="my-7"></div>

        <IngredientsList
          meals={
            !filterIngredients?.length
              ? ingredientsList?.meals
              : filterIngredients
          }
        />
      </section>
    </MainLayout>
  );
};

export default IngredientsPage;
