import { getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';

// export const revalidate = 3

export default async function ProductPage() {
  const products = await getProducts()
  const res = await fetch('https://meowfacts.herokuapp.com', {
    cache: 'no-cache' // no-cache : SSR로 받아오겠다
    // next:{revalidate: 0} : SSR
    // next:{revalidate: 3} : 3초 간격 ISR
  })
  const data = await res.json()
  const factText = data.data[0]
  return (
    <div>
      <h1 className='text-xl font-bold'>👚 제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}><Link href={`/products/${id}`}>● {name}</Link></li>
        ))}
      </ul>
      <article>{factText}</article>
    </div>
  );
}

