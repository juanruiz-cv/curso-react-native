export const TiposBasicos = () => {

    const nombre: string = 'Fernando';

    const edad: number = 35;
    const estaActivo: boolean = false;

    const poderes: (string | number)[] = [1,2,3,'Test']; // 'Velocidad', 'Volar' , 'Respirar'

    return (
        <>
            <h3>Tipos Básicos</h3>
            <p>{nombre}, {edad}, {(estaActivo) ? 'Activo' : 'No activo'}</p>
            <br />
            {poderes.join(', ')}
        </>
    )
}