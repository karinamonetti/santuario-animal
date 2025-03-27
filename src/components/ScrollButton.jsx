// src/components/ScrollButton.jsx
import React, { useEffect, useState } from 'react';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  // Mostrar u ocultar el botón en función del scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setVisible(scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para hacer scroll hacia arriba
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      id="button-up"
      onClick={scrollUp}
      style={{
        transform: visible ? 'scale(1)' : 'scale(0)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
      </svg>
    </div>
  );
};

export default ScrollButton;
