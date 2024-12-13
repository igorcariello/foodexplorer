import { PiReceipt, PiList } from "react-icons/pi";

import { Container } from "../Header/styles";
import { useNavigate } from "react-router-dom";

export function Header(){
  const navigate = useNavigate()
  
  function handleGoToMenu(){
    navigate('menu')
  }

  return(
    <Container>
      <PiList onClick={handleGoToMenu} fill="#ffffff"/>
      <div>
        <svg width="1.5rem" height="1.5rem" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C"/>
        </svg>
        <h1 className="rb-bg-bold">food explorer</h1>
      </div>
      <div>
        <PiReceipt fill="#ffffff"/>
        <div>
          <p className="pop-100-med">0</p>
        </div>       
      </div>
    </Container>
  )
}
