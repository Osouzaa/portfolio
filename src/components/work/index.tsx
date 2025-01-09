import { projectData } from '../../data/projectsData'
import {
  ContainerSectionDescriptionProject,
  ContainerWork,
  ContentImage,
  Description,
  LinkProject,
  SectionButton,
  SectionSkills,
  Title,
  WorkContainer,
  WorkContent,
} from './style'
import { FaExternalLinkAlt } from 'react-icons/fa'

export function Work() {
  return (
    <WorkContainer>
      <WorkContent>
        <SectionButton>
          <h2>Projetos</h2>
          <p>Alguns projetos desenvolvidos por mim</p>
        </SectionButton>

        {projectData.map((project, index) => (
          <ContainerWork key={index}>
            <ContentImage>
              <img src={project.image} alt={project.title} />
            </ContentImage>

            <ContainerSectionDescriptionProject>
              <Title>{project.title}</Title>
              <Description>{project.description}</Description>
              <SectionSkills>
                {project.technologies.map((tech, idx) => (
                  <p key={idx}>{tech}</p>
                ))}
              </SectionSkills>

              <LinkProject
                href={project.link}
                aria-label="Link para o projeto"
                target="_blank"
                title="Link para o projeto"
              >
                <FaExternalLinkAlt size={16} />
              </LinkProject>
            </ContainerSectionDescriptionProject>
          </ContainerWork>
        ))}
      </WorkContent>
    </WorkContainer>
  )
}
