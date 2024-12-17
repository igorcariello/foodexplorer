import { Container } from './styles'

interface InputProps {
  icon?: React.ComponentType<any>
  type: string
  id?: string
  placeholder?: string
  onChange?: (e: any) => void
}

export function Input({icon:Icon, onChange, placeholder, id, type, ...rest}: InputProps){

  return(
    <Container>
      {Icon && <Icon size={24} />}
      <input onChange={onChange} id={id} placeholder={placeholder} type={type} {...rest} />
    </Container>
  )
}