# 📄 Código Completo do Projeto CriaNet

Este documento contém todo o código-fonte do projeto CriaNet organizado por arquivo e caminho.

---

## 📁 Estrutura de Pastas

```
crianet/
├── client/
│   ├── public/
│   │   ├── logo-crianet.png (imagem da logo)
│   │   ├── project-1.jpg
│   │   ├── project-2.jpg
│   │   ├── project-3.jpg
│   │   └── project-4.jpg
│   ├── src/
│   │   ├── components/
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── ManusDialog.tsx
│   │   │   ├── Map.tsx
│   │   │   └── ui/ (componentes shadcn/ui)
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/
│   │   │   ├── useComposition.ts
│   │   │   ├── useMobile.tsx
│   │   │   └── usePersistFn.ts
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── index.css
│   │   ├── animations.css
│   │   └── const.ts
│   └── index.html
├── server/
│   └── index.ts
├── shared/
│   └── const.ts
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── components.json
```

---

## 📝 Arquivos de Configuração

### 1️⃣ `package.json`

```json
{
  "name": "crianet",
  "version": "1.0.0",
  "type": "module",
  "license": "MIT",
  "scripts": {
    "dev": "vite --host",
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js",
    "preview": "vite preview --host",
    "check": "tsc --noEmit",
    "format": "prettier --write ."
  },
  "dependencies": {
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@tanstack/react-query": "^4.41.0",
    "axios": "^1.12.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "embla-carousel-react": "^8.6.0",
    "express": "^4.21.2",
    "framer-motion": "^12.23.22",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.453.0",
    "nanoid": "^5.1.5",
    "next-themes": "^0.4.6",
    "react": "^18.3.1",
    "react-day-picker": "^9.11.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.64.0",
    "react-resizable-panels": "^3.0.6",
    "recharts": "^2.15.2",
    "sonner": "^2.0.7",
    "streamdown": "^1.4.0",
    "tailwind-merge": "^3.3.1",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^1.1.2",
    "wouter": "^3.3.5",
    "zod": "^4.1.12"
  },
  "devDependencies": {
    "@builder.io/vite-plugin-jsx-loc": "^0.1.1",
    "@tailwindcss/typography": "^0.5.15",
    "@tailwindcss/vite": "^4.1.3",
    "@types/express": "4.17.21",
    "@types/google.maps": "^3.58.1",
    "@types/node": "^24.7.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "add": "^2.0.6",
    "autoprefixer": "^10.4.20",
    "esbuild": "^0.25.0",
    "pnpm": "^10.15.1",
    "postcss": "^8.4.47",
    "prettier": "^3.6.2",
    "tailwindcss": "^4.1.14",
    "tsx": "^4.19.1",
    "tw-animate-css": "^1.4.0",
    "typescript": "5.6.3",
    "vite": "^7.1.7",
    "vite-plugin-manus-runtime": "^0.0.56",
    "vitest": "^2.1.4"
  },
  "packageManager": "pnpm@10.4.1+sha512.c753b6c3ad7afa13af388fa6d808035a008e30ea9993f58c6663e2bc5ff21679aa834db094987129aa4d488b86df57f7b634981b2f827cdcacc698cc0cfb88af",
  "pnpm": {
    "patchedDependencies": {
      "wouter@3.7.1": "patches/wouter@3.7.1.patch"
    },
    "overrides": {
      "tailwindcss>nanoid": "3.3.7"
    }
  }
}
```

### 2️⃣ `vite.config.ts`

```typescript
import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
```

### 3️⃣ `tsconfig.json`

```json
{
  "include": ["client/src/**/*", "shared/**/*", "server/**/*"],
  "exclude": ["node_modules", "build", "dist", "**/*.test.ts"],
  "compilerOptions": {
    "incremental": true,
    "tsBuildInfoFile": "./node_modules/typescript/tsbuildinfo",
    "noEmit": true,
    "module": "ESNext",
    "strict": true,
    "lib": ["esnext", "dom", "dom.iterable"],
    "jsx": "preserve",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "allowImportingTsExtensions": true,
    "moduleResolution": "bundler",
    "baseUrl": ".",
    "types": ["node", "vite/client"],
    "paths": {
      "@/*": ["./client/src/*"],
      "@shared/*": ["./shared/*"]
    }
  }
}
```

---

## 🎨 Arquivos de Estilo e Animações

### 4️⃣ `client/src/index.css`

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "./animations.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

