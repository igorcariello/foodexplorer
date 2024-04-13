import { Container } from "../ButtonText/styles";

export function ButtonText({title, icon: Icon, ...rest}){
  
  return(
    <Container type="button" {...rest}>
      <a href="">
        {Icon && <Icon size={'2rem'}/>}
        {title}
      </a>
    </Container>
  )
}
