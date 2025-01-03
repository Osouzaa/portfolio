import { ImagePerfil } from '../img'
import { AboutContainer, SectionAbout, Title } from './style'

export function About() {
  return (
    <>
      <AboutContainer>
        <Title>Sobre mim</Title>
        <ImagePerfil />
        <SectionAbout>
          <h1>Sobre mim</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            suscipit, sequi velit voluptatum aut perferendis nam impedit
            obcaecati voluptatem asperiores tempora culpa quibusdam aperiam
            doloremque animi quod voluptate pariatur officiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            suscipit, sequi velit voluptatum aut perferendis nam impedit
            obcaecati voluptatem asperiores tempora culpa quibusdam aperiam
            doloremque animi quod voluptate pariatur officiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            suscipit, sequi velit voluptatum aut perferendis nam impedit
            obcaecati voluptatem asperiores tempora culpa quibusdam aperiam
            doloremque animi quod voluptate pariatur officiis?
          </p>
        </SectionAbout>
      </AboutContainer>
    </>
  )
}
