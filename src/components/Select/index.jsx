import { Container } from './styles'

export function Select({...rest}){

  return(
    <Container>
      <select {...rest}>
        <option defaultValue value="lunch">Refeição</option>
        <option value="start"> - </option>
      </select>
    </Container>
  )
}