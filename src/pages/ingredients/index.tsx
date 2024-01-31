import IngredientsList from '@/components/molecul/List/IngredientList';
import HeaderNavbar from '@/components/organism/Header/HeaderNavbar';
import HeaderSection from '@/components/organism/Header/HeaderSection';
import MainLayout from '@/components/organism/Layouts/MainLayout';
import { useGetIngredientsList } from '@/hooks/useGetIngredientsList';
import { useSearch } from '@/hooks/useSearch';
import React, { ChangeEvent, FormEvent, useState } from 'react';

type Props = {};

const IngredientsPage = (props: Props) => {
  const { ingredientsList } = useGetIngredientsList();

  const { searchValue, handleSearchChange } = useSearch();
  const [ingredientListName, setIngredientListName] = useState([]);

  const handleOnSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filterIngredients = ingredientsList?.meals?.filter(
      (ingredient: any) => {
        return ingredient.strIngredient
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      },
    );

    setIngredientListName(filterIngredients);
  };

  console.log('filter ingredients : ', ingredientListName);
  return (
    <MainLayout>
      <HeaderNavbar />

      <section className="container">
        <div className="my-7"></div>

        <HeaderSection title={'All List Ingredients'} textLink="Lihat Semua">
          <form onSubmit={handleOnSearch}>
            <input
              placeholder="Cari Ingredients"
              value={searchValue}
              onChange={handleSearchChange}
            />

            <button type="submit">Cari</button>
          </form>
        </HeaderSection>

        <div className="my-7"></div>
        <IngredientsList
          meals={
            !ingredientListName.length
              ? ingredientsList?.meals
              : ingredientListName
          }
        />
      </section>
    </MainLayout>
  );
};

export default IngredientsPage;
