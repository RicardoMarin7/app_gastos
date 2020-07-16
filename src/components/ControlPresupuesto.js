import React from 'react'
import { revisarPresupuesto } from '../helpers'

const ControlPresupuesto = ({presupuesto,restante, resetPresupuesto}) =>{

    return(
        <React.Fragment>
            <div className="alert alert-none">
                <p>Presupuesto: ${presupuesto}</p>
            </div>

            <div className={revisarPresupuesto(presupuesto,restante)}>
                <p>Restante: ${restante}</p>
            </div>

            <button className="u-full-width button-primary" onClick={resetPresupuesto}>Nuevo Presupuesto</button>
        </React.Fragment>
    )
}

export default ControlPresupuesto