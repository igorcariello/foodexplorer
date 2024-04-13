import { Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import './styles'

import { Pagination, FreeMode } from 'swiper/modules'

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
        <Section title='Refeições'>
          <Swiper
            slidesPerView={2}
            spaceBetween={'1.5rem'}
            freeMode={true}
            pagination={true}
            el=".swiper-pagination"
            clickable='true'
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            breakpoints={
             {800: {
              slidesPerView: 4,
              spaceBetween:"3.5rem"
             }}
            }
          >
            <SwiperSlide><Card /> </SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
x          </Swiper>
        </Section>
        <Section title='Pratos principais'>
          <Card/>
        </Section>
        <Section title='Sobremesas'>
          <Card/>
        </Section>
      </Content>
      <Footer />
    </Container>
  )
}