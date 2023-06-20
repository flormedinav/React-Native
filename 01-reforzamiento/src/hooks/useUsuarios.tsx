import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const paginaRef = useRef(1);

  useEffect(() => {
    //llamado al api
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
      const resp = await reqResApi.get<ReqResListado>("/users", {
        params: {
          page: paginaRef.current,
        },
      });

      if (resp.data.data.length > 0) {
        setUsuarios(resp.data.data);
      } else {
        alert("No hay más registros");
        //La linea 28 es para que cuando no haya más páginas me vuelva a la página 2
        paginaRef.current--;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const paginaSiguiente = () => {
    paginaRef.current++;
    cargarUsuarios();
  };

  const paginaAnterior = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--;
      cargarUsuarios();
    }
  };

  return {
    usuarios,
    cargarUsuarios,
    paginaSiguiente,
    paginaAnterior,
  };
};
