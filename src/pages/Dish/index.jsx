import {Container, Content} from "./styles"

import { Footer } from "../../components/Footer"
import { Header} from '../../components/Header'
import { Stepper } from '../../components/Stepper'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Ingredient } from "../../components/Ingredient";

import { PiCaretLeft, PiReceipt } from "react-icons/pi";

import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api"


export function Dish(){
  const [dish, setDish]=useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const navigate = useNavigate()
  const { dish_id } = useParams()

  function handleGoBack(){
    navigate('/')
  }

  useEffect(() => {
    async function loadDish(){
      try { 
        const response = await api.get(`/dishes/${dish_id}`)
        setDish(response.data)
      } catch (error) {
        console.error('Erro ao carregar prato', error)
      }
    }

    loadDish()
  }, [dish_id])

  useEffect(()=> {
    if(dish) {
      setImageUrl(`${api.defaults.baseURL}/files/${dish.image_dish}`)
    }
  }, [dish])
  console.log(imageUrl)
  return(
    <Container>
      <Header />
      <Content >
      {dish ? ( // Renderização condicional usando o operador ternário
          <>
            <ButtonText title={'voltar'} icon={PiCaretLeft} onClick={handleGoBack} />
            <img src={imageUrl} alt={dish.name} /> {/* Adicione o alt para acessibilidade */}
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
            <div>
              {dish.ingredients.map((ingredient, index) => (
                <Ingredient key={index} title={ingredient.name} />
              ))}
            </div>
            <div>
              <Stepper />
              <Button 
                title={'pedir ∙ '} 
                icon={PiReceipt} 
                value={`${ 
                            new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency:'BRL',
                            }).format(dish.price)
                }`} 
              /> 
            </div>
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </Content>
      <Footer />
    </Container>
  )
}