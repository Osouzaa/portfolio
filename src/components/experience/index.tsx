import {
  CardExperience,
  ExperienceContainer,
  SectionButton,
  SectionInformationInterprise,
} from './styles'
import { experienceData } from '../../data/experienceData'
// import LogoTecPreta from '../../assets/logo-tecnocar-preta.png'
export function Experience() {
  return (
    <ExperienceContainer>
      <SectionButton>
        <h2>Experiencias</h2>
        <p>Aqui está um rápido resumo das minhas experiências mais recentes:</p>
      </SectionButton>

      <section>
        {experienceData.map((experience, index) => (
          <CardExperience key={index}>
            <img
              src={experience.logo}
              alt={`Logo da empresa ${experience.title}`}
            />
            <SectionInformationInterprise>
              <h3>{experience.title}</h3>
              <ul>
                {experience.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </SectionInformationInterprise>
            <span>{experience.date}</span>
          </CardExperience>
        ))}
      </section>
    </ExperienceContainer>
  )
}
