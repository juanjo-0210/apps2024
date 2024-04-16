import { useState } from 'react'

const UseState = () => {
    const [moneda,setMoneda] = useState(0)
    const [temp,setTemp] = useState(0)

  return (
    <>
    <div>
        <input type="text" onChange={e => setMoneda(e.target.value)}/>
        <output>{moneda * 2}</output>
    </div>
    <div>
        <input type="text" onChange={e => setTemp(e.target.value   * 9/5 +32)}/>
        <output>{temp}</output>
    </div>
    </>
  )
}

export default UseState