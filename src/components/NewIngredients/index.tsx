import { Container } from "./styles";
import { PiPlusLight, PiXLight } from "react-icons/pi";

interface NewIngredientsProps {
  isNew?: boolean | undefined
  onClick?: () => void
  placeholder?: string
  value?: string
  onChange?: (e:any) => void

}

export function NewIngredients({ isNew, onClick, ...rest}: NewIngredientsProps){
  return(
    <Container isNew={isNew} {...rest}>
      <input 
        type="text" 
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={ onClick }
        className={ isNew? 'button-add': 'button-delete'}
      >
        { isNew ? <PiPlusLight/> : <PiXLight/>}
      </button>

    </Container>
  )
}