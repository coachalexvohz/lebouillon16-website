
"use client";

import { useState, useEffect } from 'react';
import { LoadingScreen } from './loading-screen';

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [showLoading, setShowLoading] = useState(true);
  const [hasShownLoading, setHasShownLoading] = useState(false);

  useEffect(() => {
    // Vérifier si l'écran de chargement a déjà été affiché dans cette session
    const hasShown = sessionStorage.getItem('bouillon16-loading-shown');
    
    if (hasShown) {
      setShowLoading(false);
      setHasShownLoading(true);
    } else {
      // Précharger la vidéo pendant l'écran de loading
      const video = document.createElement('video');
      video.src = '/hero-video.mp4';
      video.preload = 'auto';
      video.load();

      // Attendre un petit moment pour que la page se charge correctement
      const initTimer = setTimeout(() => {
        // Marquer que l'écran de chargement a été affiché
        sessionStorage.setItem('bouillon16-loading-shown', 'true');
      }, 100);

      return () => clearTimeout(initTimer);
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    setHasShownLoading(true);
  };

  return (
    <>
      {showLoading && !hasShownLoading && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      <div className={showLoading && !hasShownLoading ? 'invisible' : 'visible'}>
        {children}
      </div>
    </>
  );
}
