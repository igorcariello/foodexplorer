import { Container } from './styles'

interface TextAreaProps {
  onChange?: (e:any) => void
  id: string
  placeholder: string
  
}

export function TextArea({id, ...rest}: TextAreaProps){

  return(
    <Container>
      <textarea id={id} {...rest} />
    </Container>
  )
}