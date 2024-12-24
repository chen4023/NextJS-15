import React from 'react';
type Props = {
  params:
  Promise<{ slug: string; }>
}
// 동적 라우팅 -> 빌드시 페이지를 미리 만들어 둘 수 없음
// 미리 만들어두고 싶으면 어떻게 해야해?
export default async function PantsPage({ params }: Props) {
  // 15 ver에서는 비동기로 받아와야함
  const { slug } = await params
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

