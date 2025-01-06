import { projectData } from '../../data/projectsData'
import {
  ContainerSectionDescriptionProject,
  ContainerWork,
  ContentImage,
  Description,
  SectionButton,
  SectionSkills,
  Title,
  WorkContainer,
  WorkContent,
} from './style'

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
            </ContainerSectionDescriptionProject>
          </ContainerWork>
        ))}
      </WorkContent>
    </WorkContainer>
  )
}
