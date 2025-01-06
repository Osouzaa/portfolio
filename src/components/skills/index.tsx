import { SkillsData } from '../../data/skillsData'
import { Item, SectionButton, SkillsContainer, SkillsContent } from './styles'

export function Skills() {
  return (
    <SkillsContainer>
      <SectionButton>
        <h2>Minhas Skills</h2>
        <p>
          As habilidades, ferramentas e tecnologias nas quais sou realmente bom:
        </p>
      </SectionButton>

      <SkillsContent>
        {SkillsData.map((item) => (
          <Item
            key={item.label}
            className={
              item.label === 'Github' || item.label === 'Express'
                ? 'highlight-bg'
                : ''
            }
          >
            <div role="img" aria-label={`Ícone de ${item.label}`}>
              {item.logo}
            </div>
            <span>{item.label}</span>
          </Item>
        ))}
      </SkillsContent>
    </SkillsContainer>
  )
}
