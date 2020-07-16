import React from 'react'

const Gasto = ({gasto}) =>(
    <li>{gasto.nombre} <span>${gasto.cantidad}</span></li>
)

export default Gasto