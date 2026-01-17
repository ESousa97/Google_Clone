# Google Clone

Reimplementação estilizada da interface de busca do Google para estudo avançado de HTML, CSS e JavaScript.

[![CI](https://github.com/ESousa97/Google_Clone/actions/workflows/ci.yml/badge.svg)](https://github.com/ESousa97/Google_Clone/actions/workflows/ci.yml)
[![CodeQL](https://github.com/ESousa97/Google_Clone/actions/workflows/codeql.yml/badge.svg)](https://github.com/ESousa97/Google_Clone/actions/workflows/codeql.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/esousa97/google_clone/badge)](https://www.codefactor.io/repository/github/esousa97/google_clone)
[![Licença MIT](https://img.shields.io/github/license/ESousa97/Google_Clone)](https://github.com/ESousa97/Google_Clone/blob/main/LICENSE)

**Demo:** [google-clone-ashen-pi.vercel.app](https://google-clone-ashen-pi.vercel.app)

## Visão geral

Este projeto demonstra técnicas modernas de CSS (glassmorphism, gradientes animados e microinterações) combinadas com JavaScript mínimo para efeitos de partículas e typing. O objetivo é educacional e visual.

## 🎬 Demonstração visual

<p align="center">
  <img src="./Assets/googleclone.gif" alt="Demonstração da Interface Google Clone" width="800">
</p>

## Arquitetura

Consulte [docs/architecture.md](docs/architecture.md) para detalhes.

## Tech stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Ferramentas de qualidade: ESLint, Stylelint, HTML-Validate, Prettier
- Testes: Node Test Runner

## Estrutura do repositório

```
.
├── Assets/                 # Imagens e GIFs usados na documentação
├── docs/                   # Documentação complementar
├── src/                    # Código-fonte
│   ├── index.html
│   ├── scripts/
│   │   └── main.js
│   └── styles/
│       └── main.css
├── tests/                  # Testes automatizados
├── .github/                # CI, templates e automações
├── README.md
└── LICENSE
```

## Como executar

Você pode abrir diretamente o arquivo:

- [src/index.html](src/index.html)

Ou usar um servidor local simples:

```bash
python -m http.server 8000
```

## Scripts

```bash
npm install
npm run lint
npm test
npm run build
```

## Testes

Os testes são executados com o Node Test Runner e garantem presença dos elementos principais e referências de assets.

## Contribuição

Leia [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes.

## Licença

Licenciado sob a MIT. Veja [LICENSE](LICENSE).
>>>>>>> d16d9b7 (chore: A+ compliance and project hardening)
