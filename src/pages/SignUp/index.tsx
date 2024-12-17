import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from '../../components/ButtonText'

import {Container} from "./styles"

import imgLogo from '../../assets/logoImg.svg'
import { useState } from "react"

import { useNavigate } from 'react-router-dom'

import { api } from "../../services/api"

export function SignUp(){
  const imageLogo = imgLogo

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleGoSignIn() {
    navigate('/')
  }

  function handleSignUp(){
    
    if(!name || !email || !password){
      return alert ("Preencha todos os campos!")
    }

    api.post("/users", { name, email, password })
    .then(()=> {
      alert('Usuário cadastrado com sucesso!')
      navigate('/')
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possível cadastrar!")
      }
    })
  }



  return(
    <Container>
      <div>
        <img src={imageLogo} alt="Logo food explorer" />
        <h1>food explorer</h1>
      </div>
      
      <label htmlFor="name">Seu nome</label>
      <Input 
        type="text" 
        id='name' 
        placeholder="Exemplo: Maria da Silva"
        onChange={e => setName(e.target.value)}
      />
    
      <label htmlFor="email">Email</label>
      <Input 
        type="email" 
        id='email' 
        placeholder="Exemplo: exemplo@exemplo.com.br"
        onChange={e => setEmail(e.target.value)}
      />
    
      <label htmlFor="password">Senha</label>
      <Input 
        type="password" 
        id='password' 
        placeholder="No mínimo 6 caracteres"
        onChange={e => setPassword(e.target.value)}
      />

      <Button title="Criar conta" onClick={handleSignUp}/>
      <ButtonText onClick={handleGoSignIn} title='Já tenho uma conta' />
    
    </Container>
  )
}