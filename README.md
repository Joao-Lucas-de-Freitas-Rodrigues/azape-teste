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
