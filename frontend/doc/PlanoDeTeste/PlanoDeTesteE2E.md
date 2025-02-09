# Plano de Teste - Cadastro de Usuário

## 1. Introdução
O objetivo deste plano de teste é verificar se as funcionalidades de cadastro de usuário e funcionam como o esperado

## 2. Escopo
Funcionalidades testadas:
- **Fluxo de Cadastro** (cadastros válidos)
- **Validação de Campos Obrigatórios** (Não preencher campos do formulário)
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

## 6. Casos de Teste
| ID    | Cenário                               | Passo                                                                                                                                           | Resultado Esperado                                                      | Status      |
|-------|---------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|--------------|
|CT 001 | Deve cadastrar um usuário com sucesso | Dados de entrada, <br> **nome**, **sobrenome**, <br> **email**, **repetir-email**, <br> **senha**, <br> Clicar no botão **Cadastrar** | Deve Exibir a mensagem do alert<br> **Cadastro realizado com sucesso!** |✅ Aprovado  |  

## 7. Riscos e Dependências
- **Possíveis problemas no teste:** Ambiente instável ou site fora do ar