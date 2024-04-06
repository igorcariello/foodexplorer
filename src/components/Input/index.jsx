import { Container } from './styles'

export function Input({...rest}){

  return(
    <Container>
      <input {...rest} className='rb-sm-reg' />
    </Container>
  )
}