import { Container } from './styles'
import { Stepper } from '../Stepper'
import { Button } from '../Button'
import { api } from '../../services/api'

import { PiHeart} from "react-icons/pi";
import { CartContext } from '../../contexts/CartContext';
import { useContext, useEffect, useState } from 'react';

interface CardProps {
  data: {
    name:string
    price: number
    image_dish: string
    category: string
    id: number
  }
  onClick: () => void
}

export function Card({data, onClick, ...rest}: CardProps){
  const imageUrl = `${api.defaults.baseURL}/files/${data.image_dish}`;
  const { addItemToCart, cartItems} = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  const productIsCart = cartItems.find((item) => item.id === data.id)
  const initialQuantity = productIsCart ? productIsCart.quantity : 1

  function handleTeste(){
    console.log(cartItems)
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

  const handleAddItemToCart = () => {
    addItemToCart({...data, quantity })
  }

  useEffect(() => {
    setQuantity(initialQuantity)
  }, [initialQuantity])




  return(
    <Container{...rest}>
      <PiHeart/>
      <img onClick={onClick} src={imageUrl} alt="" />
      <h3 onClick={onClick}> {data.name} &rsaquo;</h3>
      <span>
        { 
          new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency:'BRL',
          }).format(data.price)
        }
      </span>
      <Stepper quantity={quantity} onDecrement={handleDecrement} onIncrement={handleIncrement}/>
      <Button title='incluir' onClick={handleAddItemToCart}/>
      <Button title='teste' onClick={handleTeste}/>
    </Container>
  )
}