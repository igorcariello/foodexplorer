import {Container} from "./styles"
import { Footer } from "../../components/Footer"
import { Header} from '../../components/Header'

import { } from '../../styles/theme'

import imgLogo from '../../assets/logoImg.svg'

export function Home(){
  const imageLogo = imgLogo

  return(
    <Container>
      <Header />
      <Footer />
    </Container>
  )
}