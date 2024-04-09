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
      <label>Seu nome</label>
      <Input type="text" placeholder="Exemplo: Maria da Silva"/>
    
      <label>Email</label>
      <Input type="password" placeholder="Exemplo: exemplo@exemplo.com.br"/>
    
      <label>Senha</label>
      <Input type="password" placeholder="No mínimo 6 caracteres"/>

      <Button title="Criar conta" />
      <ButtonText title='Já tenho uma conta' />
    
    </Container>
  )
}