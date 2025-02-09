# Plano de Teste - Cadastro de Usuário

## 1. Introdução
O objetivo deste plano de teste é verificar se as funcionalidades de cadastro de usuário e funcionam como o esperado

## 2. Escopo
Funcionalidades testadas:
- **Fluxo de Cadastro** (cadastros válidos)
- **Validação de Campos Obrigatórios** (não preencher campos do formulário)
- **Validação de Senha Fraca** (erros enviar uma mensagem quando a senha não for padrão)

## 3. Tipos de Testes
- **Testes funcionais**
- **Testes automatizados e manuais**

## 4. Critérios de Aceitação
- O usuário deve conseguir concluir o cadastro com sucesso
- O usuário não deve conseguir cadastrar se faltar um campo obrigatório
- O usuário não deve conseguir cadastrar se usando uma senha fraca


## 5. Ambientes e Ferramentas
- **Ambiente:** Teste 
- **Ferramentas usadas:** Cypress
- **Plataforma utilizada:** Github

## 6. Casos de Teste
| ID    | Cenário                               | Passo                                                                                                                                           | Resultado Esperado                                                      | Status      |
|-------|---------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|--------------|
|CT 001 | Deve cadastrar um usuário com sucesso | Dados de entrada, <br> **nome**, **sobrenome**, <br> **email**, **repetir-email**, <br> **senha**, <br> Clicar no botão **Cadastrar** | Deve Exibir a mensagem do alert<br> **Cadastro realizado com sucesso!** |✅ Aprovado  |  
|CT 002 | Tentar cadastrar sem preencher nenhum campo | Dados de entrada, <br> **nome**, **sobrenome**, <br> **email**, **repetir-email**, <br> **senha**, <br> Clicar no botão **Cadastrar** | Deve Exibir a mensagem do campo obrigatório<br> **O nome é obrigatório** |✅ Aprovado  |  
|CT 003 | Tentar cadastrar sem preencher o sobrenome | Dados de entrada, <br> **nome**, **sobrenome**, <br> **email**, **repetir-email**, <br> **senha**, <br> Clicar no botão **Cadastrar** | Deve Exibir a mensagem do campo obrigatório<br> **O sobrenome é obrigatório** |✅ Aprovado  |  
|CT 004 | Tentar cadastrar sem preencher o email | Dados de entrada, <br> **nome**, **sobrenome**, <br> **email**, **repetir-email**, <br> **senha**, <br> Clicar no botão **Cadastrar** | Deve Exibir a mensagem do campo obrigatório<br> **O e-mail é obrigatório!** |✅ Aprovado  |  
|CT 005 | Tentar cadastrar sem preencher o repetir email | Dados de entrada, <br> **nome**, **sobrenome**, <br> **email**, **repetir-email**, <br> **senha**, <br> Clicar no botão **Cadastrar** | Deve Exibir a mensagem do campo obrigatório<br> **A confirmação do e-mail é obrigatório** |✅ Aprovado  |  
|CT 006 | Tentar cadastrar com email diferente | Dados de entrada, <br> **nome**, **sobrenome**, <br> **email**, **repetir-email**, <br> **senha**, <br> Clicar no botão **Cadastrar** | Deve Exibir a mensagem do campo obrigatório<br> **Os e-mails não coincidem** |✅ Aprovado  |  
|CT 007 | Tentar cadastrar com uma senha fraca | Dados de entrada, <br> **nome**, **sobrenome**, <br> **email**, **repetir-email**, <br> **senha**, <br> Clicar no botão **Cadastrar** | Deve Exibir a mensagem do campo obrigatório<br> **A senha deve ter pelo menos 8 caracteres** |✅ Aprovado  |  
|CT 008 | Tentar cadastrar com senha minima | Dados de entrada, <br> **nome**, **sobrenome**, <br> **email**, **repetir-email**, <br> **senha**, <br> Clicar no botão **Cadastrar** | Deve Exibir a mensagem do campo obrigatório<br> **A senha deve ter pelo menos 8 caracteres** |✅ Aprovado  |  
|CT 009 | Tentar cadastrar sem uma letra maiuscula | Dados de entrada, <br> **nome**, **sobrenome**, <br> **email**, **repetir-email**, <br> **senha**, <br> Clicar no botão **Cadastrar** | Deve Exibir a mensagem do campo obrigatório<br> **A senha deve ter pelo menos 8 caracteres** |✅ Aprovado  |  
|CT 010 | Tentar cadastrar usando um senha inválido | Dados de entrada, <br> **nome**, **sobrenome**, <br> **email**, **repetir-email**, <br> **senha**, <br> Clicar no botão **Cadastrar** | Deve Exibir a mensagem do campo obrigatório<br> **A senha deve ter pelo menos 8 caracteres** |✅ Aprovado  |  

## 7. Riscos e Dependências
- **Possíveis problemas no teste:** Ambiente instável ou site fora do ar