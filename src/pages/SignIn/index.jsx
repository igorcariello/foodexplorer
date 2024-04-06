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
        <h1 className="rb-bgest-bold">food explorer</h1>
      </div>
      <h2 className="rb-sm-reg">Email</h2>
      <Input type="email" placeholder="Exemplo: exemplo@exemplo.com.br"/>
    
      <h2 className="rb-sm-reg">Senha</h2>
      <Input type="password" placeholder="No mínimo 6 caracteres"/>
    
      <Button className="pop-100-med" title="Entrar" />
      <ButtonText className="pop-100-med" title='Criar uma conta' />
    
    </Container>
  )
}