import React from "react";
import { Container } from "./styles";

interface ButtonTextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  icon?: React.ComponentType<any>
}

export function ButtonText({title, icon: Icon, ...rest}: ButtonTextProps){
  
  return(
    <Container type="button" {...rest}>
      <a href="">
        {Icon && <Icon size={'2rem'}/>}
        {title}
      </a>
    </Container>
  )
}
