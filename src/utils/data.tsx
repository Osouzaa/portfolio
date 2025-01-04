import type { ReactNode } from 'react'
import { IoLogoJavascript } from 'react-icons/io5'
import {
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiPostgresql,
  SiNestjs,
  SiNodedotjs,
  SiPrisma,
  SiTypeorm,
  SiPython,
  SiFigma,
  SiSass,
  SiReact,
  SiExpress,
  SiGit,
  SiGithub,
  SiTailwindcss,
} from 'react-icons/si'

interface SkillsDataProps {
  label: string
  logo: ReactNode
}

export const SkillsData: SkillsDataProps[] = [
  {
    label: 'JavaScript',
    logo: <IoLogoJavascript size={64} color="#FFD600" />,
  },
  {
    label: 'TypeScript',
    logo: <SiTypescript size={64} color="#3178C6" />,
  },
  {
    label: 'HTML',
    logo: <SiHtml5 size={64} color="#E34F26" />,
  },
  {
    label: 'CSS',
    logo: <SiCss3 size={64} color="#1572B6" />,
  },
  {
    label: 'MongoDB',
    logo: <SiMongodb size={64} color="#47A248" />,
  },
  {
    label: 'PostgreSQL',
    logo: <SiPostgresql size={64} color="#336791" />,
  },
  {
    label: 'NestJS',
    logo: <SiNestjs size={64} color="#E0234E" />,
  },
  {
    label: 'Node.js',
    logo: <SiNodedotjs size={64} color="#339933" />,
  },
  {
    label: 'Prisma',
    logo: <SiPrisma size={64} color="#2D3748" />,
  },
  {
    label: 'TypeORM',
    logo: <SiTypeorm size={64} color="#F50" />,
  },
  {
    label: 'Python',
    logo: <SiPython size={64} color="#3776AB" />,
  },
  {
    label: 'Figma',
    logo: <SiFigma size={64} color="#F24E1E" />,
  },
  {
    label: 'Sass',
    logo: <SiSass size={64} color="#CC6699" />,
  },
  {
    label: 'React',
    logo: <SiReact size={64} color="#61DAFB" />,
  },
  {
    label: 'Express',
    logo: <SiExpress size={64} color="#FFF" />,
  },
  {
    label: 'Git',
    logo: <SiGit size={64} color="#F05032" />,
  },
  {
    label: 'GitHub',
    logo: <SiGithub size={64} color="#FFFF" />,
  },
  {
    label: 'TailwindCSS',
    logo: <SiTailwindcss size={64} color="#06B6D4" />,
  },
]
