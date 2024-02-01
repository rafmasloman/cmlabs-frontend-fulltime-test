import Head from 'next/head';
import React from 'react';
import { ISEOInterfacePropsTypes } from './interfaces/SeoInterface';

const SEO = ({
  title,
  children,
  description,
  content,
}: ISEOInterfacePropsTypes) => {
  return (
    <Head>
      {children}
      <meta name={description} content={content} />
      <link rel="icon" href="/brandicon.svg" />

      <title>{title} | MealForYu</title>
    </Head>
  );
};

export default SEO;
