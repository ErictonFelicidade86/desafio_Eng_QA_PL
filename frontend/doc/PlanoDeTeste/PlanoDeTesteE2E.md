# Plano de Teste - Cadastro de Usuário

## 1. Introdução
O objetivo deste plano de teste é verificar se as funcionalidades de cadastro de usuário e funcionam como o esperado

## 2. Escopo
Funcionalidades testadas:
- **Fluxo de Cadastro** (cadastros válidos, inválidos)
- **Validação de Campos Obrigatórios** (adicionar item, remover item, carrinho vazio e mensagens de erro)
- **Validação de Senha Fraca** (erros de navegação/direcionamento)

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
|CT 001 | Deve cadastrar um usuário com sucesso | Dados de entrada, <br> **nome**, <br> **sobrenome**, <br> **email**, <br> **repetir-email**, <br> **senha**, <br> clicar no botão **Cadastrar** | Deve Exibir a mensagem do alert<br> **Cadastro realizado com sucesso!** |✅ Aprovado  |  

## 7. Riscos e Dependências
- **Possíveis problemas no teste:** ambiente instável ou site fora do ar