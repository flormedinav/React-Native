import { useForm } from "../hooks/useForm";

export const Formularios = () => {
  const { formulario, email, password, onChange } = useForm({
    email: "test@test.com",
    password: "123456",
  });

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        // value={formulario.email}
        //Cambio porque obtengo ya desestructurada la propiedad.
        value={email}
        onChange={({ target }) => onChange(target.value, "email")}
      />

      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        // value={formulario.password}
        value={password}
        onChange={({ target }) => onChange(target.value, "password")}
      />

      <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </>
  );
};

//? NOTAS
//*Diferencia con manejar el estado de los formularios entre React y React Native:
//En React Native no vamos a poder acceder a la propiedad name (porque no existe). Entonces para ello en la función onchange recibimos dos valores: el value que proviene del event.target.value, y el campo donde vamos a indicar que tipo de campo es.

//TODO -> Función onChange
// const onChange = (value: string, campo: string) => {
//   setFormulario({
//     ...formulario,
//     [campo]: value,
//   });
// };

//TODO -> Como pasaríamos los valores desde el input.
{
  /* <input
  type="text"
  className="form-control"
  placeholder="Email"
  value={formulario.email}
  onChange={({ target }) => onChange(target.value, "email")}
/>; */
}

//En React nosotros directamente paramos el evento desde el evento.target.value obtenemos el valor y desde el evento.target.name obtenemos el nombre del campo (que previamente al input deberíamos agregarle la etiqueta name).

//!Error importante:
//No podemos hacer esto:
// campo: value,
//Porque le estamos indicando el que nombre de la propiedad es campo.

//Para indicarle que el nombre de la propiedad es lo que tiene una variable debemos usar las []
//[campo]: value,
