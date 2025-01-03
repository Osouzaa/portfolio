import { FaGithub } from 'react-icons/fa' // Para o GitHub
import { SiLinkedin, SiInstagram } from 'react-icons/si' // Para LinkedIn, Twitter e Instagram
import { LuDot } from 'react-icons/lu'
import { CiTwitter } from 'react-icons/ci'

export function Banner() {
  return (
    <>
      <header>
        <div>
          <h1>Oi, Eu sou o Gabriel Souza 👋</h1>
          <h4>
            Como desenvolvedor full stack especializado em React.js e Node.js,
            ajudo empresas a criar soluções digitais eficientes, rápidas e
            acessíveis. Meu foco é entender os desafios do cliente e desenvolver
            aplicações que atendam às suas necessidades específicas, sempre
            garantindo uma experiência de usuário excepcional e resultados
            concretos para o negócio.
          </h4>
        </div>
        <section>
          <button aria-label="Localização">
            <FaGithub />
            MG, Brasil
          </button>
          <button aria-label="Disponibilidade">
            <LuDot />
            Disponível para novos projetos
          </button>
        </section>

        <section>
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Meu GitHub"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Meu LinkedIn"
          >
            <SiLinkedin />
            LinkedIn
          </a>
          <a
            href="https://twitter.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Meu Twitter"
          >
            <CiTwitter />
            Twitter
          </a>
          <a
            href="https://www.instagram.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Meu Instagram"
          >
            <SiInstagram />
            Instagram
          </a>
        </section>
      </header>
      <main>
        <figure>
          <img src="sua-imagem.jpg" alt="Descrição da imagem" />
          <figcaption>Aqui ficará uma imagem minha</figcaption>
        </figure>
      </main>
    </>
  )
}
