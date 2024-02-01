import React from 'react';
import { IThumbnailVideoPropsTypes } from './interfaces/ThumbnailInterface';
import Image from 'next/image';
import {
  IconBrandYoutube,
  IconBrandYoutubeFilled,
  IconLocation,
  IconMapCheck,
  IconPlayerTrackNextFilled,
  IconVideo,
} from '@tabler/icons-react';
import Link from 'next/link';

type Props = {};

const ThumbnailVideo = ({
  category,
  instruction,
  thumbnail_img,
  youtube_link,
  meal_name,
  location,
}: IThumbnailVideoPropsTypes) => {
  return (
    // <div
    //   className={`h-[150px] md:h-[250px] lg:h-[350px] relative brightness-125 w-full rounded-2xl lg:rounded-3xl bg-no-repeat bg-cover bg-center`}
    //   style={{ backgroundImage: `url(${thumbnail_img})` }}
    // >
    //   <div className="absolute bottom-0 text-white z-50">
    //     <h3>{category}</h3>
    //     <p>{meal_name}</p>
    //   </div>
    // </div>

    <div className="relative ">
      <div
        className={`h-[180px] md:h-[250px] lg:h-[350px] opacity-95 brightness-50  w-full rounded-2xl lg:rounded-3xl bg-no-repeat bg-cover  bg-center`}
        style={{ backgroundImage: `url(${thumbnail_img})` }}
      ></div>

      <section className="absolute bottom-5 left-5 md:bottom-10 md:left-10">
        <div className=" text-white ">
          <div
            className={`w-fit px-2 py-1 md:px-5 md:py-1.5 rounded-xl bg-secondary-color`}
          >
            <h3 className="text-xs md:text-sm ">{category}</h3>
          </div>

          <p className="text-sm md:text-3xl lg:text-4xl mt-3.5 ">{meal_name}</p>
          <p className="hidden md:block text-xs lg:text-base w-3/5 md:line-clamp-1 lg:line-clamp-2 mt-3.5 ">
            {instruction}
          </p>

          <div className="flex items-center mt-2.5">
            <IconMapCheck className="w-3.5 h-3.5 md:w-5 md:h-5" />
            <p className="text-xs lg:text-base ml-2 ">{location}</p>
          </div>

          <Link href={!youtube_link ? '/' : youtube_link} target="_blank">
            <button className="bg-primary-color py-3 px-3 text-xs lg:text-base lg:px-10 lg:py-3 rounded-xl mt-5">
              Watch Tutorials
            </button>
          </Link>
        </div>
      </section>

      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <IconPlayerTrackNextFilled className="text-slate-300 w-16 h-16 md:w-24 md:h-24" />
      </div> */}
    </div>
  );
};

export default ThumbnailVideo;
