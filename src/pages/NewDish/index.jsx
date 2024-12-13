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
import { useState } from "react"

import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"


export function NewDish(){
  const { user} = useAuth()

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)

  
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  function handleAddIngredient(){
    setIngredients( prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter( ingredient => ingredient !== deleted))
  }

  function handleTeste(){
    console.log(name, price, description, ingredients, category, image)
    console.log(user)
  }

  function handleAddImage(event){
    const file = event.target.files[0]

    setImage(file)
  }

  async function handleNewDish(){
    if(!name) {
      return alert('Digite o nome do prato.')
    }

    if(!price){
      return alert("Digite um valor para o prato.")
    }

    if(!description){
      return alert("Faça uma descrição para o prato.")
    }

    if(ingredients.length === 0){
      return alert('Preencha os ingredientes utilizados no prato.')
    }

    if(newIngredient){
      return alert("Você deixou um ingrediente no campo para adicionar, mas não adicionou.")
    }

    if(category === ''){
      return alert("Selecione uma categoria para o prato.")
    }

    if(image === null){
      return alert("Envie uma imagem para o prato.")
    }

    handleTeste()
    
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('category', category)
    formData.append('image_dish', image)
    ingredients.forEach( ingredient => {
      formData.append('ingredients', ingredient)
    })

    try {
      await api.post("/dishes", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      })
      alert('Prato cadastrado com sucesso!')
      navigate('/')
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      }else {
        alert('Não foi possível cadastrar!')
      }
    }
}

  function handleGoBack(){
    navigate(-1)
  }

  return(
    <Container>
      <Header />
      
      <Content >
        <ButtonText onClick={handleGoBack} title={'voltar'} icon={ PiCaretLeft }/>
        
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
                onChange={handleAddImage} 
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
            onChange = {e => setName(e.target.value)}
          />

          <label htmlFor="category">
            Categoria
          </label>
          <Select 
            id='category'
            onChange = {e => setCategory(e.target.value)}
          />

          <label>
            Ingredientes
          </label>
          <div 
            id='ingredients' 
          >
            {
              ingredients.map((ingredient, index) => (
                <NewIngredients 
                  key = {String(index)}
                  value= {ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))
            }
            <NewIngredients 
              isNew 
              placeholder="Adicionar"
              onChange= {e => setNewIngredient(e.target.value)}
              value= {newIngredient}
              onClick={handleAddIngredient}
            />
          </div>

          <label htmlFor="price">Preço</label>
          <Input 
            type="text" 
            id='price' 
            placeholder="R$ 00,00"
            onChange = {e => setPrice(e.target.value)}
          />

          <label htmlFor="price">Descrição</label>
          <TextArea
            type='number'
            id='description'
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange = {e => setDescription(e.target.value)}
          />

          <Button 
            title={'Salvar alterações'}
            onClick = { handleNewDish}
          />

        </Form>

      </Content>
      
      <Footer />
    </Container>
  )
}