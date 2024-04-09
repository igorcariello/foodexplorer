import {Container, Content} from "./styles"
import { Footer } from "../../components/Footer"
import { Header} from '../../components/Header'
import { Banner } from "../../components/Banner"
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"


import imgLogo from '../../assets/logoImg.svg'

export function Home(){
  const imageLogo = imgLogo

  return(
    <Container>
      <Header />
      <Content >
        <Banner />
        <Section title='Refeições'/>
      </Content>
      <Footer />
    </Container>
  )
}