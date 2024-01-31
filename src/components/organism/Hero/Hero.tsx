import Image from 'next/image';
import React from 'react';
import ThumnailImage from '@/assets/images/thumbnail-bg.png';
import Button from '@/components/atomic/Button/Button';

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

      <div className="grid grid-cols-3 h-full ">
        <div className="col-span-2  place-self-center justify-self-start">
          <h1 className="text-black text-2xl md:text-3xl lg:text-4xl">
            Explore Our Variants <br /> of Delicious Food
          </h1>

          <Button
            type={'button'}
            className="bg-primary-color text-lg px-5 py-2.5 text-white rounded-full mt-5"
          >
            {"Let's"} Explore
          </Button>
        </div>

        <div className="hidden md:block col-span-1 relative">
          <Image
            src={'https://www.themealdb.com/images/media/meals/1550441275.jpg'}
            alt="Food Image"
            width={270}
            height={270}
            className="rounded-2xl absolute right-0 bottom-10"
          />

          <Image
            src={
              'https://www.themealdb.com/images/media/meals/vussxq1511882648.jpg'
            }
            alt="Food Image"
            width={270}
            height={270}
            className="rounded-2xl right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
