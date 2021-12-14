import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { Usuario, ReqResListado } from '../interfaces/reqRes';
export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const pageRef = useRef(1)

    useEffect(() => {
        // Llamado al API
        cargarUsuarios();
    }, []);

    const cargarUsuarios = async () => {
        const response = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: pageRef.current
            }
        })
        if (response.data.data.length > 0) {
            setUsuarios(response.data.data);

        } else {
            alert('No hay mas registros.')
        }
    }

    const previousPage = () => {
        if (pageRef.current > 1) {
            pageRef.current--;
            cargarUsuarios();
        }  else {
            alert('Ya se encuentra en la pagina 1.')
        }
    }

    const nextPage = () => {
        pageRef.current++;
        cargarUsuarios();
    }

    return {
        usuarios,
        nextPage,
        previousPage
    }
}
