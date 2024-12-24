import { notFound } from 'next/navigation';
import React from 'react';
// 15 ver에서는 type 지정시 Promise로 감싸야함 
type Props = {
  params:
  Promise<{ slug: string; }>
}
// 동적 라우팅 -> 빌드시 페이지를 미리 만들어 둘 수 없음
// 미리 만들어두고 싶으면 어떻게 해야해?
export default async function PantsPage({ params }: Props) {
  // 15 ver에서는 비동기로 받아와야함
  // ✅ 공식문서 :버전 14 및 이전 버전에서는 params동기식 prop이었습니다. 이전 버전과의 호환성을 위해 Next.js 15에서도 동기식으로 액세스할 수 있지만 이 동작은 향후 더 이상 지원되지 않습니다.
  const { slug } = await params
  if (slug === 'nothing') {
    notFound();
  }
  return (
    <div>
      {slug} Page
    </div>
  );
}

export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map(product => ({
    slug: product
  }))
}

