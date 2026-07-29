# 🤖 CSS AI Generator

> Gere códigos CSS com inteligência artificial a partir de descrições em linguagem natural.

O **CSS AI Generator** é uma aplicação web desenvolvida para facilitar a criação de estilos CSS utilizando **Inteligência Artificial**. Através de uma interface simples e intuitiva, o usuário descreve o componente ou efeito visual que deseja e recebe como resultado um código CSS pronto para ser utilizado em seus projetos.

A proposta é reduzir o tempo gasto na criação de estilos, permitindo transformar ideias visuais em código de forma rápida, prática e acessível.

---

## ✨ Funcionalidades

* 🤖 **Geração de CSS com IA**

  * Descreva o estilo desejado em linguagem natural.
  * Gere código CSS automaticamente a partir do prompt.

* 🎨 **Criação de componentes**

  * Botões
  * Cards
  * Inputs
  * Containers
  * Menus
  * Efeitos visuais
  * Animações
  * Gradientes
  * Sombras
  * Layouts

* 📋 **Cópia rápida do código**

  * Copie o CSS gerado com apenas um clique.

* 👀 **Preview em tempo real**

  * Visualize o resultado do código antes de utilizá-lo no projeto.

* 💬 **Interface baseada em prompts**

  * Interação simples através de comandos escritos em linguagem natural.

* 📱 **Design responsivo**

  * Interface adaptada para diferentes tamanhos de tela.

* ⚡ **Experiência rápida e intuitiva**

  * Fluxo pensado para reduzir a quantidade de etapas entre a ideia e o código final.

---

## 🎯 Objetivo do Projeto

O projeto foi criado com o objetivo de explorar a integração entre **desenvolvimento Front-end e Inteligência Artificial**, criando uma ferramenta capaz de transformar descrições em estilos CSS utilizáveis.

Além de funcionar como uma ferramenta prática, o projeto também representa um estudo sobre:

* Integração com APIs de IA
* Engenharia de prompts
* Geração dinâmica de código
* Manipulação do DOM
* Componentização
* Experiência do usuário
* Design de interfaces modernas
* Boas práticas de desenvolvimento Front-end

---

## 🖥️ Como funciona

O fluxo principal da aplicação pode ser resumido em quatro etapas:

```text
┌─────────────────────┐
│  1. Descrição       │
│  "Crie um botão     │
│   moderno azul"     │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│  2. IA interpreta    │
│     o prompt         │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│  3. CSS é gerado     │
│     automaticamente │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│  4. Preview +       │
│     código final    │
└─────────────────────┘
```

O usuário fornece uma descrição do resultado desejado, a aplicação envia essa informação para o modelo de IA e processa a resposta para apresentar o código CSS gerado juntamente com uma prévia visual.

---

## 🛠️ Tecnologias

### Front-end

* **JavaScript**
* **HTML5**
* **CSS3**

### Inteligência Artificial

* **API de IA**
* Engenharia de prompts
* Processamento de respostas geradas por IA

### Ferramentas

* **Git**
* **GitHub**
* **VS Code**
* **npm**

> A stack pode ser atualizada conforme a evolução do projeto.

---

## 📂 Estrutura do Projeto

Uma estrutura possível para o projeto:

```text
css-ai-generator/
│
├── public/
│   └── assets/
│
├── src/
│   ├── components/
│   │   ├── CodeEditor/
│   │   ├── Generator/
│   │   ├── Preview/
│   │   └── Header/
│   │
│   ├── services/
│   │   └── ai.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

A organização separa a interface, serviços responsáveis pela comunicação com a IA e estilos, facilitando a manutenção e evolução da aplicação.

---

## 💡 Exemplos de Prompts

O usuário pode fornecer comandos como:

```text
Crie um botão moderno com efeito de hover,
bordas arredondadas e uma animação suave.
```

Ou:

```text
Crie um card de produto com efeito glassmorphism,
sombra suave e animação ao passar o mouse.
```

Ou ainda:

```text
Crie uma animação CSS para um botão que
possua um efeito de brilho passando horizontalmente.
```

A IA transforma a descrição em código CSS que pode ser copiado e utilizado no projeto.
