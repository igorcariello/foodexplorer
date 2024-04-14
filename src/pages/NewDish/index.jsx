import {Container, Content, Form} from "./styles"

import { Footer } from "../../components/Footer"
import { Header} from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { NewIngredients } from '../../components/NewIngredients'

import { PiCaretLeft, PiUploadSimple } from "react-icons/pi";
import { TextArea } from "../../components/TextArea"


export function NewDish(){

  return(
    <Container>
      <Header />
      
      <Content >
        <ButtonText title={'voltar'} icon={ PiCaretLeft }/>
        
        <h2>Novo Prato</h2>
        
        <Form>
        
          <label className='imageDish' htmlFor="imageDish">
            Imagem do prato
            <div>
              <PiUploadSimple />
              <p>Selecione imagem</p>
              <Input 
                type="file" 
                placeholder="Selecione a imagem"
                id='imageDish' 
              />
            </div>
          </label>


          <label htmlFor="name">
            Nome
          </label>
          <Input 
            type="text" 
            id='name' 
            placeholder="Ex.: Salada Ceasar"
          />

          <label htmlFor="category">
            Categoria
          </label>
          <Select 
            id='category'
          />

          <label>
            Ingredientes
          </label>
          <div 
            id='ingredients' 
          >
            <NewIngredients />
            <NewIngredients isNew placeholder="Adicionar"/>
          </div>

          <label htmlFor="price">Preço</label>
          <Input 
            type="text" 
            id='price' 
            placeholder="R$ 00,00"
          />

          <label htmlFor="price">Descrição</label>
          <TextArea
            type='number'
            id='description'
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          />

          <Button 
            type='text'
            title={'Salvar alterações'}
          />

        </Form>

      </Content>
      
      <Footer />
    </Container>
  )
}