'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to homepage since about content is now on the homepage
    router.replace('/');
  }, [router]);

  return (
    <div className="min-h-screen bg-dark-primary flex items-center justify-center">
      <p className="text-warm-white">Redirection vers la page d'accueil...</p>
    </div>
  );
}
