'use client'
import React, {useState, useEffect} from 'react';
import Main from '@/components/Main';
import { INNER_TEXT } from '@/constants';

export default function Home() {
  
    const [count, setCount] = useState(0)
    const InnerText = INNER_TEXT.text
    
    useEffect(() => {
        const height = window.innerHeight
        const width = window.innerWidth
        // console.log(height, width)
        setCount(Math.floor(height / 24) * Math.floor(width / 24))
    }, [])
    return (
  <main className='flex items-center justify-center flex-wrap'>
    {
      Array.from({ length: count}, (_, i) => 
        i < InnerText.length ? (
          <Main key={i}
            initText={InnerText[ i % InnerText.length]}/>
        ) : (
              <Main key={i}/>
            )
      )
    }
  </main>
  );
}
