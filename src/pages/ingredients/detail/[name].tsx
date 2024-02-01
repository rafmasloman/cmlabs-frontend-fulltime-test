import SEO from '@/components/atomic/SEO/SEO';
import MealsList from '@/components/molecul/List/MealsList';
import SearchInput from '@/components/molecul/SearchInput/SearchInput';
import HeaderNavbar from '@/components/organism/Header/HeaderNavbar';
import HeaderSection from '@/components/organism/Header/HeaderSection';
import MainLayout from '@/components/organism/Layouts/MainLayout';
import { useGetFilterIngredients } from '@/hooks/useGetFilterIngredients';
import InggredientsApiService from '@/services/IngredientsServices';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await InggredientsApiService.GetIngredientsQueryByFilter(
    context.params?.name! as string,
  );

  return { props: { response } };
};

const IngredientDetailPage = ({ response }: any) => {
  const { query } = useRouter();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    setMeals(response?.meals);
  }, [response]);

  const [searchValue, setSearchValue] = useState('');

  const handleOnSearch = (searchTerm: string) => {
    setSearchValue(searchTerm);
  };

  const filterMeasurement = response?.meals?.filter((ingredient: any) => {
    return ingredient.strMeal.toLowerCase().includes(searchValue.toLowerCase());
  });

  //   const filterIngredients = response?.meals?.filter((ingredient: any) => {
  //     return ingredient.strIngredient
  //       .toLowerCase()
  //       .includes(searchValue.toLowerCase());
  //   });

  return (
    <MainLayout>
      <SEO
        title={`${!query.name ? 'Loading...' : query.name} Foods`}
        description="Recipe Food Website"
        content=""
      >
        <meta name="og:title" content={`${query.name} All Food Varianst`} />
        <meta
          name="og:description"
          content={`${query.name}$ with all foods variants`}
        />
      </SEO>

      <HeaderNavbar />

      <div className="h-10"></div>

      <section className="container">
        <HeaderSection title={query.name as string} divider={true}>
          <SearchInput onSearch={handleOnSearch} />
        </HeaderSection>
      </section>

      <section className="container">
        <MealsList
          meals={!filterMeasurement?.length ? meals : filterMeasurement}
        />
      </section>
    </MainLayout>
  );
};

export default IngredientDetailPage;
