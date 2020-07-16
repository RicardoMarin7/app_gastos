import React from 'react'
import Gasto from './Gasto'

const Listado = ({gastos}) =>{

    if(gastos){
        return(
            <ul>
                {gastos.map( gasto =>(
                    <Gasto 
                        key={gasto.id}
                        gasto={gasto} 
                    />
                ))}
            </ul>
        )
    }

    else{
        return(
            <h2>No hay gastos</h2>
        )

    }
}

export default Listado