import { Usuario } from "../interfaces/reqRes";
import { useUsuarios } from "../hooks/useUsuarios";

export const Usuarios = () => {
  const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios();

  const renderItem = ({
    id,
    first_name,
    last_name,
    avatar,
    email,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{ width: 40, borderRadius: 100 }}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map(renderItem)}</tbody>
      </table>
      <button className="btn btn-primary" onClick={paginaAnterior}>
        Anteriores
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={paginaSiguiente}>
        Siguientes
      </button>
    </>
  );
};

//?NOTAS:
//* Estas dos son la misma función:
// .catch((err) => console.log(err));
// .catch(console.log);

//Cuando tenemos un parámetro que es igual al argumento que se le pasa podemos escribir directamente la referencia de la función.

//*Otra forma de indicar el tipo de datos:
// const [usuarios, setUsuarios] = useState<Usuario[]>([]);
//reqResApi.get<ReqResListado>("/users")

//Observación el 'tag' con el nombre de la interface.

//*El key de los map (o del renderizado de varios elementos html):
//Debe ser un string más que nada para React Native.
//Para React.js no hace falta que sea un string.

//!No usar async await en el useEffect
//Pero va contra las buenas prácticas por ello es mejor usar promesas.

// useEffect(() => {
//   reqResApi
//     .get<ReqResListado>("/users")
//     .then((resp) => {
//       setUsuarios(resp.data.data);
//     })

//     .catch(console.log);
// }, []);

//Si podemos usar async await en una función que creemos fuera de useEffect y la ejecutemos dentro del useEffect después.

// useEffect(() => {
//   cargarUsuarios();
// }, []);

// const cargarUsuarios = async () => {
//   try {
//     const resp = await reqResApi.get<ReqResListado>("/users");
//     setUsuarios(resp.data.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

//*useRef
//Cuando no tengo que volver a renderizar algo en el html me conviene utilizar el useRef en lugar del useEffect.
//useRef -> es como una referencia a una variable la cual si cambia su valor sigue siendo la misma pero no va a disparar el procedimiento para re renderizar el componente.
//Recibe el valor inicial, en este caso el 1 (haciendo referencia a la página)

//TODO -> Importante:
//const paginaRef = useRef(1)

//paginaRef es un objeto que dentro tiene la propiedad current que es la que contiene el valor del ref que en este caso sería 1
