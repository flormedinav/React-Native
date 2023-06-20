import { useReducer, useEffect } from "react";

interface AuthState {
  validando: boolean;
  token: string;
  username: string;
  nombre: string;
}

const initialState: AuthState = {
  validando: true,
  token: "",
  username: "",
  nombre: "",
};

type LoginPayload = {
  username: string;
  nombre: string;
};

//Debemos definir las actions. En este caso como type porque no vamos a expandirlo.
type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

//La función del reducer siempre debe devolver el estado
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: "",
        nombre: "",
        username: "",
      };

    case "login":
      const { nombre, username } = action.payload;
      return {
        ...state,
        token: "ACB123",
        nombre,
        username,
      };

    default:
      return state;
  }
};

export const Login = () => {
  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: { nombre: "Flor", username: "flor1234" },
    });
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>

      {token ? (
        <div className="alert alert-success">Autenticado como: {nombre}</div>
      ) : (
        <div className="alert alert-danger">No autenticado</div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};
