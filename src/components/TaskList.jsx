import React, {useState, useEffect} from 'react'
import Form from "./Form.jsx";
import Task  from "./Task.jsx";

function TaskList({actualizarContactos}) {

    const [contactos, setContactos] = useState([])

    const handleAgregarContacto = (nuevoContacto) => {
        setContactos([...contactos,nuevoContacto])
        console.log(contactos)
    }
    function actualizarContactos(nuevosContactos) {
        setContactos(nuevosContactos)
    }
    
  return (
    <div>

        <Form onSubmit={handleAgregarContacto} ></Form>

        <table style={{marginTop:"20px"}}>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Eliminar</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {
                    contactos.map( contacto => (
                        <Task key={contacto.id} task={contacto} contactos={contactos} actualizarContactos={actualizarContactos}></Task>
                    ))
                }
            </tbody>
        </table>
        
    </div>
  )
}

export default TaskList