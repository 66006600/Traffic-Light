import React, { useState } from 'react';

function Button() {
  const [presionado, setPresionado] = useState(false);

  function handleClick() {
    setPresionado(true);
  }

  return (
    <button className="boton-purpura" onClick={handleClick}>
      Purpura
    </button>
  );
}

export default Button;