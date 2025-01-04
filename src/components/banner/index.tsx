import { FaGithub } from 'react-icons/fa' // Para o GitHub
import { SiLinkedin, SiInstagram } from 'react-icons/si' // Para LinkedIn, Twitter e Instagram
import { LuDot } from 'react-icons/lu'
import { CiLocationOn } from 'react-icons/ci'
import {
  BannerContainer,
  ContentIcons,
  HeaderBanner,
  SectionIcons,
  Subtitle,
  Title,
} from './styles'
import { ImagePerfil } from '../img'

export function Banner() {
  return (
    <BannerContainer>
      <HeaderBanner>
        <Title>
          Opa, Eu sou o Gabriel Souza{' '}
          <span role="img" aria-label="Acenando">
            👋
          </span>
        </Title>
        <Subtitle>
          Como desenvolvedor full stack especializado em React.js e Node.js,
          ajudo empresas a criar soluções digitais eficientes, rápidas e
          acessíveis. Meu foco é entender os desafios do cliente e desenvolver
          aplicações que atendam às suas necessidades específicas, sempre
          garantindo uma experiência de usuário excepcional e resultados
          concretos para o negócio.
        </Subtitle>
        <ContentIcons>
          <button aria-label="Localização">
            <CiLocationOn size={24} />
            MG, Brasil
          </button>
          <button aria-label="Disponibilidade">
            <LuDot size={24} color="#10b981" />
            Disponível para novos projetos
          </button>
        </ContentIcons>

        <SectionIcons>
          <a
            href="https://github.com/Osouzaa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Meu GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gabrielsouza-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Meu LinkedIn"
          >
            <SiLinkedin />
          </a>
          <a
            href="https://www.instagram.com/_gabriellsouza__/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Meu Instagram"
          >
            <SiInstagram />
          </a>
        </SectionIcons>
      </HeaderBanner>
      <ImagePerfil />
    </BannerContainer>
  )
}
