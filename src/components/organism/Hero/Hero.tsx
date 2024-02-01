import Image from 'next/image';
import React from 'react';
import ThumnailImage from '@/assets/images/thumbnail-bg.png';
import Button from '@/components/atomic/Button/Button';
import Rectangle01 from '@/assets/images/Rectangle 1.png';
import Rectangle02 from '@/assets/images/Rectangle 2.png';
import Rectangle03 from '@/assets/images/Rectangle 3.png';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-full ">
      {/* <Image
        src={ThumnailImage.src}
        alt="Food Background"
        width={500}
        height={500}
      /> */}

      <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-2 h-full md:gap-10 lg:gap-24">
        <div className="flex  flex-col  justify-center ">
          <h1
            className="text-black  text-2xl  md:text-3xl xl:text-5xl   font-semibold xl:tracking-wide"
            // style={{ lineHeight: '3.275rem' }}
          >
            Explore Our Variants Recipe for your{' '}
            <span className="text-secondary-color">Delicious</span> Food
          </h1>

          <p className="text-center md:text-justify text-sm md:text-base text-gray-400 mt-3.5">
            Jelajahi dunia rasa melalui ribuan resep makanan terbaik yang
            disajikan secara kreatif dan informatif. Temukan beragam bahan
            berkualitas tinggi untuk membangkitkan selera kuliner Anda.
          </p>

          <div className="w-full mt-5 md:mt-8">
            <Button
              type={'button'}
              className="bg-primary-color text-base lg:text-lg px-5 py-2.5 lg:px-7 lg:py-4 text-white rounded-full mt-5"
            >
              {"Let's"} Explore
            </Button>
          </div>
        </div>

        <div className="hidden md:flex md:space-x-0 xl:space-x-20">
          <Image
            src={Rectangle01.src}
            alt="Food Image"
            width={270}
            height={270}
            className="scale-75 xl:scale-105 drop-shadow-xl"
          />

          <Image
            src={Rectangle02.src}
            alt="Food Image"
            width={270}
            height={270}
            className="hidden lg:block scale-50 xl:scale-90 drop-shadow-xl"
          />

          {/* <Image
            src={Rectangle03.src}
            alt="Food Image"
            width={270}
            height={270}
            className="scale-75"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
