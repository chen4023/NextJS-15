import { redirect } from 'next/navigation';
import React from 'react';
import { Metadata } from 'next';
import { getProduct, getProducts } from '@/service/products';
import Image from 'next/image';
import GoProductsButton from '@/components/GoProductsButton';

// 15 ver에서는 type 지정시 Promise로 감싸야함 
type Props = {
  params: Promise<{ slug: string }>
}
// ISR

// 동적 메타데이터 (generateMetadata)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = await getProduct(slug)
  return {
    title: `${product?.name} 상세페이지`
  }
}

// 동적 라우팅 -> 빌드시 페이지를 미리 만들어 둘 수 없음
// 미리 만들어두고 싶으면 어떻게 해야해?
export default async function ProductPage({ params }: Props) {
  // 15 ver에서는 비동기로 받아와야함
  // ✅ 공식문서 :버전 14 및 이전 버전에서는 params동기식 prop이었습니다. 이전 버전과의 호환성을 위해 Next.js 15에서도 동기식으로 액세스할 수 있지만 이 동작은 향후 더 이상 지원되지 않습니다.
  const { slug } = await params
  const product = await getProduct(slug)
  // 제공되는 상품 id가 아닌 경우 (동적 Redirect)
  if (!product) {
    redirect('/products')
    // notFound()
  }
  return (
    <div>
      <div className='flex flex-col'>
        {product.name} 제품 상세페이지
        <GoProductsButton />
      </div>
      <Image className='h-72' src={`/images/${product.image}`} alt={product.name} width='300' height='300' />
    </div>
  );
}

// SSG 
export async function generateStaticParams() {
  const products = await getProducts()
  return products.map(product => ({
    slug: product.id
  }))
}

