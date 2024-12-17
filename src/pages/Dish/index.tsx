
import { Footer } from "../../components/Footer"
import { Header} from '../../components/Header'
import { Stepper } from '../../components/Stepper'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Ingredient } from "../../components/Ingredient";

import { PiCaretLeft, PiReceipt } from "react-icons/pi";

import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { Container, Content } from "./styles"
import { CartContext } from "../../contexts/CartContext"


interface IngredientProps{
  name:string
}

export function Dish(){
  const [dish, setDish] = useState<
  | {
      ingredients: IngredientProps[];
      image_dish: string;
      name: string;
      description: string;
      price: number;
      id: number;
      category: string;
    }
  | null
>(null);

  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined)
  const navigate = useNavigate()
  const { dish_id } = useParams()
  const {cartItems, addItemToCart} = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)
  
  const productIsCart = cartItems.find((item) => item.id === dish?.id)
  const initialQuantity = productIsCart?.quantity || 1

  const handleAddItemToCart = () => {
    if (dish){
      const itemToAdd = {...dish, quantity, category: dish.category}
      const itemExists = cartItems.find((item) => item.id === dish.id)

      if(itemExists){
        const updatedCartItems = cartItems.map((item) => 
          item.id === dish.id ? {...item, quantity}: item
        )

        addItemToCart(updatedCartItems)
      }else {
        addItemToCart(itemToAdd)
      }
    }
  }
  
  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }
  
  const handleDecrement = () => {
    if(quantity == 1){
      return alert('É necessário incluir pelo menos 1 item')
    }
    setQuantity(quantity - 1)
  }
  
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
  
  useEffect(() => {
    setQuantity(initialQuantity)
  }, [initialQuantity])
  
  useEffect(()=> {
    if(dish) {
      setImageUrl(`${api.defaults.baseURL}/files/${dish.image_dish}`)
    }
  }, [dish])
  

  return(
    <Container>
      <Header />
      <Content >
      {dish ? ( 
          <>
            <ButtonText title={'voltar'} icon={PiCaretLeft} onClick={handleGoBack} />
            <img src={imageUrl} alt={dish.name} /> 
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
            <div>
              {dish.ingredients.map((ingredient, index) => (
                <Ingredient key={index} title={ingredient.name} />
              ))}
            </div>
            <div>
              <Stepper 
                onDecrement={handleDecrement} 
                onIncrement={handleIncrement} 
                quantity={quantity} 
              />
              <Button 
                title={'pedir ∙ '} 
                icon={PiReceipt} 
                value={`${ 
                            new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency:'BRL',
                            }).format(dish.price)
                }`}
                onClick={handleAddItemToCart} 
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