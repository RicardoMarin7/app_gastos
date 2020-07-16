import React from 'react'

const Error = ({mensaje, center}) => (
    <p className={`alert alert-danger ${center}`}>{mensaje}</p>
)

export default Error