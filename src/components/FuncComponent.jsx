import { useState } from "react";

function FuncComponent() {
  //  const state = useState(0); //primero va el inicio de la funcion y despues lo que devuelve que es una funcion
  const [value, setValue] = useState(0);

  return (
    <div>
      Componente funcional
      <p>
        <button onClick={() => setValue(value - 1)}>-</button>  
        {value}
        <button onClick={() => setValue(value + 1)}>+</button>
      </p>
    </div>
  );
}

export default FuncComponent;
