import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita'

function App() {

  //Citas en el localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
 console.log(citasIniciales)
  if (!citasIniciales){
    citasIniciales = [];
  }
  //Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales)

  //el state cambio
  useEffect( () =>{
    console.log('El state cambio')
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    } 
  },[citas] );
 
  //toma citas actuales y agrega la nueva
  const crearCita = cita =>{
    guardarCitas([
      ...citas,
      cita
    ]);  
  }
  const eliminarCita = id =>{
    //console.log(id)
    const nuevascitas = citas.filter(cita => cita.id !== id)
    console.log(nuevascitas)
    guardarCitas(nuevascitas)
  }
  console.log(citas.length);

  const titulo = citas.length===0  ?'No hay citas ' :'Administra tus citas'
  return (
    <Fragment>
        <h1>Administrador de Pacientes</h1>
        <div className="container">
          <div className="row">
              <div className="col-sm">
                <Formulario
                  crearCita={crearCita}
                />
              </div>
              <div className="col-sm">
                <h3>{titulo}</h3>
                {citas.map((cita)=>
                  <Cita 
                    key = {cita.id}
                    cita = {cita}
                    eliminarCita = {eliminarCita}
                  />
                )}
              </div>
          </div>
          
        </div>
    </Fragment>
    
  );
}

export default App;
