import siteTecnocar from '../assets/site-tecnocar.jpg'
import DevCurrency from '../assets/CriptMoeda.png'
import Gerenciador from '../assets/Gerenciador de Tarefas.png'
import PrimeFlix from '../assets/PrimeFlix.png'

interface ProjectDataProps {
  image: string
  title: string
  date: string
  description: string
  technologies: string[]
}

export const projectData: ProjectDataProps[] = [
  {
    image: siteTecnocar,
    title: 'Site Tecnocar Engenharia',
    date: 'Mar 2023 - Abr 2023',
    description:
      'Criação do site oficial da Tecnocar Engenharia, destacando a empresa, seus serviços e trajetória no mercado. O projeto foi desenvolvido com foco em uma experiência moderna e intuitiva, utilizando design responsivo e navegação otimizada para atender às necessidades dos usuários e clientes da empresa.',
    technologies: [
      'React',
      'TypeScript',
      'Figma',
      'Styled-components',
      'GitHub',
      'EmailJs',
      'Jest',
      'Vercel',
    ],
  },
  {
    image: DevCurrency,
    title: 'DevCurrency',
    date: 'Set 2023 - Nov 2023',
    description:
      'Desenvolvimento do DevCurrency, um site que consome a API do CoinGecko para exibir valores atualizados de criptomoedas em tempo real. O objetivo foi oferecer uma plataforma intuitiva e eficiente, com um design moderno que facilita a navegação dos usuários. Este projeto foi criado como parte de um curso ministrado por Matheus Fraga, com foco em boas práticas de desenvolvimento e integração com APIs externas.',
    technologies: ['TypeScript', 'React', 'Tailwind', 'Figma', 'Vercel'],
  },
  {
    image: Gerenciador,
    title: 'Gerenciador de Tarefas',
    date: 'Ago 2024 - Out 2024',
    description:
      'Projeto de um Gerenciador de Tarefas desenvolvido com HTML, CSS e JavaScript, projetado para organizar e exibir tarefas de forma clara e eficiente. O sistema categoriza tarefas em pendentes, bloqueadas e concluídas, oferecendo aos usuários uma ferramenta prática para acompanhar suas atividades diárias. O foco foi criar uma solução responsiva e alinhada às melhores práticas de desenvolvimento front-end.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
  },
  {
    image: PrimeFlix,
    title: 'PrimeFlix',
    date: 'Ago 2024 - Out 2024',
    description:
      'Criação do PrimeFlix, uma plataforma que utiliza a API MovieDB para exibir os filmes mais populares em tempo real. A aplicação inclui funcionalidades como visualização de trailers, salvamento de filmes em favoritos e interface simplificada. O projeto foi desenvolvido com foco em responsividade, experiência do usuário e boas práticas de desenvolvimento front-end, utilizando ferramentas modernas.',
    technologies: ['React.js', 'TailwindCSS', 'Vercel'],
  },
]
