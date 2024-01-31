import MealsList from '@/components/molecul/List/MealsList';
import HeaderNavbar from '@/components/organism/Header/HeaderNavbar';
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
  console.log(context);

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

  return (
    <MainLayout>
      <HeaderNavbar />

      <div className="h-10"></div>

      <section className="container">
        <div>
          <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold">
            {query.name}
          </h1>
        </div>

        <div className="w-full h-[1.5px] bg-slate-300 my-5"></div>
        <MealsList meals={meals} />
      </section>
    </MainLayout>
  );
};

export default IngredientDetailPage;
