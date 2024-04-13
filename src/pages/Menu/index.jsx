import { Container, HeaderMenu, Content } from "./styles";

import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'

import { PiX, PiMagnifyingGlassLight } from "react-icons/pi";


export function Menu(){
  return(
    <Container>
      <HeaderMenu>
        <PiX/>
        <h2>Menu</h2>
      </HeaderMenu>
      <Content>
        <Input 
          type='text'
          icon={PiMagnifyingGlassLight}
          placeholder='Busque por pratos ou ingredientes'
        />
        <ul><li>Sair</li></ul>
      </Content>
      <Footer />
    </Container>
  )
}