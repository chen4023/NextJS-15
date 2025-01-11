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
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          () => reset()
        }
        className='bg-gray-300 w-24 h-8 text-gray-800 rounded-md'
      >
        Try again
      </button>
    </div>
  )
}