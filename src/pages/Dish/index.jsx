import {Container, Content} from "./styles"

import { Footer } from "../../components/Footer"
import { Header} from '../../components/Header'
import { Stepper } from '../../components/Stepper'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Ingredient } from "../../components/Ingredient";

import { PiCaretLeft, PiReceipt } from "react-icons/pi";

import ravanelloDish from '../../assets/ravanelloXS.svg'

export function Dish(){
  const ravanello = ravanelloDish

  return(
    <Container>
      <Header />
      <Content >
        <ButtonText title={'voltar'} icon={ PiCaretLeft }/>
        <img src={ravanello} alt="" />
        <h2>Salada Ravanello</h2>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
        <div>
          <Ingredient title={"alface"} />
          <Ingredient title={"cebola"} />
          <Ingredient title={"pão naan"} />
          <Ingredient title={"pepino"} />
          <Ingredient title={"rabanete"} />
          <Ingredient title={"tomate"} />
        </div>
        <div>
          <Stepper />
          <Button title={'pedir ∙ '} icon={PiReceipt} value={' R$ 25,00'}></Button>
        </div>        
      </Content>
      <Footer />
    </Container>
  )
}