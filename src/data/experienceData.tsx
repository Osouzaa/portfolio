import LogoTecBranca from '../assets/logo-tecnocar-branca.png'
import logoIzap from '../assets/logo izap.jpg'
import logoStellantis from '../assets/stellantis_logo.jpg'

interface ExperienceDataProps {
  logo: string
  title: string
  date: string
  description: string[]
}

// Dados de exemplo
export const experienceData: ExperienceDataProps[] = [
  {
    logo: LogoTecBranca,
    title: 'Analista de Sistemas',
    date: 'Mar 2023 - Present',
    description: [
      'Responsável pelo desenvolvimento completo de sistemas, atuando desde o design até o deploy da aplicação. Experiência em projetos voltados para soluções de RH, com foco em entrega de qualidade e usabilidade.',
      'Minhas ferramentas incluem:',
      'React e Node.js: Desenvolvimento de interfaces e back-end robustos.',
      'PostgreSQL: Gerenciamento eficiente de dados.',
      'Figma: Criação de designs funcionais e atrativos.',
      'Comprometido com a entrega de projetos de ponta a ponta, sempre alinhado às necessidades do cliente e às melhores práticas de desenvolvimento.',
    ],
  },
  {
    logo: logoIzap,
    title: 'Desenvolvedor Full Stack (Freelancer)',
    date: 'set 2023 - nov 2023',
    description: [
      'Foi desenvolvida uma aplicação para o compartilhamento de vagas na área de tecnologia, utilizando linguagens como Node.js, NestJS e conceitos de API REST.',
      'A aplicação permite que as empresas cadastrem e compartilhem vagas de forma eficiente, com uma interface intuitiva para gerenciar e consultar vagas e candidatos.',
      'A estrutura do backend foi construída com NestJS para garantir escalabilidade e organização do código, enquanto o frontend se comunica com a API REST para buscar e exibir as vagas.',
      'Comprometido com a criação de uma experiência de usuário simples e funcional, garantindo o desempenho e a segurança da aplicação.',
    ],
  },
  {
    logo: logoStellantis,
    title: 'Jovem Aprediz',
    date: 'Jun 2021 - Mar 2023',
    description: [
      'Atuei na área de automatismo, buscando ampliar ainda mais os meus conhecimentos e desenvolvimento profissional.',
      'Contribuí com minhas habilidades em benefício à empresa, utilizando algumas linguagens para automação como: HTML, CSS, JavaScript, NodeRed, C++ e PLC.',
      'Com foco no aprimoramento de processos e aumento da eficiência operacional, participei de projetos para otimização de sistemas de automação.',
      'Busquei sempre melhorar e integrar sistemas com soluções inovadoras que promoveram a evolução do ambiente industrial.',
    ],
  },
]
