import { Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import './styles'

import { Pagination, FreeMode } from 'swiper/modules'

import {Container, ContainerMesseger, Content} from "./styles"
import { Footer } from "../../components/Footer"
import { Header} from '../../components/Header'
import { Banner } from "../../components/Banner"
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { Spinner } from '../../components/Spinner'

interface IngredientProps{
  name: string
}

interface DishProps {
  name:string
  price: number
  image_dish: string
  category: string
  id: number
  description: string
  ingredients: IngredientProps[]
}

export function Home(){
  const [dishes, setDishes] = useState<DishProps[]>([])
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)


  function handleGoDish(dish_id: number) {
    navigate(`/dish/${dish_id}`)
  }
  
  function filterDishesByCategory(category: string) {
    return dishes.filter(dish => dish.category === category)
  }
  
  useEffect(()=> {
    async function fetchDishes() {
      setIsLoading(true)
      try{
        const response = await api.get(`/dishes/`)
        setDishes(response.data)
      } catch (error){
        console.log('Erro ao carregar prato', error)
      } finally {
        setIsLoading(false)
      }
        
    }

    fetchDishes()
  }, [])

  return(
    <Container>
      <Header />
      <Content >
        {isLoading ? (
          <Spinner/>
        ) : (
          <>
            <Banner />
            <Section title='Refeições'>
            { 
              filterDishesByCategory('Refeição').length == 0 ?
                <ContainerMesseger>
                  <p>Desculpe, não há refeição cadastrada...</p>
                </ContainerMesseger> :
                <Swiper
                  slidesPerView={2}
                  spaceBetween={'1.5rem'}
                  freeMode={true}
                  pagination={{clickable:true}}
                  modules={[FreeMode, Pagination]}
                  className="mySwiper"
                  breakpoints={
                  {800: {
                    slidesPerView: 4,
                    spaceBetween:"3.5rem"
                  }}
                }
            >
                {filterDishesByCategory('Refeição').map( dish => (
                  <SwiperSlide key={dish.id}>
                    <Card onClick={() => handleGoDish(dish.id)} data={dish}/>
                  </SwiperSlide>
                ))}
              </Swiper>
            }
            </Section>
            <Section title='Pratos principais'>
          { 
            filterDishesByCategory('Prato Principal').length == 0 ?
              <ContainerMesseger>
                <p>Desculpe, não há prato principal cadastrada...</p>
              </ContainerMesseger> :
              <Swiper
              slidesPerView={2}
              spaceBetween={'1.5rem'}
              freeMode={true}
              pagination={{clickable:true}}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
              breakpoints={
                {800: {
                  slidesPerView: 4,
                  spaceBetween:"3.5rem"
                }}
              }
            >
              {filterDishesByCategory('Prato Principal').map( dish => (
                <SwiperSlide key={dish.id}>
                  <Card onClick={() => handleGoDish(dish.id)} data={dish}/>
                </SwiperSlide>
              ))}
            </Swiper>
          }
            </Section>
            <Section title='Sobremesas'>
          { 
            filterDishesByCategory('Sobremesa').length == 0 ?
              <ContainerMesseger>
                <p>Desculpe, não há sobremesa cadastrada...</p>
              </ContainerMesseger> :
              <Swiper
              slidesPerView={2}
              spaceBetween={'1.5rem'}
              freeMode={true}
              pagination={{clickable:true}}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
              breakpoints={
                {800: {
                  slidesPerView: 4,
                  spaceBetween:"3.5rem"
                }}
              }
            >
              {filterDishesByCategory('Sobremesa').map( dish => (
                <SwiperSlide key={dish.id}>
                  <Card onClick={() => handleGoDish(dish.id)} data={dish}/>
                </SwiperSlide>
              ))}
            </Swiper>
          }
            </Section>
          </>

        )

        }
      </Content>
      <Footer />
    </Container>
  )
}