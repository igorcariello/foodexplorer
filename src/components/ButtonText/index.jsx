import { Container } from "../ButtonText/styles";

export function ButtonText({title, className, ...rest}){
  
  return(
    <Container className={className} type="button" {...rest}>
      {title}
    </Container>
  )
}
