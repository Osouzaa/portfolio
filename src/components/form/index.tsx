import {
  ButtonSubmit,
  FormContainer,
  FormContent,
  InputText,
  LabelContent,
  SectionButton,
  TextArea,
} from './styles'
import emailjs from '@emailjs/browser'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useState } from 'react'

const FormSchema = z.object({
  nome_cliente: z.string(),
  email: z.string().email(),
  mensagem: z.string(),
})

type FormSchemaType = z.infer<typeof FormSchema>

export function Form() {
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, reset } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  })

  const handleSendEmail = async (data: FormSchemaType) => {
    setIsLoading(true) // Ativa o estado de loading
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      toast.success('Email enviado com sucesso! Agradecemos pelo contato.', {
        style: {
          padding: '1rem',
        },
        position: 'top-right',
      })
      reset()
    } catch (error) {
      console.log(error)
      toast.error('Erro ao enviar o email. Tente novamente mais tarde.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <FormContainer>
      <SectionButton>
        <h2>Formulário</h2>
        <p>Entre em contato comigo</p>
      </SectionButton>
      <FormContent onSubmit={handleSubmit(handleSendEmail)}>
        <LabelContent>
          Nome
          <InputText
            type="text"
            id="name"
            placeholder="Seu nome"
            required
            {...register('nome_cliente')}
          />
        </LabelContent>

        <LabelContent>
          Email
          <InputText
            type="email"
            id="email"
            placeholder="Seu email"
            required
            {...register('email')}
          />
        </LabelContent>

        <LabelContent>
          Mensagem
          <TextArea
            id="message"
            placeholder="Sua mensagem"
            rows={6}
            required
            {...register('mensagem')}
          />
        </LabelContent>

        <ButtonSubmit type="submit" disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Enviar'}
        </ButtonSubmit>
      </FormContent>
    </FormContainer>
  )
}
