
"use client";

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({ 
  from = 0, 
  to, 
  duration = 2000, 
  className = "",
  suffix = "",
  prefix = ""
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      
      const startTime = Date.now();
      const startCount = from;
      const endCount = to;
      
      const timer = setInterval(() => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.round(startCount + (endCount - startCount) * easeOutCubic);
        
        setCount(currentCount);
        
        if (progress === 1) {
          clearInterval(timer);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, hasAnimated, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
