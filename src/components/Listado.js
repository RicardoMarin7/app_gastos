import React from 'react'
import Gasto from './Gasto'

const Listado = ({gastos}) =>(
    <React.Fragment>
        <h2>Listado de Gastos</h2>
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

export default Listado