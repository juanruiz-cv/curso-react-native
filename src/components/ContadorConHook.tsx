import { useConunter } from '../hooks/useConunter';

export const ContadorConHook = () => {

    const { valor, acumular } = useConunter(10);

    return (
        <>
            <h3>Contador con hook: <small> {valor}</small></h3>

            <button 
            className="btn btn-primary"
            onClick={() => acumular(1)}
            >+1</button>
            &nbsp;
            <button
            className="btn btn-primary"
            onClick={() => acumular(-1)}
            >-1</button>
        </>
    )
}
