"use client"

import { useState, useEffect } from 'react'

export default function CountUp({ start = 0, end, duration = 2 }) {
  const [count, setCount] = useState(start)
  
  useEffect(() => {
    let startTime
    let animationFrame
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const currentCount = Math.floor(progress * (end - start) + start)
      
      setCount(currentCount)
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }
    
    animationFrame = requestAnimationFrame(step)
    
    return () => cancelAnimationFrame(animationFrame)
  }, [start, end, duration])
  
  return <>{count}</>
}