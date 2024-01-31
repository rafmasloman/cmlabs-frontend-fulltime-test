import Image from 'next/image';
import { Poppins, Plus_Jakarta_Sans } from 'next/font/google';
import HeaderNavbar from '@/components/organism/Header/HeaderNavbar';
import { useGetIngredientsList } from '@/hooks/useGetIngredientsList';
import MainLayout from '@/components/organism/Layouts/MainLayout';
import HeaderSection from '@/components/organism/Header/HeaderSection';
import Hero from '@/components/organism/Hero/Hero';
import IngredientsList from '@/components/molecul/List/IngredientList';

export default function Home() {
  const { ingredientsList } = useGetIngredientsList();

  return (
    <MainLayout>
      <HeaderNavbar />

      <section className="container h-[400px]">
        <Hero />
      </section>

      <section className="container">
        <div className="my-7"></div>

        <HeaderSection
          title={'Our Best Ingredients'}
          textLink="Lihat Semua"
          href="/ingredients"
        />

        <div className="my-7"></div>
        <IngredientsList meals={ingredientsList?.meals?.slice(0, 10)} />
      </section>
    </MainLayout>
  );
}
