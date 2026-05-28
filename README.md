# ⛽ Baratão Combustíveis - Álcool ou Gasolina

O **Baratão Combustíveis** é um aplicativo mobile desenvolvido em **React Native** com **TypeScript** utilizando o **Expo**. O objetivo principal do app é auxiliar motoristas na tomada de decisão rápida no posto de combustível, calculando de forma matemática se é mais vantajoso abastecer com Etanol ou Gasolina com base na regra clássica de mercado.

---

## 📋 Objetivo da Atividade Acadêmica

Este projeto cumpre com excelência os seguintes requisitos solicitados em aula:
* **Modularização de Componentes:** Criação de componentes customizados e reutilizáveis (`Input`, `Posto`, `AppButton` e `ResultCard`) para manter o código limpo e organizado.
* **Manipulação de Múltiplos Estados:** Uso simultâneo e reativo do hook `useState` do React para monitorar e validar os preços digitados em tempo real.
* **Aplicação de Estruturas Condicionais:** Implementação de regras matemáticas (`if/else` e operadores ternários) para determinar a vantagem econômica.
* **Estilização Avançada:** Uso de layouts fluidos com `ScrollView`, backgrounds translúcidos (RGBA) e fontes adaptativas conforme a interação do usuário.

---

## ⚙️ Regra de Negócio

Existe uma regra matemática consagrada: se o preço do litro do **Etanol** for menor que **70% (0.7)** do preço da **Gasolina**, compensa abastecer com Etanol; caso contrário, a Gasolina é a opção mais vantajosa.

$$\text{Relação} = \frac{\text{Preço do Etanol}}{\text{Preço da Gasolina}}$$

* Se $\text{Relação} < 0.7 \rightarrow$ **Abasteça com ETANOL**
* Se $\text{Relação} \ge 0.7 \rightarrow$ **Abasteça com GASOLINA**

---

## 🛠️ Tecnologias Utilizadas

* **React Native** (Arquitetura base do App Mobile)
* **Expo** (Workflow de desenvolvimento e emulação)
* **TypeScript** (Tipagem estática e segurança do código)
* **Visual Studio Code** (Editor de código)

---

## 📦 Estrutura de Arquivos

A arquitetura do projeto foi estruturada visando a separação de responsabilidades (Clean Code):

```text
TRABALHO RAFA/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── input.tsx        # Componente de Input customizado com fontes dinâmicas
│   │   │   ├── image.tsx        # Componente que renderiza a Logo da empresa
│   │   │   ├── AppButton.tsx    # Botão de ação customizado
│   │   │   └── ResultCard.tsx   # Card que exibe o resultado do cálculo
│   │   └── index.tsx            # Tela principal que gerencia o estado global da aplicação
├── assets/
│   ├── baratao.png              # Logotipo oficial do app
│   └── byd-seeklogo.svg
├── package.json                 # Dependências do projeto
└── tsconfig.json                # Configurações do TypeScript
