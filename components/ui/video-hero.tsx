
"use client";

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

interface VideoHeroProps {
  src: string;
  children: React.ReactNode;
  className?: string;
  overlay?: boolean;
  mobileImage?: string;
}

export function VideoHero({ 
  src, 
  children, 
  className = "",
  overlay = true,
  mobileImage 
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force video to play after component mounts
      const playVideo = async () => {
        try {
          await video.play();
        } catch (err) {
          console.warn('Video autoplay failed:', err);
          setVideoError(true);
        }
      };

      // Add event listeners
      video.addEventListener('error', () => setVideoError(true));
      video.addEventListener('canplaythrough', playVideo);
      
      // Try to play immediately if video is ready
      if (video.readyState >= 3) {
        playVideo();
      }

      return () => {
        video.removeEventListener('error', () => setVideoError(true));
        video.removeEventListener('canplaythrough', playVideo);
      };
    }
  }, []);
  
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Video Background - Desktop and Tablet */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover hidden md:block z-0"
        style={{ 
          filter: 'brightness(0.7) contrast(1.1)',
          objectPosition: 'center center'
        }}
        onError={() => setVideoError(true)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback image for video error on desktop */}
      {(videoError || !src) && mobileImage && (
        <div className="absolute inset-0 hidden md:block z-0">
          <Image
            src={mobileImage}
            alt="Hero fallback background"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Mobile Image Background */}
      {mobileImage && (
        <div className="absolute inset-0 md:hidden z-0">
          <Image
            src={mobileImage}
            alt="Hero mobile background"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Overlay with Dark Mode gradient */}
      {overlay && (
        <div className="absolute inset-0 overlay-gradient-dark z-5" />
      )}

      {/* Content - Always visible */}
      <div className="relative z-10 h-full min-h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
