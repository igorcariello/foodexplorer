import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from '../../components/ButtonText'

import {Container} from "./styles"

import imgLogo from '../../assets/logoImg.svg'

export function SignIn(){
  const imageLogo = imgLogo

  return(
    <Container>
      <div>
        <img src={imageLogo} alt="Logo food explorer" />
        <h1>food explorer</h1>
      </div>
      <label htmlFor="email">Email</label>
      <Input type="email" placeholder="Exemplo: exemplo@exemplo.com.br"/>
    
      <label htmlFor="password">Senha</label>
      <Input type="password" placeholder="No mínimo 6 caracteres"/>
    
      <Button title="Entrar" />
      <ButtonText title='Criar uma conta' />
    
    </Container>
  )
}