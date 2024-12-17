import { Container } from './styles'
import { PiPlus, PiMinus} from "react-icons/pi";

interface StepperProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}


export function Stepper({ quantity, onDecrement, onIncrement }: StepperProps){
  return(
    <Container>
      <PiMinus onClick={onDecrement}/>
      <span>{String(quantity).padStart(2, '0')}</span>
      <PiPlus onClick={onIncrement}/>
    </Container>
  )
}