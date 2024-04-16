import {useState} from 'react';


const Aumentar = ({valor,setValor}) => {
    

    // const cambiarValor = v => {
    //     if (v === "-") {
    //         setValor(valor-1)
    //     }else{
    //         setValor(valor+1)
    //     }
    // }
    //extraerValor(valor)
    
  return (
    <div>
        <button className='size-10 border border-black text-3xl bg-blue-500' onClick={() => setValor(valor-1)}>-</button>
        <input className=' border-black border' type="text" name="" id="" value={valor} onChange={e => setValor(e.target.value)}/>
        <button className='size-10 border border-black text-3xl bg-blue-500' onClick={() => setValor(valor+1)}>+</button>
    </div>
  )
}

export default Aumentar