:root {
  --primary: oklch(0.62 0.22 200.5);
  --primary-foreground: oklch(0.98 0.001 0);
  --sidebar-primary: oklch(0.62 0.22 200.5);
  --sidebar-primary-foreground: oklch(0.98 0.001 0);
  --chart-1: oklch(0.65 0.2 200.5);
  --chart-2: oklch(0.62 0.22 200.5);
  --chart-3: oklch(0.58 0.22 200.5);
  --chart-4: oklch(0.55 0.22 200.5);
  --chart-5: oklch(0.52 0.22 200.5);
  --radius: 0.65rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.235 0.015 65);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.235 0.015 65);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.235 0.015 65);
  --secondary: oklch(0.98 0.001 286.375);
  --secondary-foreground: oklch(0.4 0.015 65);
  --muted: oklch(0.967 0.001 286.375);
  --muted-foreground: oklch(0.552 0.016 285.938);
  --accent: oklch(0.967 0.001 286.375);
  --accent-foreground: oklch(0.141 0.005 285.823);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.985 0 0);
  --border: oklch(0.92 0.004 286.32);
  --input: oklch(0.92 0.004 286.32);
  --ring: oklch(0.623 0.214 259.815);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.235 0.015 65);
  --sidebar-accent: oklch(0.967 0.001 286.375);
  --sidebar-accent-foreground: oklch(0.141 0.005 285.823);
  --sidebar-border: oklch(0.92 0.004 286.32);
  --sidebar-ring: oklch(0.623 0.214 259.815);
}

.dark {
  --primary: oklch(0.62 0.22 200.5);
  --primary-foreground: oklch(0.98 0.001 0);
  --sidebar-primary: oklch(0.62 0.22 200.5);
  --sidebar-primary-foreground: oklch(0.98 0.001 0);
  --background: oklch(0.08 0.002 0);
  --foreground: oklch(0.92 0.005 65);
  --card: oklch(0.14 0.004 280);
  --card-foreground: oklch(0.92 0.005 65);
  --popover: oklch(0.14 0.004 280);
  --popover-foreground: oklch(0.92 0.005 65);
  --secondary: oklch(0.18 0.005 280);
  --secondary-foreground: oklch(0.8 0.005 65);
  --muted: oklch(0.22 0.005 280);
  --muted-foreground: oklch(0.75 0.015 280);
  --accent: oklch(0.22 0.005 280);
  --accent-foreground: oklch(0.95 0.005 65);
  --destructive: oklch(0.704 0.191 22.216);
  --destructive-foreground: oklch(0.985 0 0);
  --border: oklch(1 0 0 / 12%);
  --input: oklch(1 0 0 / 18%);
  --ring: oklch(0.62 0.22 200.5);
  --chart-1: oklch(0.68 0.2 200.5);
  --chart-2: oklch(0.62 0.22 200.5);
  --chart-3: oklch(0.58 0.22 200.5);
  --chart-4: oklch(0.55 0.22 200.5);
  --chart-5: oklch(0.52 0.22 200.5);
  --sidebar: oklch(0.14 0.004 280);
  --sidebar-foreground: oklch(0.92 0.005 65);
  --sidebar-accent: oklch(0.22 0.005 280);
  --sidebar-accent-foreground: oklch(0.95 0.005 65);
  --sidebar-border: oklch(1 0 0 / 12%);
  --sidebar-ring: oklch(0.62 0.22 200.5);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  button:not(:disabled),
  [role="button"]:not([aria-disabled="true"]),
  [type="button"]:not(:disabled),
  [type="submit"]:not(:disabled),
  [type="reset"]:not(:disabled),
  a[href],
  select:not(:disabled),
  input[type="checkbox"]:not(:disabled),
  input[type="radio"]:not(:disabled) {
    @apply cursor-pointer;
  }
}

@layer components {
  .container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .flex {
    min-height: 0;
    min-width: 0;
  }

  @media (min-width: 640px) {
    .container {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    .container {
      padding-left: 2rem;
      padding-right: 2rem;
      max-width: 1280px;
    }
  }
}
```

### 5️⃣ `client/src/animations.css`

```css
/* Floating Animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Fade In Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide In From Left */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Slide In From Right */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Pulse Animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* Glow Animation */
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(20, 178, 210, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(20, 178, 210, 0.6);
  }
}

/* Rotate Animation */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Bounce Animation */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Utility Classes */
.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.animate-slide-in-left {
  animation: slideInLeft 0.6s ease-out;
}

