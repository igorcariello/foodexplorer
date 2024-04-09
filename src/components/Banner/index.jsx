import { Container } from './styles'
import imageBanner from "../../assets/imageBanner.png"

export function Banner(){
  const imageBannerCookies = imageBanner
  return(
    <Container>
      <img src={imageBannerCookies} alt="Imagem do banner" />
      <div>
        <h2>Sabores inigualáveis</h2>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </div>
    </Container>
  )
}