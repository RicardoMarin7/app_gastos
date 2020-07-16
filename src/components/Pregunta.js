import React, {useState} from 'react'
import Error from './Error'


const Pregunta = ({setPresupuesto, setRestante, setPregunta, presupuestoGuardado }) =>{
    const [cantidad,setCantidad] = useState(0)
    const [error,setError] = useState(false)

    const cambiarPresupuesto = e =>{
        setCantidad(parseInt(e.target.value))
    }

    const handleSubmit = e =>{
        e.preventDefault()
        if( cantidad < 1 || isNaN( cantidad ) ){
            setError(true)
            return
        }

        // Si pasa la validacion
        setError(false)
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setPregunta(false)
        presupuestoGuardado = localStorage.setItem('presupuesto',cantidad)
        localStorage.setItem('restante',cantidad)
    }

    return(
        <React.Fragment>
            <h2 className="Pregunta__title">Coloca Tu Presupuesto</h2>
            { error ? <Error mensaje="El presupuesto no es válido" center='center' /> : null}
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Coloca Tu Presupuesto"
                    className="u-full-width"
                    type="number" 
                    name="" 
                    id=""
                    onChange={cambiarPresupuesto}
                />
                <button className="u-full-width button-primary" type="submit">Definir Presupuesto</button>
            </form>
        </React.Fragment>
    )
}

export default Pregunta