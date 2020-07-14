import React, {useState} from 'react'
import Error from './Error'

import './styles/Pregunta.css'


const Pregunta = () =>{
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

    }

    return(
        <div className="Pregunta__container">
            <h2 className="Pregunta__title">Coloca Tu Presupuesto</h2>
            { error ? <Error mensaje="El presupuesto no es válido" /> : null}
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
        </div>
    )
}

export default Pregunta