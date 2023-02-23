import React, { useState } from 'react'

export const LightBulbButton = () => {

    //al hacer click a ese boton rojo y blanco, white red

    const [textAmend, setTextAmend] = useState('Encender');
    const [count, setCounter] = useState(0)
    const [styles, setStyles] = useState('whiteColour');  

    const procedure = () => {
        if(count == 0){
            setTextAmend('Apagar')
            setCounter(1)
        }else{
            setTextAmend('Encender')
            setCounter(0)
        }
    }

    useEffect(() => {
        textAmend == 'Encender' ? setStyles('whiteColour'):setStyles('redColour')
    }, [textAmend]);

  return (
    <>
        <h1>Boton de la bombilla</h1>
        <div className={styles}>bombilla</div>
        <button onClick={procedure}>{textAmend},{count}</button> 
    </>
  )
}
