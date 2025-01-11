import MeowArticle from '@/components/MeowArticle';
import { getProducts } from '@/service/products';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import clothesImage from '../../../public/images/clothes.jpg'

export const revalidate = 3

export default async function ProductPage() {
  const products = await getProducts();
  return (
    <div className='font-mono'>
      <h1 className='text-xl font-bold'>👚 제품 소개 페이지!</h1>
      <Image src={clothesImage} alt='clothes' className='h-64 w-64 my-3' />
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}><Link href={`/products/${id}`}>● {name}</Link></li>
        ))}
      </ul>
      <MeowArticle />
    </div >
  );
}

