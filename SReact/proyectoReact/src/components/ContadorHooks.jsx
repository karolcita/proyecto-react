//rfc
import React, { useState} from 'react'

export default function ContadorHooks() {
    const [contador, setContador] = useState(0) //hook usestate
    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1)
  return (
    //esto es un fragment
    <>
    <h2>ContadorHooks</h2>
    <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
    </nav>
    <h3> {contador} </h3>
    </>
    
  )
}

