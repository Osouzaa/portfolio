import { ImagePerfil } from '../img'
import { AboutContainer, SectionAbout, Title } from './style'

export function About() {
  return (
    <AboutContainer>
      <section>
        <Title>Sobre mim</Title>
        <ImagePerfil />
        <SectionAbout>
          <article>
            <h2>Quem sou eu?</h2>
            <p>
              Olá! Meu nome é Gabriel Souza Alves. Sou apaixonado por tecnologia
              e desenvolvimento de software. Desde que iniciei minha jornada na
              programação, em 2020, venho me dedicando a transformar ideias em
              soluções digitais funcionais e inovadoras.
            </p>
          </article>

          <article>
            <h2>Minha trajetória</h2>
            <p>
              Minha formação em Análise e Desenvolvimento de Sistemas me
              proporcionou uma base sólida para compreender e criar soluções
              robustas. Ao longo dos anos, participei de diversos projetos,
              desenvolvendo habilidades em tecnologias como React, Node.js,
              TypeScript e muitas outras.
            </p>
            <p>
              Além disso, conclui um curso técnico em Desenvolvimento Full
              Stack, o que complementou minha visão sobre o desenvolvimento
              completo de aplicações. Estou sempre em busca de desafios que me
              permitam crescer e aprender algo novo.
            </p>
          </article>

          <article>
            <h2>O que me motiva</h2>
            <p>
              O que me impulsiona é a paixão por resolver problemas e criar
              experiências que façam a diferença na vida das pessoas. Adoro
              trabalhar em equipe, compartilhar conhecimento e ajudar outros
              profissionais a atingirem seus objetivos. Meu foco é construir
              aplicações que sejam não apenas funcionais, mas também elegantes e
              acessíveis.
            </p>
          </article>
        </SectionAbout>
      </section>
    </AboutContainer>
  )
}
