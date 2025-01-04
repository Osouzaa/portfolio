import { ImagePerfilContainer, ShadowImg } from './styles'

export function ImagePerfil() {
  return (
    <ImagePerfilContainer>
      <figure>
        <img
          src="https://github.com/Osouzaa.png"
          alt="Foto de perfil de Gabriel Souza Alves, desenvolvedor e criador deste portfólio"
          loading="lazy"
        />
        <figcaption>Gabriel Souza Alves - Desenvolvedor</figcaption>
      </figure>
      <ShadowImg />
    </ImagePerfilContainer>
  )
}
