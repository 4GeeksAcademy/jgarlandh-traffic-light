import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'; // Asegúrate de tener react-bootstrap instalado

const Traffic = () => {
  const [color, setColor] = useState('rojo'); // Estado inicial: rojo

  // Función para cambiar el color manualmente
  const handleChangeColor = () => {
    if (color === 'rojo') {
      setColor('verde');
    } else if (color === 'verde') {
      setColor('amarillo');
    } else if (color === 'amarillo') {
      setColor('rojo');
    }
  };

  useEffect(() => {
    // Definimos los tiempos para cada color
    const tiempos = {
      rojo: 4000,    // 4 segundos
      amarillo: 2000, // 2 segundos
      verde: 4000     // 4 segundos
    };

    // Cambiamos el color después del tiempo correspondiente
    const timer = setTimeout(() => {
      handleChangeColor(); // Usamos la misma lógica para cambiar el color automáticamente
    }, tiempos[color]);

    // Limpiamos el timer al desmontar el componente
    return () => clearTimeout(timer);
  }, [color]);

  return (
    <>
      {/* Contenedor principal para centrar el semáforo y el botón */}
      <div className="main-container">
        <h1>Ejercicio Semaforo</h1><br />
        {/* Semáforo */}
        <div className="semaforo">
          <div className={`luz rojo ${color === 'rojo' ? 'activo' : ''}`}></div>
          <div className={`luz amarillo ${color === 'amarillo' ? 'activo' : ''}`}></div>
          <div className={`luz verde ${color === 'verde' ? 'activo' : ''}`}></div>
        </div>

        {/* Botón para cambiar el color manualmente */}
        <Button
          variant="warning"
          onClick={handleChangeColor} // Llamamos a la función handleChangeColor
          className="change-color-button mt-3"
        >
          Cambiar color
        </Button>
      </div>

      {/* Estilos */}
      <style>
        {`
          /* Contenedor principal para centrar el contenido */
          .main-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100vh; /* Ocupa toda la altura de la pantalla */
            background-color: #f0f0f0; /* Fondo opcional */
          }

          /* Estilos del semáforo */
          .semaforo {
            width: 100px;
            height: 300px;
            background-color: #333;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            padding: 20px;
          }

          /* Estilos de las luces */
          .luz {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: #555;
          }

          /* Luces activas */
          .rojo.activo {
            background-color: red;
          }

          .amarillo.activo {
            background-color: yellow;
          }

          .verde.activo {
            background-color: green;
          }

          /* Estilos del botón */
          .change-color-button {
            width: 150px;
          }
        `}
      </style>
    </>
  );
};

export default Traffic;