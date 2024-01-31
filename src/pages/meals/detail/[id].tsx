import MealsList from '@/components/molecul/List/MealsList';
import HeaderNavbar from '@/components/organism/Header/HeaderNavbar';
import MainLayout from '@/components/organism/Layouts/MainLayout';
import ThumbnailVideo from '@/components/organism/Thumbnail.tsx/ThumbnailVideo';
import { IQueryMealDetailDataResponse } from '@/interfaces/Meal';
import MealsApiService from '@/services/MealServices';
import { mergeIngredients, mergeMeasurements } from '@/utils/Common';
import { MealDetailSchema } from '@/utils/Schema';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
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
  const [meals, setMeals] = useState<any>(MealDetailSchema);

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const meal = response?.meals.find((meal: IQueryMealDetailDataResponse) => {
      return meal;
    });

    setMeals(meal);
  }, [response]);

  console.log(meals?.strYoutube.replace('watch?', 'embed/'));

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

      <div className="h-16"></div>

      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <Image
              src={meals?.strMealThumb}
              width={500}
              height={500}
              alt={meals?.strMeal}
              className="rounded-2xl w-full"
              priority={true}
            />
          </div>

          <div className="col-span-2">
            <article>
              <p className="text-justify">{meals?.strInstructions}</p>

              <div className="h-4"></div>

              <div className="grid grid-cols-3">
                <p className="col-span-1">Ingredients</p>

                <div className="col-span-2 grid grid-cols-3 gap-x-10 gap-y-2.5">
                  {mergeIngredients(meals).map(
                    (ingredient: string, index: number) => {
                      return <p key={index}>{ingredient}</p>;
                    },
                  )}
                </div>
              </div>

              <div className="h-4"></div>

              <div className="grid grid-cols-3">
                <p className="col-span-1">Measurements</p>

                <div className="col-span-2 grid grid-cols-3 gap-x-10 gap-y-2.5">
                  {mergeMeasurements(meals).map(
                    (ingredient: string, index: number) => {
                      return <p key={index}>{ingredient}</p>;
                    },
                  )}
                </div>
              </div>

              <div className="h-4"></div>

              <div className="grid grid-cols-3">
                <p className="col-span-1">Link Sumber</p>

                <Link
                  href={meals?.strSource || '/'}
                  className="col-span-2 underline text-violet-800"
                  target="_blank"
                >
                  Jump to Link
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="h-16"></div>

      <section className="container">
        <iframe
          src={meals?.strYoutube.replace('watch?v=', 'embed/')}
          className="w-full aspect-video"
          allowFullScreen
        ></iframe>
      </section>
    </MainLayout>
  );
};

export default IngredientDetailPage;
