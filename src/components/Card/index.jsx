import { Container } from './styles'
import { Stepper } from '../Stepper'
import { Button } from '../Button'

import { PiHeart} from "react-icons/pi";

import ravanelloXS from '../../assets/ravanelloXS.svg'

export function Card({...rest}){
  const imageRavanelloXs = ravanelloXS
  return(
    <Container>
      <PiHeart/>
      <img src={imageRavanelloXs} alt="" />
      <h3> Salada Ravanello &rsaquo;</h3>
      <span>R$ 49,97</span>
      <Stepper />
      <Button title='incluir'/>
    </Container>
  )
}