interface Persona {
  nombre: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: number;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombre: "Flor",
    edad: 25,
    direccion: {
      pais: "Argentina",
      casaNo: 23,
    },
  };

  return (
    <>
      <h3>Objetos literales</h3>
      {/* JSON.stringify transforma un objeto a su representación JSON como si fuera un string.*/}
      {/* {JSON.stringify(persona)} */}

      {/* //? Fragmento de código en html*/}
      {/* De la manera que aparece abajo se muestra el código como se mostraría en el editor. Donde va null le podemos pasar un array con las propiedades del objeto que queremos que muestre. Si queremos que muestre todo ponemos null */}
      <code>{JSON.stringify(persona, null, 2)}</code>
    </>
  );
};
