import Image from 'next/image';
import { ICardPropsTypes } from './interfaces/CardInterface';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import { useState } from 'react';

const CardImage = ({ href, id, name, imgUrl }: ICardPropsTypes) => {
  const [isHoverCard, setIsHoverCard] = useState(false);
  const [isHoverLink, setIsHoverLink] = useState(false);

  return (
    <div
      className={`relative border-solide border-[1px]  border-slate-300 rounded-xl shadow-sm hover:shadow-lg lg:w-[270px]`}
      //   onMouseEnter={() => setIsHoverCard(!isHoverCard)}
      onMouseEnter={() => setIsHoverCard(!isHoverCard)}
      onMouseLeave={() => setIsHoverCard(!isHoverCard)}
    >
      <div className="flex justify-center">
        <Image
          src={imgUrl!}
          alt={name}
          width={150}
          height={150}
          className={`w-full rounded-xl transition ease-in-out duration-700 ${
            !isHoverCard ? 'brightness-50 ' : 'brightness-100 '
          }`}
        />
      </div>

      <div
        className={`bg-white  ${
          !isHoverCard ? 'bg-opacity-80' : 'bg-opacity-100 shadow-lg'
        }   py-1.5 mx-3 rounded-md  bottom-4 absolute m-auto left-0 right-0    z-10`}
      >
        <div className="text-center ">
          <h3 className="text-xs md:text-sm lg:text-base">{name}</h3>
        </div>

        <Link
          href={!href ? '/' : href}
          className={`text-[0.625rem] md:text-sm    flex justify-center items-center ${
            !isHoverLink ? 'text-gray-500' : ' text-blue-500'
          }`}
          onMouseEnter={() => setIsHoverLink(!isHoverLink)}
          onMouseLeave={() => setIsHoverLink(!isHoverLink)}
        >
          Lihat Detail
          <div className="p-1 md:p-2">
            <IconArrowRight
              className={`text-sm text-gray-500 cursor-pointer ${
                !isHoverLink ? 'text-gray-500' : ' text-blue-500'
              }`}
              size={16}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardImage;
