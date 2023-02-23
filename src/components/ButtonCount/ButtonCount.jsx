import React from 'react'
import { useState, useEffect } from 'react'
//useState es un Hook que permite añadir el estado de React a un componente de función.
//useEffect, al usar este hook, le estamos indicando a React que el componente tiene que hacer algo después de renderizarse.
import './ButtonCount.css'

export const ButtonCount = () => {

        // primer posicion: valor inicial
        //Segunda posición: función que va alterar variable
        
        const [counter, setCounter] = useState(0);
        const [styles, setStyles] = useState('minor');
        
        const handleAdd = () => {
            setCounter(counter+1)
        }
        const handleRemove = () => {
            setCounter(counter-1)
        }
        const Reset = () => {
            setCounter(0)
        }

        useEffect(() => {
            counter >= 10 ? setStyles('max'):setStyles('minor')
            //Ternario == condicion ? true : false
        }, [counter]);
        //variable de dependencia: Cuando las llaves estan vacias, ej: [] solo se aplica una vez, cuando se ejecuta la pagina
        //cuando las llaves tienen algo por dentro, ej: [counter] es cuando se necesita cambiar, cada vez que la variable de dependencia hace click 

    return (
        <>
            <h2 className= {styles}>{ counter }</h2>
            <button onClick={handleAdd}>Sumar</button>
            <button onClick={handleRemove}>Restar</button>
            <button onClick={Reset}>Resetear</button>
        </>
    )
}
