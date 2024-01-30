'use client'
import React, {useState, useEffect} from 'react';
import Main from '@/components/Main';

export default function Home() {
  
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        const height = window.innerHeight
        const width = window.innerWidth
        // console.log(height, width)
        setCount(Math.floor(height / 24) * Math.floor(width / 24))
    }, [])
    return (
  <main>
    {
      Array.from({ length: count}, (_, i) => (
        <Main key={i}/>
      ))
    }
  </main>
  );
}
