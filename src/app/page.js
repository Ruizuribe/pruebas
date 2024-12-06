'use client';

import { Button } from 'react-bootstrap';
import { useTheme } from './context/ThemeContext';
import Image from 'next/image';
export default function home () {
  const theme = useTheme();

  return (
    
    <div style={{ backgroundColor: theme.primary, color: theme.secondary }}>
      <div>
        <Image
         src={theme.logo}  // Asegúrate de que la ruta sea correcta
         alt="Vacation Club"
         width={500}  // Ancho de la imagen
         height={300}  />
      </div>
      <h1>Bienvenido a {theme.brand || 'Default Brand'}</h1>
      <Button  style={{ backgroundColor: theme.secondary, borderColor: theme.primary }}>
        Haz clic aquí
      </Button>
    </div>
  );
}

