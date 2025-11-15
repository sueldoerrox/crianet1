# 🚀 CriaNet - Guia de Instalação e Configuração

## Requisitos

- Node.js 18+ instalado
- npm ou pnpm como gerenciador de pacotes

## Instalação

### 1. Extrair o projeto
```bash
unzip crianet-projeto.zip
cd crianet
```

### 2. Instalar dependências
```bash
npm install
# ou
pnpm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
# ou
pnpm dev
```

O site estará disponível em `http://localhost:5173`

## Estrutura do Projeto

```
crianet/
├── client/
│   ├── public/              # Assets estáticos (logo, imagens dos projetos)
│   │   ├── logo-crianet.png
│   │   ├── project-1.jpg
│   │   ├── project-2.jpg
│   │   ├── project-3.jpg
│   │   └── project-4.jpg
│   ├── src/
│   │   ├── pages/           # Páginas da aplicação
│   │   │   └── Home.tsx     # Página principal com todas as seções
│   │   ├── components/      # Componentes reutilizáveis
│   │   │   └── ui/          # Componentes shadcn/ui
│   │   ├── contexts/        # Contextos React
│   │   ├── App.tsx          # Componente raiz
│   │   ├── main.tsx         # Entrada da aplicação
│   │   ├── index.css        # Estilos globais e tema
│   │   ├── animations.css   # Animações customizadas
│   │   └── const.ts         # Constantes da aplicação
│   └── index.html           # HTML principal
├── package.json             # Dependências do projeto
├── tsconfig.json            # Configuração TypeScript
├── vite.config.ts           # Configuração Vite
└── tailwind.config.ts       # Configuração Tailwind CSS
```

## Customizações Principais

### Alterar Logo
Edite `/client/src/const.ts`:
```typescript
export const APP_LOGO = "/logo-crianet.png";
```

### Alterar Cor Primária
Edite `/client/src/index.css` e procure por `oklch(0.62 0.22 200.5)` para alterar a cor primária.

### Editar Conteúdo
Todos os textos, serviços, projetos e depoimentos estão em `/client/src/pages/Home.tsx`.

### Adicionar Novas Imagens
1. Coloque as imagens em `/client/public/`
2. Referencie-as em `Home.tsx` com o caminho `/nome-da-imagem.jpg`

## Animações

As animações estão definidas em `/client/src/animations.css`. Classes disponíveis:
- `animate-float` - Flutuação suave
- `animate-fade-in` - Fade in ao scroll
- `animate-bounce-custom` - Bounce
- `animate-glow` - Efeito de brilho
- `animate-pulse-custom` - Pulsação

## Build para Produção

```bash
npm run build
# ou
pnpm build
```

Os arquivos compilados estarão em `/dist`

## Tecnologias Utilizadas

- **React 19** - Framework UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Utilitários CSS
- **shadcn/ui** - Componentes pré-construídos
- **Vite** - Build tool rápido
- **Wouter** - Roteamento leve

## 🚀 Deploy no Vercel

### Pré-requisitos:
- Conta no GitHub
- Conta no Vercel

### Passo 1: Criar Repositório no GitHub

```bash
# Inicializar git (se não tiver feito)
git init
git add .
git commit -m "Initial commit - CriaNet website"

# Criar repositório no GitHub e fazer push
git remote add origin https://github.com/seu-usuario/crianet.git
git branch -M main
git push -u origin main
```

### Passo 2: Conectar ao Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione "Continue com GitHub"
4. Autorize o Vercel
5. Selecione o repositório `crianet`
6. Clique em "Deploy"

### Passo 3: Aguardar Deploy

O Vercel vai:
- ✅ Fazer build do projeto
- ✅ Gerar os arquivos estáticos
- ✅ Publicar o site
- ✅ Gerar um link público

**Seu site estará no ar em 2-3 minutos!** 🎉

### URL do Site

Após o deploy, você receberá um link como:
```
https://crianet-seu-usuario.vercel.app
```

Você pode customizar esse domínio nas configurações do Vercel.

## Suporte

Para dúvidas sobre o projeto, consulte a documentação das tecnologias:
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Vite](https://vitejs.dev)

---

**Desenvolvido por:** Sueldo  
**Ano:** 2025
