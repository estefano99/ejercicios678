import React, {useState} from 'react'

function Form(props) {

    const [nombre, setnombre] = useState("")

    function handleChange(e) {
        setnombre(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const nuevoContacto = {
            nombre: nombre,
            id: Math.random(),
        }
        props.onSubmit(nuevoContacto);
        setnombre("");
    }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Registrar contacto</h1>
        <input placeholder='Ingresar nombre' onChange={handleChange} />
        <button>Registrar</button>
    </form>
  )
}

export default Form