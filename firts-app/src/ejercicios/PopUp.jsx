
import { Popup } from "../app/styles"

const PopUp = ({back,setBack,setIncrement,children}) => {
    

return (
    
    <Popup
        visible={back}
    >
        <button onClick={() => {
            setBack (!back)
            setIncrement(0)
            }}>Cerrar</button>
        <div> 
            {children}
        </div>
    </Popup>
  )
}

export default PopUp