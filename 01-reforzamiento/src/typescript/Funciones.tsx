export const Funciones = () => {
  //*Todas las funciones que no tengan un return explícito devuelve un undefined.

  const sumar = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Funciones</h3>
      <p>El resultado es : {sumar(2, 4)}</p>
    </>
  );
};
