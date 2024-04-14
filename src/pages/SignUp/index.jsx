import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from '../../components/ButtonText'

import {Container} from "./styles"

import imgLogo from '../../assets/logoImg.svg'

export function SignUp(){
  const imageLogo = imgLogo

  return(
    <Container>
      <div>
        <img src={imageLogo} alt="Logo food explorer" />
        <h1>food explorer</h1>
      </div>
      <label htmlFor="name">Seu nome</label>
      <Input type="text" id='name' placeholder="Exemplo: Maria da Silva"/>
    
      <label htmlFor="email">Email</label>
      <Input type="password" id='email' placeholder="Exemplo: exemplo@exemplo.com.br"/>
    
      <label htmlFor="password">Senha</label>
      <Input type="password" id='password' placeholder="No mínimo 6 caracteres"/>

      <Button title="Criar conta" />
      <ButtonText title='Já tenho uma conta' />
    
    </Container>
  )
}