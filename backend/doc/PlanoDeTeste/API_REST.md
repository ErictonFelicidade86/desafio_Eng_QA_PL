# Cenários de Teste - API REST {JSON} Placeholder

## 1. Introdução
O objetivo deste plano de teste é verificar se as requisições API Rest estão funcionam como o esperado.

## 2. Escopo
Os Endpoint GET e POST que serão testados:

 | Método | Endpoint | Cenário                                                                                                          | Entrada        |Saída Esperada             | Resultado Obtido             | Status          |
 |--------|----------|------------------------------------------------------------------------------------------------------------------|----------------|---------------------------|------------------------------|---------------- |
 | POST   | /users   | Realizar uma requisição POST e validar se o status code de sucesso é retornado ao enviar dados válidos           | Body Válido    | Status code: 201 Created  | Criou o usuários com suceso  |✅ Aprovado     |  
 | POST   | /users   | Realizar uma requisição POST e verificar se os valores do cabeçalho (header) estão corretos                      | 
 | POST   | /users   | Realizar uma requisição POST e validar se o ID retornado no corpo da resposta é único e possui o formato correto |
 | POST   | /users   | Realizar uma requisição POST utilizando um BODY vazio                                                            |
 | POST   | /users   | Realizar uma requisição POST utilizando um BODY metade                                                           |
 | POST   | /users   | Realizar uma requisição POST utilizando um BODY com dados inválidos                                              |
 | POST   | /users   | Realizar uma requisição POST utilizando um BODY com valores nulos (null)                                         |
 | POST   | /users   | Realizar uma requisição POST utilizando um BODY com caracteres especiais                                         |
 | POST   | /users   | Deve garantir que o tempo de resposta seja menor que 200ms                                                       |
 | POST   | /users   | Deve garantir que o tempo de resposta seja menor que 500ms                                                       |
 | GET    | /users   | Realizar uma requisição GET e verificar se o status code retornado está correto                                  |
 | GET    | /users   | Realizar uma requisição GET com um ID válido e verificar se o status code retornado com sucesso                  |
 | GET    | /users   | Realizar uma requisição GET e validar se os valores do cabeçalho (header) estão corretos                         |
 | GET    | /users   | Realizar uma requisição GET e validar se os dados retornados estão em um formato de objeto válido                |
 | GET    | /users   | Realizar uma requisição GET utilizando um ID com caracteres especiais                                            |
 | GET    | /users   | Realizar uma requisição GET utilizando um ID contendo espaço em branco                                           |
 | GET    | /users   | Realizar uma requisição GET utilizando um ID no formato string                                                   |
 | GET    | /users   | Realizar uma requisição GET utilizando um ID vazio                                                               |
 | GET    | /users   | Realizar uma requisição GET utilizando um ID com valor nulo (null)                                               |
 | GET    | /users   | Deve garantir que o tempo de resposta seja menor que 200ms                                                       |
 | GET    | /users   | Deve garantir que o tempo de resposta seja menor que 500ms                                                       |

## 3. Tipos de Testes
- **Testes funcionais**
- **Testes não funcionais**
- **Testes automatizados e manuais**

## 4. Critérios de Aceitação
- Validar o funcionamento das requisições GET e POST.
- Verificar se os status codes retornados estão corretos (200, 201, 400 e 500).
- Garantir que a resposta da API contenha todos os campos esperados no retorno.

## 5. Ambientes e Ferramentas
- **Ambiente:** Teste 
- **Ferramentas usadas:** Cypress e Postman

## 6. Casos de Teste



## 7. Gerenciamento de Defeitos (Bugs)
- **Plataforma utilizada:** Github
- **Critérios de Prioridade:**
  - **Alta:** Requisições GET ou POST falham completamente, impedindo o funcionamento da API.
  API retorna um status code incorreto para operações esperadas (exemplo: erro 500 inesperado ao tentar criar um recurso). Resposta da API não contém os campos obrigatórios, impossibilitando o uso correto dos dados. Requisições GET ou POST falham completamente, impedindo o funcionamento da API. 
  API retorna um status code incorreto para operações esperadas (exemplo: erro 500 inesperado ao tentar criar um recurso). Resposta da API não contém os campos obrigatórios, impossibilitando o uso correto dos dados.
  - **Média:** API retorna um status code inesperado, mas a funcionalidade ainda pode ser utilizada com limitações (exemplo: 201 retornando 200 sem afetar a funcionalidade principal).
Erros na estrutura da resposta da API, como formatos inconsistentes de dados (exemplo: um campo que deveria ser um número vindo como string).
Pequenos problemas de desempenho que impactam a resposta da API, mas sem impedir completamente sua execução.
  - **Baixa:** Pequenas inconsistências na resposta da API, como valores padrão diferentes do esperado, mas que não afetam a funcionalidade.
Diferenças sutis no formato da resposta que não quebram a aplicação, mas podem gerar confusão para os consumidores da API.
Tempos de resposta ligeiramente acima do esperado, mas ainda dentro de limites aceitáveis.

## 8. Riscos
- **Possíveis problemas no teste:** Serviço da API REST {JSON} Placeholder não funcionando corretamente.