.animate-slide-in-right {
  animation: slideInRight 0.6s ease-out;
}

.animate-pulse-custom {
  animation: pulse 2s ease-in-out infinite;
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}

.animate-rotate {
  animation: rotate 20s linear infinite;
}

.animate-bounce-custom {
  animation: bounce 2s ease-in-out infinite;
}

/* Stagger animations for lists */
.stagger-item:nth-child(1) {
  animation-delay: 0.1s;
}

.stagger-item:nth-child(2) {
  animation-delay: 0.2s;
}

.stagger-item:nth-child(3) {
  animation-delay: 0.3s;
}

.stagger-item:nth-child(4) {
  animation-delay: 0.4s;
}

.stagger-item:nth-child(5) {
  animation-delay: 0.5s;
}

/* Gradient Background Animation */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradientShift 15s ease infinite;
}

/* Smooth Scroll Behavior */
html {
  scroll-behavior: smooth;
}
```

---

## ⚛️ Arquivos React/TypeScript

### 6️⃣ `client/index.html`

```html
<!doctype html>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <link rel="icon" type="image/png" href="%VITE_APP_LOGO%" />
    <link rel="apple-touch-icon" href="%VITE_APP_LOGO%" />
    <title>%VITE_APP_TITLE%</title>
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
    <script
      defer
      src="%VITE_ANALYTICS_ENDPOINT%/umami"
      data-website-id="%VITE_ANALYTICS_WEBSITE_ID%"></script>
  </body>

</html>
```

### 7️⃣ `client/src/main.tsx`

```typescript
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
```

### 8️⃣ `client/src/const.ts`

```typescript
export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "CriaNet";
export const APP_NAME = "CriaNet";

export const APP_LOGO = "/logo-crianet.png";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
```

### 9️⃣ `client/src/App.tsx`

```typescript
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
```

### 🔟 `client/src/pages/Home.tsx`

Este é o arquivo principal com toda a estrutura da página. Veja o arquivo completo no projeto.

**Seções principais:**
- Navbar com menu responsivo
- Hero section com call-to-action
- Estatísticas (50+ projetos, 3M+ linhas de código, etc.)
- Serviços (Sites, Sistemas Web, E-commerce, Automações)
- Portfólio com 4 projetos e imagens
- Depoimentos de clientes
- FAQ interativo
- Formulário de contato
- Footer com links e créditos

---

## 📦 Como Usar Este Código

### Passo 1: Criar a Estrutura de Pastas

```bash
mkdir crianet
cd crianet
mkdir -p client/src/{components,pages,contexts,hooks,lib}
mkdir -p client/public
mkdir -p server
mkdir -p shared
```

### Passo 2: Copiar os Arquivos

Copie cada arquivo para seu respectivo caminho conforme indicado neste documento.

### Passo 3: Instalar Dependências

```bash
npm install
# ou
pnpm install
```

### Passo 4: Iniciar o Servidor

```bash
npm run dev
# ou
pnpm dev
```

O site estará disponível em `http://localhost:5173`

---

## 🎨 Customizações Principais

### Alterar Logo
Edite `client/src/const.ts` e mude:
```typescript
export const APP_LOGO = "/seu-logo.png";
```

### Alterar Cor Primária
Edite `client/src/index.css` e procure por:
```css
--primary: oklch(0.62 0.22 200.5);
```

Mude para sua cor desejada em formato OKLCH.

### Editar Conteúdo
Todos os textos estão em `client/src/pages/Home.tsx`. Procure pelos arrays:
- `services` - Para alterar serviços
- `projects` - Para alterar projetos
- `testimonials` - Para alterar depoimentos
- `faqs` - Para alterar FAQ

### Adicionar Imagens
1. Coloque as imagens em `client/public/`
2. Referencie em `Home.tsx` com `/nome-da-imagem.jpg`

---

## 🚀 Build para Produção

```bash
npm run build
# ou
pnpm build
```

Os arquivos compilados estarão em `/dist`

---

## 📚 Tecnologias Utilizadas

- **React 19** - Framework UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Utilitários CSS
- **shadcn/ui** - Componentes pré-construídos
- **Vite** - Build tool rápido
- **Wouter** - Roteamento leve
- **Lucide React** - Ícones
- **Framer Motion** - Animações

---

**Desenvolvido por:** Sueldo  
**Ano:** 2025  
**Versão:** 1.0.0
