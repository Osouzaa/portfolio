import { useState } from 'react'
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

export function Form() {
  const [formData, setFormData] = useState({
    nome_cliente: '',
    email: '',
    mensagem: '',
  })

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
      .send(
        'service_mz1mase',
        'template_wpbtq0n',
        formData,
        '_Gf5uk9FL3ekgD7Q3',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <FormContainer>
      <SectionButton>
        <h2>Formulário</h2>
        <p>Entre em contato comigo</p>
      </SectionButton>
      <FormContent onSubmit={handleSubmit}>
        <LabelContent>
          Nome
          <InputText
            type="text"
            id="name"
            placeholder="Seu nome"
            required
            value={formData.nome_cliente}
            onChange={handleChange}
            name="nome_cliente" // Garantir que o name esteja correto
          />
        </LabelContent>

        <LabelContent>
          Email
          <InputText
            type="email"
            id="email"
            placeholder="Seu email"
            required
            value={formData.email}
            onChange={handleChange}
            name="email" // Garantir que o name esteja correto
          />
        </LabelContent>

        <LabelContent>
          Mensagem
          <TextArea
            id="message"
            placeholder="Sua mensagem"
            rows={6}
            required
            name="mensagem" // Garantir que o name esteja correto
            value={formData.mensagem}
            onChange={handleChange}
          />
        </LabelContent>

        <ButtonSubmit type="submit">Enviar</ButtonSubmit>
      </FormContent>
    </FormContainer>
  )
}
