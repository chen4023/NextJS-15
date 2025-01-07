import MeowArticle from '@/components/MeowArticle';
import { getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';

// export const revalidate = 3

export default async function ProductPage() {
  const products = await getProducts()

  return (
    <div>
      <h1 className='text-xl font-bold'>👚 제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}><Link href={`/products/${id}`}>● {name}</Link></li>
        ))}
      </ul>
      <MeowArticle />
    </div>
  );
}

