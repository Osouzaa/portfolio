import { ImagePerfilContainer, ShadowImg } from './styles'

export function ImagePerfil() {
  return (
    <ImagePerfilContainer>
      <img
        src="https://github.com/Osouzaa.png"
        alt="Foto de perfil de Gabriel Souza Alves, desenvolvedor e criador deste portfólio"
        loading="lazy"
      />
      <ShadowImg />
    </ImagePerfilContainer>
  )
}
