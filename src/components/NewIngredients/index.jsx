import { Container } from "./styles";
import { PiPlusLight, PiXLight } from "react-icons/pi";


export function NewIngredients({ isNew, onClick, ...rest}){
  return(
    <Container isNew={isNew}>
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