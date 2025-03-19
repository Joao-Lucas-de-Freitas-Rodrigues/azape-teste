# 📦 AZ Suite Proof - Full Stack Developer Challenge  

## 📌 Sobre o Projeto  
Este projeto foi desenvolvido como parte do processo seletivo para a vaga de **Desenvolvedor Full Stack Pleno** na **AZAPE.CO**.  

A aplicação permite o **acompanhamento de pedidos e valores recebidos** através de outra plataforma, acessando esses dados por meio de uma **API REST** desenvolvida para o projeto.  

A interface foi construída com base no **layout do Figma** fornecido, seguindo os princípios de **Clean Code** para garantir um código **organizado, escalável e de fácil manutenção**.  

---

## 📜 Funcionalidades  

### 🔐 **Autenticação e Login**  
- Página inicial com campos de **email e senha**.  
- Validação dos dados via **API**.  
- Redirecionamento para o **Dashboard** em caso de credenciais corretas.  
- Exibição de mensagem de erro caso os dados estejam incorretos.  

### 📊 **Dashboard**  
O Dashboard exibe informações essenciais sobre os pedidos e vendas:  

#### 📋 **Cards de Resumo**  
- **📦 Pedidos**: Número total de pedidos cadastrados e o valor total em R$.  
- **💰 Vendas**: Quantidade de pedidos pagos e o valor total em R$.  
- **📊 Ticket Médio**: Cálculo do valor médio das vendas realizadas.  

#### 📝 **Lista de Pedidos**  
Cada pedido contém os seguintes detalhes:  
- **ID do Pedido**  
- **ID da Loja**  
- **Data de Criação**  
- **Nome do Cliente**  
- **CPF do Cliente**  
- **Status do Pedido**  
- **Status do Pagamento**  
- **Método de Pagamento**  
- **Total em R$**

#### 📌 Passos:
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Joao-Lucas-de-Freitas-Rodrigues/azape-teste.git
   ```
2. **Acesse o diretório do front-end:**
   ```bash
   cd azape-teste/frontend
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
4. **Inicie o projeto:**
   ```bash
   npm start
   ```

### 🛠️ Rodando o Back-End (Node.js/Express + MongoDB)

#### 📌 Passos:
1. **Clone o repositório (caso ainda não tenha feito):**
   ```bash
   git clone https://github.com/Joao-Lucas-de-Freitas-Rodrigues/azape-teste.git
   ```
2. **Acesse o diretório do back-end:**
   ```bash
   cd azape-teste/backend
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
4. **Inicie o servidor:**
   ```bash
   npm run dev
   ```

---

## 🛠️ Tecnologias Utilizadas

### Front-End:
- **Angular**
- **TypeScript**
- **RxJS**
- **SCSS**

### Back-End:
- **Node.js**
- **Express**
- **MongoDB** com **Mongoose**
- **JWT (JSON Web Tokens)**
- **bcrypt.js** (criptografia de senha)

---

## 🔧 Configuração do Ambiente

- Certifique-se de ter o **Node.js** e o **npm** instalados em sua máquina.
