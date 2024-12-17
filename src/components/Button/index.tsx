import { Container } from "./styles";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  icon?: React.ComponentType<any>
  value?: string
  type?: "submit" | "reset" | "button" | undefined
}

export function Button({title, type, icon: Icon, value,...rest}: ButtonProps){
  
  return(
    <Container type={type} {...rest}>
      {Icon && <Icon size={'1.35rem'}/>}
      {title}
      {value && value}
    </Container>
  )
}
