import React, { useEffect, useState } from 'react'
import { getItems } from '../service/hilos'
import { Task } from '../common/types/task'

const Hilos = () => {
  const [hilos,setHilos] = useState<string>('')
  const [printHilo,setPrintHilo] = useState<Task[]>()


  useEffect(() => {
    getItems().then(data => setPrintHilo(data))
  },[])
  return (
    <div>
      <input type="text" value={hilos} onChange={e => setHilos(e.target.value)}/>
    </div>
  )
}

export default Hilos