import { Container } from './styles'
import { Card } from '../Card'

export function Section({title , ...rest}){
  return(
    <Container {...rest}>
      <h2>{title}</h2>
      <Card />
    </Container>
  )
}