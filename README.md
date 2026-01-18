# 🚀 DevZeen.io

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.1.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwindcss)
![React](https://img.shields.io/badge/React-19.2.3-61dafb?style=for-the-badge&logo=react)

Portfolio profissional moderno e responsivo desenvolvido com as tecnologias mais recentes do ecossistema React.

[Demo ao Vivo](https://devzeen.io) · [Reportar Bug](https://github.com/clizioguedes/devzeen.io/issues) · [Solicitar Feature](https://github.com/clizioguedes/devzeen.io/issues)

</div>

## 📋 Sobre o Projeto

**DevZeen.io** é um portfolio profissional full-stack que apresenta projetos, habilidades técnicas e experiência profissional de forma elegante e interativa. Construído com Next.js 16, React 19 e Tailwind CSS v4, o projeto demonstra as melhores práticas de desenvolvimento web moderno.

### ✨ Principais Características

- **🎨 Design Moderno**: Interface limpa e profissional com animações suaves via Framer Motion
- **🌓 Dark/Light Mode**: Suporte completo a temas claro e escuro
- **📱 100% Responsivo**: Design adaptável para todos os dispositivos (mobile, tablet, desktop)
- **⚡ Performance Otimizada**: SSR com Next.js 16 para carregamento ultrarrápido
- **♿ Acessível**: Componentes seguindo padrões WCAG e WAI-ARIA
- **📧 Formulário de Contato**: Integração com Resend API para envio de emails
- **🎯 Navegação Suave**: Scroll animado entre seções com react-scroll
- **🔍 SEO Otimizado**: Meta tags e estrutura semântica para melhor indexação

## 🛠️ Stack Tecnológica

### **Core**

- **[Next.js 16](https://nextjs.org/)** - Framework React com SSR e App Router
- **[React 19](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety e melhor DX
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework CSS utility-first

### **UI/UX**

- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes reutilizáveis e acessíveis
- **[Radix UI](https://www.radix-ui.com/)** - Primitivos UI headless
- **[Framer Motion](https://www.framer.com/motion/)** - Animações e transições
- **[Lucide React](https://lucide.dev/)** - Ícones modernos e customizáveis
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Gerenciamento de temas

### **Formulários & Validação**

- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários performático
- **[Zod](https://zod.dev/)** - Schema validation TypeScript-first
- **[Resend](https://resend.com/)** - API de envio de emails transacionais

### **Ferramentas**

- **[pnpm](https://pnpm.io/)** - Gerenciador de pacotes rápido e eficiente
- **[ESLint](https://eslint.org/)** - Linting e qualidade de código
- **[Docker](https://www.docker.com/)** - Containerização para deployment

## 🚀 Começando

### **Pré-requisitos**

- Node.js 20+ ([Download](https://nodejs.org/))
- pnpm 9+ (instalado automaticamente via corepack)

### **Instalação**

1. Clone o repositório

```bash
git clone https://github.com/clizioguedes/devzeen.io.git
cd devzeen.io
```

1. Habilite o pnpm (se necessário)

```bash
corepack enable
```

1. Instale as dependências

```bash
pnpm install
```

1. Configure as variáveis de ambiente

```bash
cp .env.example .env.local
```

Adicione suas credenciais no `.env.local`:

```env
RESEND_API_KEY=your_resend_api_key_here
```

1. Execute o servidor de desenvolvimento

```bash
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📦 Scripts Disponíveis

```bash
pnpm dev        # Inicia o servidor de desenvolvimento
pnpm build      # Cria build de produção
pnpm start      # Inicia servidor de produção
pnpm lint       # Executa ESLint
```

## 🏗️ Estrutura do Projeto

```
devzeen.io/
├── app/                      # App Router (Next.js 16)
│   ├── api/                  # API Routes
│   │   ├── contact/         # Endpoint de contato
│   │   └── health/          # Health check
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Estilos globais (Tailwind v4)
├── components/              # Componentes React
│   ├── layout/             # Header e Footer
│   ├── sections/           # Seções da página
│   │   ├── hero.tsx       # Hero section
│   │   ├── about.tsx      # Sobre mim
│   │   ├── projects.tsx   # Portfolio de projetos
│   │   ├── clients.tsx    # Clientes
│   │   └── contact.tsx    # Formulário de contato
│   └── ui/                # Componentes shadcn/ui
├── lib/                    # Utilitários
│   ├── constants.ts       # Configurações e dados
│   ├── types.ts           # TypeScript types
│   ├── utils.ts           # Helper functions
│   └── validations.ts     # Schemas Zod
├── public/                # Arquivos estáticos
│   └── logos/            # Logos de clientes
├── Dockerfile            # Container Docker
├── components.json       # shadcn/ui config
└── package.json          # Dependências
```

## 🎨 Seções do Portfolio

### **1. Hero**

Apresentação inicial com foto de perfil, descrição profissional e links para redes sociais (GitHub, LinkedIn).

### **2. Projects**

Showcase dos principais projetos desenvolvidos com:

- Descrição detalhada
- Stack tecnológica
- Links para GitHub e demo
- Categorização por tipo

### **3. About**

Biografia profissional detalhando:

- Formação acadêmica
- Anos de experiência
- Segmentos de atuação
- Habilidades técnicas organizadas por categoria (Frontend, Backend, Tools)

### **4. Clients**

Galeria de clientes atendidos com logos e descrições.

### **5. Contact**

Formulário funcional de contato com:

- Validação em tempo real
- Feedback visual
- Integração com Resend API
- Notificações toast

## 🐳 Docker

Build e execute com Docker:

```bash
# Build da imagem
docker build -t devzeen-portfolio .

# Run container
docker run -p 3000:3000 devzeen-portfolio
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Clizio Guedes**

- Website: [devzeen.io](https://devzeen.io)
- GitHub: [@clizioguedes](https://github.com/clizioguedes)
- LinkedIn: [clizioguedes](https://linkedin.com/in/clizioguedes)
- Email: <clizioguedes@devzeen.io>

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

Feito com ❤️ por [Clizio Guedes](https://github.com/clizioguedes)

</div>
