import { ReactNode } from 'react'
import { Container } from './styles'

interface SectionProps {
  title: string
  children: ReactNode
}

export function Section({title, children , ...rest}: SectionProps){
  return(
    <Container {...rest}>
      <h2>{title}</h2>
      <div>{children}</div>
    </Container>
  )
}