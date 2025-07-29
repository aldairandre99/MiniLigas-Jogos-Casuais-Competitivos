# 🎮 Desafio Técnico Frontend – MiniLigas: Jogos Casuais Competitivos

## 🎯 Objetivo

Crie uma plataforma de jogos casuais curtos e interativos onde jogadores possam competir por pontuações em tempo real, visualizar rankings e interagir com uma interface divertida e intuitiva. A aplicação deve ser construída com **React.js (Next.js, Vite ou Gatsby)** e oferecer uma experiência fluida e responsiva.

---

## 🧱 O que deve ser construído

### 1. 🎯 Landing Page
- Nome do projeto e apresentação simples.
- Lista de jogos disponíveis com botão “Jogar”.
- Destaques da semana (jogadores com melhor desempenho).
- Ranking geral e por jogo.

---

### 2. 🕹️ Mínimo 1 jogo interativo entre os abaixo:

#### ✊🖐✌ Pedra, Papel, Tesoura
- Jogador escolhe entre pedra, papel ou tesoura.
- Partida rápida contra o computador ou outro jogador.
- Sistema de pontuação por vitória.

🔗 [Design no Figma](https://www.figma.com/design/stpol6ZAEQ2rwIVLT93VVK/Rock---Paper---Scissor?node-id=7-3&t=VbfIPiFKH7VLXKpK-1)

---

### 3. 🧑‍💼 Dashboard Administrativa (Simples)
- Lista de jogadores com pontuação.
- Número total de partidas jogadas por jogo.
- Rankings por jogo.
- Tela acessível apenas por usuários com permissão de “admin”.

---

### 4. 🔐 Permissões e Controle de Acesso
- Dois tipos de usuários:
  - **Jogador padrão**: pode jogar e ver rankings
  - **Administrador**: pode acessar a dashboard e ver métricas
- Implementar controle de rotas protegidas com base em permissões

---

### 5. 💤 Inatividade & Dino Game
- Se o utilizador ficar **mais de 2 minutos inativo**, mostrar um **modal com o Dino Game** como forma de entretenimento enquanto está ausente.
- O jogo pode ser encerrado ao clicar em "Voltar para a aplicação".

🔗 [Design do Dino Game](https://www.figma.com/design/fRlMTzFfW4M7P8gETf08hf/Chrome-Dino---Variables---Community-?node-id=0-1&t=ku6LwUhaJHCxjsiu-1)

---

## ✅ Avaliação

| Critério            | O que será avaliado                                                                 |
|---------------------|--------------------------------------------------------------------------------------|
| UI/UX               | Fidelidade visual, responsividade e experiência intuitiva                            |
| Interação           | Uso de eventos, animações, controles acessíveis e fluidez nos jogos                 |
| Organização         | Estrutura modular de componentes, boas práticas de React                            |
| Criatividade        | Melhorias além do solicitado, efeitos visuais, som, modo escuro                      |
| Dashboard           | Funcionalidade básica de administração e controle por permissões                    |
| Inatividade         | Detecção e ação apropriada (exibir Dino Game)                                        |
| Documentação        | README com instruções claras e arquitetura explicada                                 |

---

## 🛠 Tecnologias
- React.js
- Typescript
- Zustand
- Heroui


# Como rodar o Projeto

Instalar dependencias 
```
  npm i 
```
Rodar no modo Dev
```
  npm run dev
```

Build do app
```
  npm run build
```


## Features

- [x] Authentication & Authorization
- [x] Pedra Papel Tesoura

