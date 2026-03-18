# 🕊️ Landing Page - Retiro de Semana Santa (Comunidade Católica Shalom)

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 🎯 Objetivo do Projeto
Esta é uma Landing Page de alta conversão desenvolvida para a **Missão Palmas da Comunidade Católica Shalom**. O objetivo principal é centralizar as informações sobre o Retiro de Semana Santa 2026, oferecendo uma experiência visual imersiva e espiritual que conduz o usuário à inscrição oficial.

O projeto foi construído focando em **performance**, **acessibilidade** e **animações fluidas** para transmitir a identidade visual do evento.

---

## 🛠️ Stack Tecnológica
* **Framework:** [Angular 19+](https://angular.io/) (Standalone Components).
* **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) (Motor de alta performance).
* **Animações:** [Angular Animations API](https://angular.io/guide/animations) (Triggers e Staggering).
* **Gerenciamento de Build:** Vite (integrado ao Angular CLI).

---

## 🏗️ Arquitetura e Funcionalidades

### 1. Componentização
O site foi dividido em componentes modulares para facilitar a manutenção:
* `Hero`: Seção de impacto com overlay e call-to-action.
* `About`: Conteúdo institucional com layout em grid responsivo.
* `Moments`: Carrossel dinâmico utilizando `ngx-owl-carousel-o`.
* `Info`: Dados geográficos integrados com Google Maps via Iframe.
* `Registration`: Seção final focada em conversão (Link para Google Forms).

### 2. Animações e UX
* **Staggering:** Efeito de "cascata" onde os elementos de uma seção aparecem sequencialmente.
* **SSR Awareness:** Implementação de checagem de plataforma (`isPlatformBrowser`) para garantir compatibilidade com Server-Side Rendering.

### 3. Design System
* Paleta de cores baseada em tons terrosos (Terra, Copper, Brown, Beige).
* Tipografia combinando a elegância da *Playfair Display* (Serif) com a legibilidade da *Montserrat* (Sans).

---

## 🚀 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/danielmariae/retiro-semanasanta-shalompalmas.git
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    ng serve
    ```

4.  **Acesse no navegador:**
    `http://localhost:4200`

---
## ⚖️ Licenciamento

Este projeto está sob a [Licença MIT](LICENSE). 

**Nota sobre Ativos de Marca:** Os logotipos e a identidade visual da Comunidade Católica Shalom contidos neste repositório são de propriedade intelectual da instituição. O código-fonte é livre para estudo e adaptação, mas o uso da marca não está incluso nesta licença de software.