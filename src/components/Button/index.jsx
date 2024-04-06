import { Container } from "../Button/styles";

export function Button({title, className, ...rest}){
  
  return(
    <Container className={className} type="button" {...rest}>
      {title}
    </Container>
  )
}
