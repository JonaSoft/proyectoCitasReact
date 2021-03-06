import React,{Fragment,useState} from 'react';
import {v4 as uuid} from 'uuid';

const Formulario = ({crearCita}) => {

    //Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [ error, actualizarError ] = useState(false)

    //funcion al escribir en el input
    const actualizarState = (e)=>{
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

     // Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

     // Cuando el usuario presiona agregar cita
    const submitCita = e => {
        e.preventDefault();
 
        // Validar
        if(mascota.trim() === '' || propietario.trim() === ''  || fecha.trim() === ''  || hora.trim() === ''  || sintomas.trim() === '' ){
            actualizarError(true);
            return;
        }
        
        actualizarError(false);

        // Asignar un ID
        cita.id = uuid();

        // Crear la cita
        crearCita(cita);

        // Reiniciar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return (
        <Fragment>
            <h3>Datos de Cita</h3>
            { error ? <p className="alerta-error">Todos los campos son obligatorios</p>   : null}
            <form
                 onSubmit={submitCita}
            >
            <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="form-control"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="form-control"
                    placeholder="Nombre  Dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="form-control"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="form-control"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Síntomas</label>
                <textarea
                    className="form-control"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                
                <button
                    type="submit"
                    className="form-control mt-3 btn-primary"
                >Agregar Cita</button>
            </form> 
        </Fragment>
            
            

      );
}
 
export default Formulario;