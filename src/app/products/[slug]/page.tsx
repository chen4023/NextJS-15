import React from 'react';
type Props = {
  params: {
    slug: string;
  }
}
export default async function PantsPage({ params }: Props) {
  // 15 ver에서는 비동기로 받아와야함
  const { slug } = await params
  return (
    <div>
      {slug} Page
    </div>
  );
}

