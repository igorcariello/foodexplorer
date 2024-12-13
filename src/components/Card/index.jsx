import { Container } from './styles'
import { Stepper } from '../Stepper'
import { Button } from '../Button'
import { api } from '../../services/api'

import { PiHeart} from "react-icons/pi";


export function Card({data, onClick, ...rest}){
  const imageUrl = `${api.defaults.baseURL}/files/${data.image_dish}`;
  return(
    <Container{...rest}>
      <PiHeart/>
      <img onClick={onClick} src={imageUrl} alt="" />
      <h3 onClick={onClick}> {data.name} &rsaquo;</h3>
      <span>
        { 
          new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency:'BRL',
          }).format(data.price)
        }
      </span>
      <Stepper />
      <Button title='incluir'/>
    </Container>
  )
}