import { Container } from './styles'

interface IngredientProps {
  title: string
}

export function Ingredient({title, ...rest}: IngredientProps){

  return(
    <Container {...rest}>
      <p>{title}</p>
    </Container>
  )
}