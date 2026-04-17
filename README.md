# 🎬 Movie Catalog

Aplicação web para descobrir e explorar os filmes mais populares do momento, utilizando a API do TMDb.

---

## 🚀 Tecnologias

- Next.js 16 — framework React com App Router
- React 19
- TanStack Query v5 — gerenciamento de estado assíncrono
- Axios — cliente HTTP
- Tailwind CSS v4 — estilização
- TypeScript

---

## 📁 Arquitetura do Projeto

app/
├── components/ # Componentes reutilizáveis (MovieCard, MovieList, SearchBar...)
├── hooks/ # Custom hooks (useMovies, useMovieDetails)
├── lib/ # Configurações de bibliotecas (React Query)
├── movie/[id]/ # Página de detalhes do filme
├── providers/ # Providers globais (QueryProvider)
├── services/ # Chamadas à API do TMDB
├── types/ # Interfaces TypeScript
└── page.tsx # Página principal

---

## ✨ Funcionalidades

- Listagem dos filmes mais populares
- Busca por título com debounce
- Página de detalhes com informações completas do filme
- Navegação entre páginas
- Layout responsivo (mobile e desktop)

---

## ⚙️ Pré-requisitos

- Node.js >= 18
- pnpm instalado globalmente

```bash
npm install -g pnpm
```

## ⚙️ Pré-requisitos

- Node.js >= 18
- pnpm instalado globalmente

```bash
npm install -g pnpm
```

---

## 🔧 Configuração

**1. Clone o repositório:**

```bash
git clone https://github.com/Lucas21032002/movie-catalog
cd movie-catalog
```

**2. Instale as dependências:**

```bash
pnpm install
```

**3. Crie o arquivo .env.local na raiz do projeto:**

```env
NEXT_PUBLIC_TMDB_API_KEY=sua_chave_aqui
NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
```

> 💡 Obtenha sua chave em [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api).

---

## ▶️ Rodando o projeto

```bash
pnpm dev
```

Acesse [http://localhost:3000] no navegador.
