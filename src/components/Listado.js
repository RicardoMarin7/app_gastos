import React from 'react'
import Gasto from './Gasto'

const Listado = ({gastos}) =>{
    if(gastos.length > 0){
        console.log(gastos)
        return(
            <React.Fragment>
                <h2>Lista de Gastos</h2>
                <ul>
                    {gastos.map( gasto =>(
                        <Gasto 
                            key={gasto.id}
                            gasto={gasto} 
                        />
                    ))}
                </ul>
            </React.Fragment>
        )
    }

    else{
        return(
            <h2>No hay gastos</h2>
        )

    }
}

export default Listado