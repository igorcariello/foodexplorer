import { Container } from './styles'

export function Select({...rest}){

  return(
    <Container>
      <select {...rest}>
        <option value={''}> Selecione uma opção </option>
        <option value={"Refeição"}> Refeição </option>
        <option value= {"Sobremesa"}> Sobremesa </option>
        <option value={"Prato Principal"}> Prato Principal </option>
      
      </select>
    </Container>
  )
}