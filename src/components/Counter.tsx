'use client'
import React, { useState } from 'react';
// 1️⃣.index.html 파일에는 클라이언트 컴포넌트 UI도 포함되어 정적 렌더링 (localhost)
// 2️⃣.정적인 html을 일단 보내주고 나서, 클릭되면 hydration이 발생함
// 3️⃣.js코드를 받은 후에 브라우저 상에서 click 이벤트 처리
// 4️⃣.js코드를 받아오는 순간 React컴포넌트로 작동 (CSR)

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

