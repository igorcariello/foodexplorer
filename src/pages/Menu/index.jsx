import { Container, HeaderMenu, Content } from "./styles";

import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'

import { PiX, PiMagnifyingGlassLight } from "react-icons/pi";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";


export function Menu(){
  const { signOut } = useAuth()
  const navigate = useNavigate()

  function handleGoToHome(){
    navigate('/')
  }

  function handleSignOut(){
    signOut()
    navigate(-1)
  }

  return(
    <Container>
      <HeaderMenu>
        <PiX onClick={handleGoToHome}/>
        <h2>Menu</h2>
      </HeaderMenu>
      <Content>
        <Input 
          type='text'
          icon={PiMagnifyingGlassLight}
          placeholder='Busque por pratos ou ingredientes'
        />
        <ul>
          <li onClick={handleSignOut}>Sair</li>
        
        </ul>
      </Content>
      <Footer />
    </Container>
  )
}