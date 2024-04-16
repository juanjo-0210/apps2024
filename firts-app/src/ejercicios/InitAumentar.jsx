import React from 'react'
import Aumentar from './Aumentar';
import {useState} from 'react';

const InitAumentar = () => { 
    const [valor,setValor] = useState(0)

    return (
    <>
        <Aumentar
            valor={valor}
            setValor={setValor}
        />
        <div>
            {valor}
        </div> 
    </>
)
}
export default InitAumentar