# Cenários de Teste - API REST {JSON} Placeholder

## 1. Introdução
O objetivo deste plano de teste é verificar se as requisições API Rest estão funcionam como o esperado.

## 2. Casos de Teste
Os Endpoint GET e POST que serão testados:

 | Método | Endpoint | Cenário                                                                                                          | Entrada     |Saída Esperada             | Resultado Obtido             | Status          |
 |--------|----------|------------------------------------------------------------------------------------------------------------------|-------------|---------------------------|------------------------------|---------------- |
 | POST   | /users   | Realizar uma requisição POST e validar se o status code de sucesso é retornado ao enviar dados válidos           | Body Válido | Status code: 201 Created  | Criou o usuários com suceso  |✅ Aprovado     |  
 | POST   | /users   | Realizar uma requisição POST e verificar se os valores do cabeçalho (header) estão corretos                      | Body Válido | Status code: 201 Created  | Content-type: "application/json"   |✅ Aprovado     |
 | POST   | /users   | Realizar uma requisição POST e validar se o ID retornado no corpo da resposta é único e possui o formato correto | Body Válido | Status code: 201 Created  | Validou o id do body   |✅ Aprovado     |
 | POST   | /users   | Realizar uma requisição POST utilizando um BODY vazio                                                            | Body Vazio  | Status code: 400 Bad Request | A API retornou um status de sucesso indevidamente, mesmo com o body da resposta vazio|❌ Reprovado |
 | POST   | /users   | Realizar uma requisição POST utilizando um BODY incompleto                                                  | Body com dados incompleto | Status code: 400 Bad Request | A API retornou um status de sucesso indevidamente, mesmo com o body da resposta incompleto|❌ Reprovado |
 | POST   | /users   | Realizar uma requisição POST utilizando um BODY com dados inválidos                                              | Body com dados invalido | Status code: 400 Bad Request | A API retornou um status de sucesso indevidamente, mesmo com o body da resposta inválido|❌ Reprovado |
 | POST   | /users   | Realizar uma requisição POST utilizando um BODY com valores nulos (null)                                         | Body com dados null | Status code: 400 Bad Request | A API retornou um status de sucesso indevidamente, mesmo com o body da resposta contendo dados nulos|❌ Reprovado |
 | POST   | /users   | Realizar uma requisição POST utilizando um BODY com caracteres especiais                                         | Body com dados caracter especial | Status code: 400 Bad Request | A API retornou um status de sucesso indevidamente, mesmo com o body da resposta contendo com caracter especial|❌ Reprovado |
 | POST   | /users   | Deve garantir que o tempo de resposta seja menor que 200ms                                                       | Body Válido    | Seja o menor tempo que 200ms| A Api não o tempo de resposta esperao de 200ms|❌ Reprovado |
 | POST   | /users   | Deve garantir que o tempo de resposta seja menor que 500ms                                                       | Body Válido    | Seja menor tempo que 500ms  | A API atendeu o tempo de resposta esperada menis de 500ms|✅ Aprovado     | 
 | GET    | /users   | Realizar uma requisição GET e verificar se o status code retornado está correto                                  | Sem entrada    ! Status code: 200 OK | Retornou todos os dados |✅ Aprovado     |
 | GET    | /users   | Realizar uma requisição GET com um ID válido e verificar se o status code retornado com sucesso                  | Um id válido   | Status code: 200 Ok | Retornou um objeto especifico |✅ Aprovado     |
 | GET    | /users   | Realizar uma requisição GET e validar se os valores do cabeçalho (header) estão corretos                         | Um application/json | Status code: 200 Ok | Retornou um objeto especifico |✅ Aprovado     | 
 | GET    | /users   | Realizar uma requisição GET e validar se os dados retornados estão em um formato de objeto válido                | Sem entrada | Status code: 200 Ok | Está retornando o objeto |✅ Aprovado     |
 | GET    | /users   | Realizar uma requisição GET utilizando um ID com caracteres especiais                                            | id com caracter especial | Status code: 404 Not Found | Not Found |✅ Aprovado     |  
 | GET    | /users   | Realizar uma requisição GET utilizando um ID contendo espaço em branco                                           | id com caracter especial | Status code: 404 Not Found | Not Found |✅ Aprovado     |
 | GET    | /users   | Realizar uma requisição GET utilizando um ID no formato string                                                   | id com caracter especial | Status code: 404 Not Found | Not Found |✅ Aprovado     |
 | GET    | /users   | Realizar uma requisição GET utilizando um ID fora do padrão                                                      | id com caracter especial | Status code: 404 Not Found | Not Found |✅ Aprovado     |
 | GET    | /users   | Realizar uma requisição GET utilizando um ID com valor nulo (null)                                               | id com caracter especial | Status code: 404 Not Found | Not Found |✅ Aprovado     |
 | GET    | /users   | Deve garantir que o tempo de resposta seja menor que 200ms                                                       | Sem entrada    | Seja menor tempo que 500ms  | A API atendeu o tempo de resposta esperada menis de 200ms|✅ Aprovado     | 
 | GET    | /users   | Deve garantir que o tempo de resposta seja menor que 500ms                                                       | Sem entrada    | Seja menor tempo que 500ms  | A API atendeu o tempo de resposta esperada menis de 500ms|✅ Aprovado     | 

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

## 6. Resultados de Aprovado

### Realizar uma requisição POST e validar se o status code de sucesso é retornado ao enviar dados válidos  
 
### Resposta da requisição POST bem-sucedido

![image](c:\Users\jessi\Pictures\Screenshots\Realizar uma requisição POST e validar se o status code de sucesso é retornado ao enviar dados válidos.png)


## 7. Resultados Revrovados

## 8. Riscos
- **Possíveis problemas no teste:** Serviço da API REST {JSON} Placeholder não funcionando corretamente.