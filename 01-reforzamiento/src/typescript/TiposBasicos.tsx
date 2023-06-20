export const TiposBasicos = () => {
  const nombre: string = "Flor";
  const edad: number = 25;
  const estaActivo: boolean = true;

  const poderes: string[] = ["Velocidad", "Volar", "Respirar en el agua"];

  return (
    <>
      <h3>Tipos Básicos</h3>
      <p>
        {nombre}, {edad}, {estaActivo ? "Activo" : "No activo"}
      </p>
      <br />
      <p>{poderes.join(", ")}</p>
    </>
  );
};
