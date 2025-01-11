'use client'

import { useRouter } from "next/navigation";

export default function GoProductsButton() {
  const router = useRouter()
  return (
    <button type="button" className='text-xs rounded-md bg-pink-100 w-24 px-1 py-1 my-3' onClick={() => router.push('/products')}>
      제품 페이지 이동
    </button>
  );
}
