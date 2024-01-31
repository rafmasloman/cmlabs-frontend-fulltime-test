import MealsList from '@/components/molecul/List/MealsList';
import HeaderNavbar from '@/components/organism/Header/HeaderNavbar';
import MainLayout from '@/components/organism/Layouts/MainLayout';
import ThumbnailVideo from '@/components/organism/Thumbnail.tsx/ThumbnailVideo';
import { IQueryMealDetailDataResponse } from '@/interfaces/Meal';
import MealsApiService from '@/services/MealServices';
import { mergeIngredients, mergeMeasurements } from '@/utils/Common';
import { MealDetailSchema } from '@/utils/Schema';
import {
  IconCategory,
  IconCategory2,
  IconCategoryPlus,
  IconLink,
  IconMapPin,
  IconMapPin2,
  IconPlus,
} from '@tabler/icons-react';
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

  const instructionSplit = meals?.strInstructions.split('.');
  console.log('instruct : ', instructionSplit);

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
        <h1 className="font-bold text-xl md:text-4xl lg:text-5xl">
          {meals?.strMeal}
        </h1>

        <div className="flex space-x-5 mt-5">
          <div className="flex items-center space-x-1">
            <IconMapPin className="text-secondary-color w-[20px ] h-[20px] md:w-[25px] md:h-[25px] " />
            <p className="text-sm md:text-base lg:text-lg text-orange-800">
              {meals?.strArea}
            </p>
          </div>

          <div className="h-6 bg-secondary-color w-[1px]"></div>

          <div className="flex items-center space-x-1">
            <IconCategoryPlus className="text-secondary-color w-[20px ] h-[20px] md:w-[25px] md:h-[25px]" />
            <p className="text-sm md:text-base lg:text-lg text-orange-800">
              {meals?.strCategory}
            </p>
          </div>

          <div className="h-6 bg-secondary-color w-[1px]"></div>

          <div className="flex items-center space-x-1">
            <IconLink className="text-secondary-color w-[20px ] h-[20px] md:w-[25px] md:h-[25px]" />

            <Link
              href={meals?.strSource || '/'}
              className=" underline text-sm md:text-base lg:text-lg"
              target="_blank"
            >
              Lihat Sumber
            </Link>
          </div>
        </div>
      </section>

      <div className="h-16"></div>

      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="">
            <Image
              src={meals?.strMealThumb}
              width={500}
              height={500}
              alt={meals?.strMeal}
              className="rounded-2xl w-full h-[250px] md:h-[400px] lg:h-[500px]"
              priority={true}
              quality={100}
            />
          </div>

          <article className="">
            <h2 className="font-bold text-3xl">How to Cook ?</h2>
            <table className="border-separate border-spacing-y-3">
              <tbody>
                {instructionSplit?.map((instruction: string, index: number) => {
                  return !instruction ? null : (
                    <tr key={index}>
                      <td>
                        <p className="text-justify mr-3 px-2.5 py-1 rounded-lg text-white bg-primary-color flex items-center justify-center">
                          {index}
                        </p>
                      </td>
                      <td>
                        <p className="text-justify">{instruction}</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </article>
        </div>
      </section>

      <div className="h-12"></div>

      <section className="container">
        <div className="flex flex-col xl:flex-row justify-between gap-16">
          <article className="flex flex-col lg:flex-row lg:space-x-10">
            <div className="">
              <div className="flex  items-center justify-between bg-secondary-color w-[270px] px-3 py-1.5 rounded-lg">
                <h3 className="text-lg font-medium  text-white   ">
                  Ingredients
                </h3>

                <IconPlus color="white" size={20} />
              </div>

              <div className="mt-5">
                {mergeIngredients(meals).map(
                  (ingredient: string, index: number) => {
                    return (
                      <li key={index} className="my-2.5">
                        {ingredient}
                      </li>
                    );
                  },
                )}
              </div>
            </div>

            <div className="h-4"></div>

            <div className="">
              <div className="flex  items-center justify-between bg-primary-color w-[270px] px-3 py-1.5 rounded-lg">
                <h3 className="text-lg font-medium  text-white   ">
                  Measurements
                </h3>

                <IconPlus color="white" size={20} />
              </div>

              <div className="mt-5">
                {mergeMeasurements(meals).map(
                  (ingredient: string, index: number) => {
                    return (
                      <li key={index} className="my-2.5">
                        {ingredient}
                      </li>
                    );
                  },
                )}
              </div>
            </div>
          </article>

          <iframe
            src={meals?.strYoutube.replace('watch?v=', 'embed/')}
            className="aspect-video w-full rounded-3xl drop-shadow-lg"
          ></iframe>
        </div>
      </section>
    </MainLayout>
  );
};

export default IngredientDetailPage;
