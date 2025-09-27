# FEI Feedback Platform

Uma plataforma de feedback e performance para o ambiente acadêmico do Centro Universitário FEI. A plataforma promove colaboração, responsabilidade e melhoria contínua em grupos de trabalho através de um sistema de feedback baseado em pontos com recompensas reais.

## 🚀 Funcionalidades

### 👤 Gerenciamento de Usuários

- **Administrador**: Cadastra e gerencia professores e estudantes
- **Professor**: Cria turmas, forma grupos de projeto e monitora performance
- **Estudante**: Fornece feedback aos colegas e resgata recompensas

### 📚 Turmas e Grupos

- Professores registram suas turmas
- Criação e gerenciamento de grupos de projeto
- Atribuição de estudantes a grupos específicos

### 💬 Sistema de Feedback

- Feedback público entre membros do grupo
- Sistema baseado em pontos:
  - Feedback positivo → ganho de pontos
  - Sugestões de melhoria → possível perda de pontos
- Categorias: colaboração, comunicação, contribuição, pontualidade

### 🎁 Sistema de Recompensas

- Resgate de pontos por descontos em estabelecimentos parceiros:
  - **Jujuca**
  - **Miyagi-san**
  - **Mac FEI**
  - **Augustus**
- Histórico de resgates
- Sistema de aprovação de resgates

## 🛠️ Tecnologias

- **Frontend**: Next.js 14+ com App Router
- **Styling**: Tailwind CSS + shadcn/ui
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL com Prisma ORM
- **Authentication**: NextAuth.js
- **Language**: TypeScript

## 📋 Pré-requisitos

- Node.js 18+
- PostgreSQL
- npm ou yarn

## ⚡ Instalação e Configuração

### 1. Clone o repositório

```bash
git clone <repository-url>
cd feiback
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/feiback?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# App Configuration
NODE_ENV="development"
```

### 4. Configure o banco de dados

```bash
# Gerar o cliente Prisma
npm run db:generate

# Aplicar o schema ao banco
npm run db:push

# Popular com dados iniciais
npm run db:seed
```

### 5. Execute o projeto

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

## 👥 Usuários de Teste

Após executar o seed, você pode usar estas credenciais:

### Administrador

- **Email**: admin@fei.edu.br
- **Senha**: admin123

### Professor

- **Email**: joao.silva@fei.edu.br
- **Senha**: professor123

### Estudante

- **Email**: maria.silva@fei.edu.br
- **Senha**: student123

## 📱 Funcionalidades por Perfil

### Dashboard do Administrador

- Gerenciamento de usuários
- Visão geral de turmas
- Aprovação de resgates
- Análises e métricas da plataforma

### Dashboard do Professor

- Gerenciamento de turmas
- Criação e monitoramento de grupos
- Análise de feedback dos estudantes
- Relatórios de performance

### Dashboard do Estudante

- Visualização dos grupos
- Formulários de feedback
- Acompanhamento de pontos
- Catálogo de recompensas

## 🗃️ Estrutura do Banco de Dados

### Principais Entidades

- **Users**: Usuários (Admin, Professor, Estudante)
- **Classes**: Turmas criadas pelos professores
- **Groups**: Grupos de projeto dentro das turmas
- **Feedback**: Avaliações entre estudantes
- **PointTransactions**: Histórico de pontos
- **Rewards**: Recompensas disponíveis
- **Redemptions**: Resgates de recompensas

## 🎨 Design e UX

- Design mobile-first responsivo
- Cores institucionais do FEI
- Interface limpa e profissional
- Componentes reutilizáveis com shadcn/ui
- Experiência otimizada para dispositivos móveis

## 🔐 Segurança

- Autenticação JWT com NextAuth.js
- Controle de acesso baseado em roles
- Validação de dados no frontend e backend
- Proteção contra ataques comuns

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente
3. O deploy será automático

### Outras Plataformas

- Configure as variáveis de ambiente
- Execute `npm run build`
- Inicie com `npm start`

## 📊 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm start

# Linting
npm run lint

# Banco de dados
npm run db:generate    # Gerar cliente Prisma
npm run db:push        # Aplicar schema
npm run db:seed        # Popular dados iniciais
npm run db:studio      # Abrir Prisma Studio
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto foi desenvolvido para o Centro Universitário FEI.

## 📞 Suporte

Para dúvidas e suporte, entre em contato com a equipe de desenvolvimento.

---

**Centro Universitário FEI** - Plataforma de Feedback e Performance Acadêmica
