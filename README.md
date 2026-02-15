<div align="center">

# Google Clone

[![CI](https://img.shields.io/github/actions/workflow/status/ESousa97/Google_Clone/ci.yml?style=flat&logo=github-actions&logoColor=white)](https://github.com/ESousa97/Google_Clone/actions/workflows/ci.yml)
[![CodeQL](https://img.shields.io/github/actions/workflow/status/ESousa97/Google_Clone/codeql.yml?style=flat&logo=github-actions&logoColor=white&label=CodeQL)](https://github.com/ESousa97/Google_Clone/actions/workflows/codeql.yml)
[![CodeFactor](https://img.shields.io/codefactor/grade/github/ESousa97/Google_Clone?style=flat&logo=codefactor&logoColor=white)](https://www.codefactor.io/repository/github/esousa97/google_clone)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat&logo=opensourceinitiative&logoColor=white)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Archived-lightgrey.svg?style=flat&logo=archive&logoColor=white)](#)

**Reimplementação estilizada da interface de busca do Google com glassmorphism, gradientes animados, partículas flutuantes e efeito de typing — HTML, CSS e JavaScript puros.**

[Demo](https://google-clone-ashen-pi.vercel.app) · [Documentação](docs/architecture.md)

</div>

---

> **⚠️ Projeto Arquivado**
> Este projeto não recebe mais atualizações ou correções. O código permanece disponível como referência e pode ser utilizado livremente sob a licença MIT. Fique à vontade para fazer fork caso deseje continuar o desenvolvimento.

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Arquitetura](#arquitetura)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Começando](#começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Uso Local](#uso-local)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Qualidade e Governança](#qualidade-e-governança)
- [Deploy](#deploy)
- [Licença](#licença)
- [Contato](#contato)

---

## Sobre o Projeto

Este projeto é uma reimplementação estilizada da interface de busca do Google, desenvolvida com HTML, CSS e JavaScript puros para estudo avançado de técnicas modernas de frontend. O foco é educacional e visual, demonstrando glassmorphism, gradientes animados, partículas procedurais e microinterações sem frameworks.

O repositório prioriza:

- **Design visual avançado** — Glassmorphism com `backdrop-filter`, gradientes animados com `background-size: 400%` e glow effects
- **Partículas procedurais** — Geradas via JavaScript com tamanho, posição e duração aleatórios
- **Efeito de typing** — Placeholder animado com múltiplas frases, digitação e exclusão progressiva
- **Microinterações** — Ripple no clique, hover com `translateY` e `box-shadow`, shimmer nos inputs
- **Responsividade** — Media queries para mobile com `prefers-reduced-motion` para acessibilidade
- **Automação de qualidade** — ESLint, Stylelint, HTML-Validate, Prettier e CI/CD

### Por que HTML/CSS/JS puro?

O escopo educacional do projeto demanda demonstrar o poder das tecnologias web nativas. Sem frameworks, cada efeito visual é implementado explicitamente — gradientes animados via keyframes, glassmorphism via `backdrop-filter`, partículas via DOM manipulation — servindo como referência didática para técnicas avançadas de CSS e JavaScript.

---

## Funcionalidades

- **Interface de busca estilizada** — Reprodução da estrutura do Google com header, search box, botões e footer
- **Glassmorphism** — Header, search box, botões e footer com blur, transparência e bordas sutis
- **Gradiente animado** — Background com 6 cores e animação `gradientShift` de 15s
- **Partículas flutuantes** — Criadas a cada 500ms via JavaScript com animação CSS `particleFloat`
- **Efeito de typing** — Placeholder do input alterna entre 4 frases com digitação/exclusão animada
- **Ripple no clique** — Efeito circular expandindo a partir do ponto clicado
- **Glow nos elementos** — Logo, ícones e links com `drop-shadow` e `text-shadow` animados
- **Responsivo** — Adaptação para telas de até 768px
- **Acessibilidade** — `prefers-reduced-motion` desabilita animações para usuários sensíveis

---

## Tecnologias

### Core

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

### Ferramentas de Desenvolvimento

![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)
![Stylelint](https://img.shields.io/badge/Stylelint-263238?style=flat&logo=stylelint&logoColor=white)
![HTML Validate](https://img.shields.io/badge/HTML_Validate-E34F26?style=flat&logo=html5&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black)
![c8](https://img.shields.io/badge/c8-333333?style=flat&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)

**Requisitos mínimos:**

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Node.js 20+ (apenas para lint/test)

---

## Arquitetura

A aplicação é um site estático carregado diretamente no navegador sem build step obrigatório:

```
Usuário
  → Servidor estático / arquivo local
    → index.html (redirecionamento para src/)
      → src/index.html (estrutura semântica da interface)
        → src/styles/main.css (glassmorphism, gradientes, animações, responsividade)
        → src/scripts/main.js (partículas, typing effect, ripple)
        → Assets estáticos (logo Google via CDN, ícones SVG inline)
```

O `main.js` orquestra três sistemas visuais independentes: partículas flutuantes (criadas via `setInterval`), efeito de typing (recursivo via `setTimeout`) e ripple no clique (via event listener global).

> Para mais detalhes, consulte [`docs/architecture.md`](docs/architecture.md).

---

## Estrutura do Projeto

```
Google_Clone/
├── index.html                 # Redirecionamento para src/index.html
├── src/
│   ├── index.html             # Interface principal
│   ├── scripts/
│   │   └── main.js            # Partículas, typing effect, ripple
│   └── styles/
│       └── main.css           # Glassmorphism, gradientes, animações
├── Assets/
│   └── googleclone.gif        # Demonstração visual
├── Styles/
│   └── Styles.css             # Stylesheet legado (deprecated)
├── tests/
│   └── smoke.test.js          # Smoke tests (Node Test Runner)
├── docs/
│   └── architecture.md        # Documentação de arquitetura
├── .github/
│   ├── workflows/
│   │   ├── ci.yml             # Pipeline de CI (audit + lint + test + build)
│   │   └── codeql.yml         # Análise de segurança
│   ├── dependabot.yml         # Atualizações semanais de dependências
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.yml     # Template de bug report
│   │   └── feature_request.yml # Template de feature request
│   └── PULL_REQUEST_TEMPLATE.md
├── vercel.json                # Configuração de deploy Vercel
├── eslint.config.js           # Configuração ESLint (flat config)
├── package.json               # Dependências e scripts
├── CONTRIBUTING.md            # Guia de contribuição
├── SECURITY.md                # Política de segurança
├── CODE_OF_CONDUCT.md         # Código de conduta
├── CHANGELOG.md               # Histórico de mudanças
└── LICENSE                    # Licença MIT
```

---

## Começando

### Pré-requisitos

A aplicação é um site estático e roda diretamente no navegador. Para lint e testes:

```bash
node --version  # v20 ou superior (opcional, para lint/test)
npm --version   # v9 ou superior (opcional, para lint/test)
```

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/ESousa97/Google_Clone.git
cd Google_Clone
```

2. **Instale as dependências de desenvolvimento** (opcional)

```bash
npm install
```

### Uso Local

**Abrir diretamente no navegador:**

```bash
# Windows
start src/index.html

# macOS
open src/index.html

# Linux
xdg-open src/index.html
```

**Com servidor local:**

```bash
python -m http.server 8000
# ou
npx serve .
```

Acesse: `http://localhost:8000/`

**Produção:** [google-clone-ashen-pi.vercel.app](https://google-clone-ashen-pi.vercel.app)

---

## Scripts Disponíveis

```bash
# Lint completo (JS + CSS + HTML)
npm run lint

# Lint por tipo
npm run lint:js
npm run lint:css
npm run lint:html

# Formatação Prettier
npm run format

# Testes (Node Test Runner)
npm test

# Cobertura com c8
npm run coverage

# Build (no-op para site estático)
npm run build
```

---

## Qualidade e Governança

O projeto adota práticas de governança para manter a qualidade do código:

- **CI** — Pipeline com audit, lint, testes, build e cobertura via GitHub Actions
- **Security** — Análise CodeQL semanal e em cada push/PR
- **Dependabot** — Atualizações semanais de dependências npm e GitHub Actions
- **Templates** — Modelos padronizados para Issues (YAML) e Pull Requests

> Para diretrizes de contribuição, consulte [`CONTRIBUTING.md`](CONTRIBUTING.md). Para política de segurança, consulte [`SECURITY.md`](SECURITY.md).

---

## Deploy

### Vercel (Produção)

Deploy contínuo automatizado via integração GitHub. O `vercel.json` configura o diretório raiz como output:

```json
{
  "outputDirectory": "."
}
```

O projeto também é compatível com Netlify, GitHub Pages ou qualquer plataforma de hospedagem estática.

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License - você pode usar, copiar, modificar e distribuir este código.
```

---

## Contato

**José Enoque Costa de Sousa**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enoque-sousa-bb89aa168/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/ESousa97)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=flat&logo=todoist&logoColor=white)](https://enoquesousa.vercel.app)

---

<div align="center">

**[⬆ Voltar ao topo](#google-clone)**

Feito com ❤️ por [José Enoque](https://github.com/ESousa97)

**Status do Projeto:** Archived — Sem novas atualizações

</div>
