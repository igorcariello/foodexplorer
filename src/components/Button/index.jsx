import { Container } from "../Button/styles";

export function Button({title, icon: Icon, value,...rest}){
  
  return(
    <Container type="button" {...rest}>
      {Icon && <Icon size={'1.35rem'}/>}
      {title}
      {value && value}
    </Container>
  )
}
