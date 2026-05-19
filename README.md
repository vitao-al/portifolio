# portifolio

## Setup

1. Instale dependências:

```bash
npm install
```

2. Configure as variáveis de ambiente em `.env`:

```env
PORT=3000
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=Portfolio <onboarding@resend.dev>
RESEND_TO_EMAIL=you@example.com
```

Observação:
- `RESEND_FROM_EMAIL` precisa ser um remetente válido no Resend (domínio verificado ou `onboarding@resend.dev` para testes).

## Rodar o projeto

```bash
npm run dev
```

Servidor local em `http://localhost:3000`.

## Formulário de contato

- Front-end envia `POST /api/contact`.
- Back-end envia e-mail via Resend.
- Campos obrigatórios: nome, e-mail e mensagem.