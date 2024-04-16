import { useState } from 'react'

const ANIMAL_IMAGES = {
        img1: "http://via.placeholder.com/111x111",
        img2: "http://via.placeholder.com/222x222",
        img3: "http://via.placeholder.com/333x333",
    };

const GenerarImg = () => {
    const [img, setImg] = useState("")
    
  return (
    <>
    <button onClick={() => setImg(ANIMAL_IMAGES.img1)}>imagen 1</button>
    <button onClick={() => setImg(ANIMAL_IMAGES.img2)}>imagen 2</button>
    <button onClick={() => setImg(ANIMAL_IMAGES.img3)}>imagen 3</button>
    <br/>
    <img src={img} alt="" />
    </>
  )
}

export default GenerarImg