'use client'
import React, { useState } from 'react';


export default function Counter() {
  const [count, setCount] = useState(0);
  console.log('안녕 - 클라이언트')
  return (
    <div>
      <p> count: {count}</p>
      <div className='flex gap-4 text-2xl mt-3'>
        <button className='px-4 bg-gray-200 border' onClick={() => setCount((prev => prev + 1))}>+</button>
        <button className='px-4 bg-gray-200 border' onClick={() => setCount((prev => prev - 1))}>-</button>
      </div>
    </div>
  );
}

