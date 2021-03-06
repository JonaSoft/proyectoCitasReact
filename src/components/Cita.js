import React,{Fragment} from 'react';
const Cita = ({cita, eliminarCita}) => {
    const {id,mascota,propietario,fecha,hora,sintomas} = cita;
    return (
        <Fragment>
            <div className="cita">
                <p>Mascota:<span>{mascota}</span></p>
                <p>Propietario:<span>{propietario}</span></p>
                <p>Fecha:<span>{fecha}</span></p>
                <p>Hora:<span>{hora}</span></p>
                <p>Sintomas:
                    
                        <textarea 
                            readOnly
                            className="form-control" 
                            value = {sintomas}  
                        >
                        </textarea>
                    
                        </p>
                <button
                className="button btn-danger form-control"
                onClick={ () => eliminarCita(id) }
                >Eliminar </button>
            </div>
        </Fragment> 

      );
}
 
export default Cita;
