import React from 'react'

import './styles/Error.css'

const Error = ({mensaje}) => (
    <p className="alert alert-danger">{mensaje}</p>
)

export default Error