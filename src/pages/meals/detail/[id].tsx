import MealsList from '@/components/molecul/List/MealsList';
import HeaderNavbar from '@/components/organism/Header/HeaderNavbar';
import MainLayout from '@/components/organism/Layouts/MainLayout';
import ThumbnailVideo from '@/components/organism/Thumbnail.tsx/ThumbnailVideo';
import { IQueryMealDetailDataResponse } from '@/interfaces/Meal';
import MealsApiService from '@/services/MealServices';
import { MealDetailSchema } from '@/utils/Schema';
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

  const response = await MealsApiService.GetMealDetailQueryApi(
    context.params?.id! as string,
  );

  return { props: { response } };
};

const IngredientDetailPage = ({ response }: any) => {
  const { query } = useRouter();
  const [meals, setMeals] =
    useState<IQueryMealDetailDataResponse>(MealDetailSchema);

  useEffect(() => {
    const meal = response?.meals.find((meal: IQueryMealDetailDataResponse) => {
      return meal;
    });

    setMeals(meal);
  }, [response]);

  return (
    <MainLayout>
      <HeaderNavbar />

      <div className="h-10"></div>

      <section className="container ">
        <ThumbnailVideo
          category={meals?.strCategory}
          instruction={meals?.strInstructions}
          thumbnail_img={meals?.strMealThumb}
          youtube_link={meals?.strYoutube}
          meal_name={meals?.strMeal}
          location={meals?.strArea}
        />
      </section>
    </MainLayout>
  );
};

export default IngredientDetailPage;
