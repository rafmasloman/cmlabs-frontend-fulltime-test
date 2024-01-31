import Image from 'next/image';
import { Poppins, Plus_Jakarta_Sans } from 'next/font/google';
import HeaderNavbar from '@/components/organism/Header/HeaderNavbar';
import { useGetIngredientsList } from '@/hooks/useGetIngredientsList';
import MainLayout from '@/components/organism/Layouts/MainLayout';
import HeaderSection from '@/components/organism/Header/HeaderSection';
import Hero from '@/components/organism/Hero/Hero';
import IngredientsList from '@/components/molecul/List/IngredientList';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';

export default function Home() {
  const { ingredientsList } = useGetIngredientsList();

  return (
    <MainLayout>
      <HeaderNavbar />

      <div className="my-10"></div>

      <section className="container h-[400px]">
        <Hero />
      </section>

      <div className="my-10"></div>

      <section className="container">
        <HeaderSection title={'Our Best Ingredients'} textLink="Lihat Semua">
          <div className="space-x-1 md:space-x-3 flex items-center bg-primary-color px-2.5 py-2 md:px-3.5 rounded-full">
            <Link
              href={'/ingredients'}
              className="text-xs md:text-sm text-white"
            >
              Lihat Semua
            </Link>

            <div className="p-1 md:p-2 bg-white rounded-full">
              <IconArrowRight className="text-sm text-black " size={16} />
            </div>
          </div>
        </HeaderSection>

        <div className="my-7"></div>
        <IngredientsList meals={ingredientsList?.meals?.slice(0, 10)} />
      </section>
    </MainLayout>
  );
}
