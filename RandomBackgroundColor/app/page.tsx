"use client";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const randomColor = () => {
        const color = Math.floor(Math.random() * 16777215).toString(16)
        document.body.style.backgroundColor = "#" + color
    }
    randomColor()
    const interval = setInterval(randomColor, 1000)
    return () => clearInterval(interval)
  }, [])
    return (<></>);
}
