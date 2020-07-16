import React, { useState } from 'react'
import Error from './Error'
import ShortID from 'shortid'

const FormularioGastos = ( { setGasto , restante, setCrearGasto } ) => {

    const [ nombre, setNombre] = useState('')
    const [ cantidad, setCantidad] = useState(0)
    const [ mensaje, setMensaje] = useState('')
    const [ error, setError ] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        let gasto = {
            id: '',
            nombre: nombre,
            cantidad: cantidad
        }

        //validar
        if( nombre.trim() === '' || cantidad < 1 || isNaN( cantidad ) ){
            setError(true)
            setMensaje('Los campos estan vacios o no es una cantidad valida')
            return
        }

        if( cantidad > restante ){
            setError(true)
            setMensaje('La cantidad supera tu presupuesto')
            return
        }

        gasto.id = ShortID.generate()

        setError(false)
        setGasto(gasto)
        setCrearGasto(true)

        //Resetear formulario
        setCantidad(0)
        setNombre('')

    }

    return(
        <React.Fragment>
            <h2>Agrega tus gastos</h2>
            {error ? <Error mensaje={mensaje} center='center' /> : null}
            <form onSubmit={handleSubmit}>
                <label>Nombre del Gasto</label>
                <input 
                    type="text" 
                    placeholder="Ej. Transporte"
                    className="u-full-width"
                    name="nombre"
                    value={nombre}
                    onChange={ e => setNombre(e.target.value)}
                />

                <label>Cantidad</label>
                <input 
                    type="number" 
                    placeholder="Ej. 300"
                    className="u-full-width"
                    name="cantidad"
                    value={cantidad}
                    onChange={ e => ( e.target.value ? setCantidad(parseInt(e.target.value.trim())) : setCantidad(e.target.value) )}
                />

                <button type="submit" className="button-primary u-full-width"> Agregar Gasto</button>
            </form>
        </React.Fragment>
    )
}

export default FormularioGastos