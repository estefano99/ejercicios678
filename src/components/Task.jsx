import React, {useState} from 'react'

function Task({task, contactos, actualizarContactos}) {

    const [estado, setestado] = useState(true)

    function cambiarEstado() {
        setestado(!estado)
    }
    
    function handleDelete(id) {
        let nuevosContactos = contactos.filter( contacto => contacto.id !== id)  //Actualiza la lista de contactos que viene por props.
        actualizarContactos(nuevosContactos) //Funcion que se ejecuta en el padre
    }


  return (
    <>
        <tr>
            <td>Nombre: {task.nombre} </td>
            <td><button onClick={() => cambiarEstado()}>{ estado ? "Conectado" : "Desconectado"}</button> </td>
            <td><button onClick={() => handleDelete(task.id)}>Eliminar</button></td>
        </tr>
    </>
  )
}

export default Task