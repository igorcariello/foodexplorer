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
        <h1 className="rb-bgest-bold">food explorer</h1>
      </div>
      <h2 className="rb-sm-reg">Seu nome</h2>
      <Input type="text" placeholder="Exemplo: Maria da Silva"/>
    
      <h2 className="rb-sm-reg">Email</h2>
      <Input type="password" placeholder="Exemplo: exemplo@exemplo.com.br"/>
    
      <h2 className="rb-sm-reg">Senha</h2>
      <Input type="password" placeholder="No mínimo 6 caracteres"/>

      <Button className="pop-100-med" title="Criar conta" />
      <ButtonText className="pop-100-med" title='Já tenho uma conta' />
    
    </Container>
  )
}