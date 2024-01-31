import React from 'react';
import { ICardPropsTypes } from './interfaces/CardInterface';
import Image from 'next/image';
import { useGetFilterIngredients } from '@/hooks/useGetFilterIngredients';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';

const Card = ({ name, imgUrl, description, id, href }: ICardPropsTypes) => {
  return (
    <div
      className={`bg-white px-10 py-7 border-solide border-[1px] border-slate-300 rounded-xl shadow-md hover:shadow-lg lg:w-[270px]`}
    >
      <div className="flex justify-center">
        <Image
          src={imgUrl!}
          alt={name}
          width={150}
          height={150}
          className="w-[120px] lg:w-full"
        />
      </div>

      <div className="text-center mt-5">
        <h3>{name}</h3>
        <p className="text-xs md:text-sm text-gray-400 line-clamp-2 mt-2.5">
          {description}
        </p>
      </div>

      <div className=" flex justify-center items-center mt-3.5  ">
        <Link
          href={!href ? '/' : href}
          className="text-xs md:text-sm text-blue-600 "
        >
          Lihat Detail
        </Link>

        <div className="p-1 md:p-2">
          <IconArrowRight
            className="text-sm text-blue-600 cursor-pointer"
            size={16}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
