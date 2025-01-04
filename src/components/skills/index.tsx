import { SkillsData } from '../../data/data'
import { Item, SectionButton, SkillsContainer, SkillsContent } from './styles'

export function Skills() {
  return (
    <SkillsContainer>
      <SectionButton>
        <button>Skills</button>
        <p>
          As habilidades, ferramentas e tecnologias nas quais sou realmente bom:
        </p>
      </SectionButton>

      <SkillsContent>
        {SkillsData.map((item) => (
          <Item
            key={item.label}
            className={
              item.label === 'Github' || item.label === 'Express' ? 'bg' : ''
            }
          >
            {item.logo}
            <span>{item.label}</span>
          </Item>
        ))}
      </SkillsContent>
    </SkillsContainer>
  )
}
