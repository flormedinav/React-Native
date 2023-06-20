import { useState } from "react";

//Aquí estoy especificando que el useForm es del tipo genérico T que extiende de un Objeto, es decir que va a ser un objeto.
//Después indicamos que el formulario qeu recibimos por parámetro va a ser del tipo T.
export const useForm = <T extends Object>(formulario: T) => {
  const [state, setState] = useState(formulario);

  //Aquí le estamos indicando con keyof T que el campo solamente puede ser igual a una propiedad del T (es decir dle objeto que recibo)
  const onChange = (value: string, campo: keyof T) => {
    setState({
      ...state,
      [campo]: value,
    });
  };

  return {
    //En la linea de abajo le estoy mandando las propiedades del formulario desestructuradas.
    ...state,
    formulario: state,
    onChange,
  };
};

//? NOTAS
//El useState es un genérico porque dependiente de su argumento es el tipo de dato.
