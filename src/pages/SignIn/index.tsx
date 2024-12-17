import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from '../../components/ButtonText'

import {Container} from "./styles"

import imgLogo from '../../assets/logoImg.svg'

import { useAuth } from "../../hooks/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function SignIn(){
  const imageLogo = imgLogo
  const navigate = useNavigate()

  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleGoSignUp(){
    navigate('/signup')
  }
  function handleSignIn(){
    signIn({ email, password})
  }

  return(
    <Container>
      <div>
        <img src={imageLogo} alt="Logo food explorer" />
        <h1>food explorer</h1>
      </div>
      <label htmlFor="email">Email</label>
      <Input 
        type="email" 
        id='email' 
        placeholder="Exemplo: exemplo@exemplo.com.br"
        onChange={ e => setEmail(e.target.value)}  
      />
    
      <label htmlFor="password">Senha</label>
      <Input 
        type="password" 
        id='password' 
        placeholder="No mínimo 6 caracteres"
        onChange={ e => setPassword(e.target.value)}  
      />
    
      <Button title="Entrar" onClick= { handleSignIn }/>
      <ButtonText onClick={handleGoSignUp} title='Criar uma conta' />
    
    </Container>
  )
}