import React from 'react';
import { ISpaceTypesProps } from './interfaces/SpaceInterface';

type Props = {};

const Space = ({ width, height }: ISpaceTypesProps) => {
  return <div className={`w-${width} h-${height}`}></div>;
};

export default Space;
