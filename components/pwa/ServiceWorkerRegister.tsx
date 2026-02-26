'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('SW enregistré:', registration.scope);
          })
          .catch((error) => {
            console.log('Erreur SW:', error);
          });
      });
    }
  }, []);

  return null;
}
