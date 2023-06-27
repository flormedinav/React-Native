//? ENVÍO DE INFORMACIÓN
//Hay dos formas de enviar información:
//1. Mediante las props de componente padre a hijos.
//2. Mediante el store o context, donde los componentes acceder al store para obtener cierta información o métodos y a su vez al acceder a un método puede implicar que haya cambio en otro componente.

//Store -> componente que va a enmarcar todos los otros componentes hijos. Entonces cualquier componente hijo va a poder acceder a esta información o métodos.

// import {createContext} from 'react';

// //Definir como luce, qué información tendré aquí
// export interface AuthState {
//   isLoggedIn: boolean;
//   username?: string;
//   favoriteIcon?: string;
// }

// //Estado inicial -> nos dice que información va a tener la aplicación cuando es cargada por primera vez.
// export const authInitialState: AuthState = {
//   isLoggedIn: false,
// };

// //Lo usaremos para decirle a React cómo luce y qué expone el context
// //Es para que cuando usamos el context sepamos que información es el que tiene el value del Provider.
// export interface AuthContextProps {
//   authState: AuthState;
//   singIn: () => void;
// }

// //Crear el contexto
// //Aquí le estamos diciendo que el AuthContext va a lucir y tener información interna del tipo AuthContextProps
// export const AuthContext = createContext({} as AuthContextProps);

// //Componente que es proveedor del estado
// export const AuthProvider = ({children}: any) => {
//   return (
//     <AuthContext.Provider
//       value={{
//         authState: authInitialState,
//         singIn: () => {},
//       }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

//?CONFIGURACIÓN DEL REDUCER

//El reducer es una función que genera estados, que lo que hace es recibir un argumento y en base a ese generar un nuevo estado.
//El dispatch es el que vamos a usar para mandarle las acciones al reducer.

//Componente que es proveedor del estado
// export const AuthProvider = ({children}: any) => {
//   const [authState, dispatch] = useReducer(authReducer, authInitialState);

//   const singIn = () => {
//     dispatch({type: 'singIn'});
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         authState,
//         singIn,
//       }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

//TODO -> INFORMACIÓN IMPORTANTE:
//Podemos especificar el tipo de los hijos de los componente como JSX.Element cuando queremos que sea uno solo o JSX.Element[] cuando queremos que sean muchos.

// const AppState = ({children}: {children: JSX.Element}) => {
//   return <AuthProvider>{children}</AuthProvider>;
// };

// const AppState = ({children}: {children: JSX.Element[]}) => {
//   return <AuthProvider>{children}</AuthProvider>;
// };

//TODO -> IMPORTANTE FUNCIONES:
//Cuando tengo una función que no recibe ningún parámetro y ejecuta otra función que tampoco recibe parámetro entonces simplemente puedo pasarle la referencia, por ejemplo: 

//  De esto: 
// <Button title="SingIn" onPress={() => singIn()} />

// A esto:
// <Button title="SingIn" onPress={singIn} />

//TODO -> DESTRUCTURING: 
//Cuando tenemos el siguiente objeto: 

// {
//   authState: AuthState;
//   singIn: () => void;
// }

// export interface AuthState {
//   isLoggedIn: boolean;
//   username?: string;
//   favoriteIcon?: string;
// }

//*Podemos desestructurar de authState el isLoggedIn de la siguiente manera: 

// const {authState: {isLoggedIn}, singIn,} = useContext(AuthContext);

//Otra forma sería creando una constante por aparte.