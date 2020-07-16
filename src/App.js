import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta'
import FormularioGastos from './components/FormularioGastos'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {

  let mostrarPregunta
  let presupuestoGuardado = localStorage.getItem('presupuesto')
  let restanteGuardado = localStorage.getItem('restante')
  let gastosGuardados = JSON.parse(localStorage.getItem('gastos'))

  if(presupuestoGuardado){
    mostrarPregunta = false
  }
  else{
    mostrarPregunta = true
  }

  // eslint-disable-next-line
  const [ presupuesto, setPresupuesto] = useState(presupuestoGuardado)
  const [ restante, setRestante] = useState(restanteGuardado)
  const [ pregunta, setPregunta] = useState(mostrarPregunta)
  const [ gastos, setGastos] = useState(gastosGuardados)
  const [ gasto, setGasto] = useState({})
  const [ crearGasto, setCrearGasto] = useState(false)

  

  
  //Actualiza el restante
  useEffect( () =>{
    if(crearGasto){

      //Set nuevo presupuesto
      setGastos([
        ...gastos,
        gasto
      ])

      setCrearGasto(false)

      let presupuestoRestante 
      presupuestoRestante = restante - gasto.cantidad
      localStorage.setItem('restante',presupuestoRestante)
      setRestante(presupuestoRestante)

    }
  },[gasto,setCrearGasto,gastos,restante,crearGasto])

  localStorage.setItem('gastos',JSON.stringify(gastos))

  const resetPresupuesto = () =>{
    setPresupuesto(0)
    setRestante(0)
    setPregunta(true)
    setGastos([])
    setGasto({})
    setCrearGasto(false)
    localStorage.clear()
  }

  return (

    <React.Fragment>
      <h1>Control de Gastos</h1>      
      <div className="container"> 
        { pregunta 
        ?(
          <Pregunta 
            setRestante={setRestante}
            setPresupuesto={setPresupuesto}
            setPregunta={setPregunta}
            presupuestoGuardado = {presupuestoGuardado}
            
        />) 
        
        :(
          <div className="row">
            <div className="one-half column">
              <FormularioGastos 
                setGasto={setGasto}
                restante={restante}
                setCrearGasto={setCrearGasto}
              />

              <ControlPresupuesto 
                restante={restante}
                presupuesto={presupuesto}
                resetPresupuesto={resetPresupuesto}
              />              
            </div>
            <div className="one-half column">
              <Listado gastos={gastos} />
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

export default App;
