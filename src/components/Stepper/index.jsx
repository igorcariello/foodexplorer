import { Container } from './styles'
import { PiPlus, PiMinus} from "react-icons/pi";

export function Stepper(){
  return(
    <Container>
      <PiMinus/>
      <span>01</span>
      <PiPlus/>
    </Container>
  )
}