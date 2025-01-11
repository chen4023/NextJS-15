'use client'

import { useEffect } from 'react'

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({
  error,
  reset,
}: Props) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='h-[60vh] flex flex-col justify-center items-center'>
      <h2>🚨 오류가 발생했습니다!</h2>
      <button
        onClick={
          () => reset()
        }
        className='bg-red-500 text-white text-sm w-32 h-8 mt-3 rounded-md'
      >
        다시 시도
      </button>
    </div>
  )
}