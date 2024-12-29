import Link from 'next/link';
import React from 'react';

export default function ProductPage() {
  const products: string[] = ['shirt', 'pants', 'skirt', 'shoes']

  return (
    <div>
      <h1 className='text-xl font-bold'>👚 제품 소개 페이지!</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}><Link href={`/products/${product}`}>- {product}</Link></li>
        ))}
      </ul>
    </div>
  );
}

