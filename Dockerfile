# Dockerfile simples para Next.js
FROM node:24-alpine

WORKDIR /app

# Instalar pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copiar arquivos de dependências
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Instalar dependências
RUN pnpm install --frozen-lockfile

# Copiar todo o código
COPY . .

# Build da aplicação
RUN pnpm build

# Expor porta
EXPOSE 3000

# Iniciar aplicação
CMD ["pnpm", "start"]
