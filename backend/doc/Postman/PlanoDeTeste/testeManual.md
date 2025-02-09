# Cenários de Teste Executando com POSTMAN - API REST {JSON} Placeholder

Este documento apresenta os endpoints testados manualmente no **Postman**, cobrindo diversos cenários de testes.

## 2. Casos de Teste
Os Endpoint GET e POST que serão testados:

 | Método | Endpoint | Cenário                                                                                                          | Entrada     |Saída Esperada             | Resultado Obtido             | Status          |
 |--------|----------|------------------------------------------------------------------------------------------------------------------|-------------|---------------------------|------------------------------|---------------- |
 | POST   | /users   | Realizar uma requisição POST e validar se o status code de sucesso é retornado ao enviar dados válidos           | Body Válido | Status code: 201 Created  | A API criou o usuários com suceso  |✅ Aprovado     |  
 | POST   | /users   | Realizar uma requisição POST utilizando um BODY vazio                                                            | Body Vazio  | Status code: 400 Bad Request | A API retornou um status de sucesso indevidamente, mesmo com o body da resposta vazio|❌ Reprovado |
 | POST   | /users   | Realizar uma requisição POST utilizando um BODY incompleto                                                       | Body com dados incompleto | Status code: 400 Bad Request | A API retornou um status de sucesso indevidamente, mesmo com o body da resposta incompleto|❌ Reprovado |
 | POST   | /users   | Realizar uma requisição POST utilizando um BODY com dados inválidos                                              | Body com dados invalido | Status code: 400 Bad Request | A API retornou um status de sucesso indevidamente, mesmo com o body da resposta inválido|❌ Reprovado |
 | POST   | /users   | Realizar uma requisição POST utilizando um BODY com valores nulos (null)                                         | Body com dados null | Status code: 400 Bad Request | A API retornou um status de sucesso indevidamente, mesmo com o body da resposta contendo dados nulos|❌ Reprovado |
 | POST   | /users   | Realizar uma requisição POST utilizando um BODY com caracteres especiais                                         | Body com dados caracter especial | Status code: 400 Bad Request | A API retornou um status de sucesso indevidamente, mesmo com o body da resposta contendo com caracter especial|❌ Reprovado |
 | GET    | /users   | Realizar uma requisição GET e verificar se o status code retornado está correto                                  | Sem entrada    | Status code: 200 OK | A API retornou e validou corretamente todos os dados após a requisição ser bem-sucedida |✅ Aprovado     |
 | GET    | /users   | Realizar uma requisição GET com um ID válido e verificar se o status code retornado com sucesso                  | Um id válido| Status code: 200 Ok    | A API validou corretamente um objeto específico na resposta da requisição bem-sucedida |✅ Aprovado     |
 | GET    | /users   | Realizar uma requisição GET utilizando um ID com caracteres especiais                                            | id com caracter especial | Status code: 404  | A API validou um **ID** com caracteres especiais e retornou **Not Found**, conforme esperado |✅ Aprovado     |  
 | GET    | /users   | Realizar uma requisição GET utilizando um ID contendo espaço em branco                                           | id com com espaço em branco | Status code: 404  | A API validou um **ID** contendo espaço em branco e retornou **Not Found**, conforme esperado |✅ Aprovado     |
 | GET    | /users   | Realizar uma requisição GET utilizando um ID no formato string                                                   | id com uma string | Status code: 404  | A API validou um **ID** em formato de string e retornou **Not Found**, conforme esperado |✅ Aprovado     |
 | GET    | /users   | Realizar uma requisição GET utilizando um ID fora do padrão                                                      | id com fora do padrão | Status code: 404  | A API validou um **ID** fora do padrão esperado e retornou **Not Found**, conforme o comportamento esperado |✅ Aprovado     |
 | GET    | /users   | Realizar uma requisição GET utilizando um ID com valor nulo (null)                                               | id nulo | Status code: 404  | A API validou um **ID nulo** e retornou **Not Found**, conforme esperado |✅ Aprovado     |

## 3. Tipos de Testes
- **Testes funcionais**
- **Testes Manuais**

## 4. Critérios de Aceitação
- Validar o funcionamento das requisições GET e POST.
- Verificar se os status codes retornados estão corretos (200, 201, 400 e 500).
- Garantir que a resposta da API contenha todos os campos esperados no retorno.

## 5. Ambientes e Ferramentas
- **Ambiente:** Teste 
- **Ferramentas usadas:** Postman

## 6. Resultados de Aprovado

### Realizar uma requisição POST e validar se o status code de sucesso é retornado ao enviar dados válidos  
### Resposta da requisição POST bem-sucedido
![image](../assets/aprovado/Realizar%20uma%20requisição%20POST%20e%20validar%20se%20o%20status%20code%20de%20sucesso%20é%20retornado%20ao%20enviar%20dados%20válidos.png)

### Realizar uma requisição GET e verificar se o status code retornado está correto
### Resposta da requisição GET bem-sucedido
![image](../assets/aprovado/Realizar%20uma%20requisição%20GET%20e%20verificar%20se%20o%20status%20code%20retornado%20está%20correto.png)

### Realizar uma requisição GET com um ID válido e verificar se o status code retornado com sucesso
### Resposta da requisição GET bem-sucedido
![image](..//assets/aprovado/Realizar%20uma%20requisição%20GET%20com%20um%20ID%20válido%20e%20verificar%20se%20o%20status%20code%20retornado%20com%20sucessos.png)

### Realizar uma requisição GET utilizando um ID com caracteres especiais
### Resposta da requisição GET bem-sucedido
![image](../assets/aprovado/Realizar%20uma%20requisição%20GET%20utilizando%20um%20ID%20com%20caracteres%20especiais.png)

### Realizar uma requisição GET utilizando um ID contendo espaço em branco
### Resposta da requisição GET bem-sucedido
![image](../assets/aprovado/Realizar%20uma%20requisição%20GET%20utilizando%20um%20ID%20contendo%20espaço%20em%20branco.png)

### Realizar uma requisição GET utilizando um ID no formato string
### Resposta da requisição GET bem-sucedido
![image](../assets/aprovado/Realizar%20uma%20requisição%20GET%20utilizando%20um%20ID%20no%20formato%20string.png)

### Realizar uma requisição GET utilizando um ID fora do padrão
### Resposta da requisição GET bem-sucedido
![image](../assets/aprovado/Realizar%20uma%20requisição%20GET%20utilizando%20um%20ID%20fora%20do%20padrão.png)

### Realizar uma requisição GET utilizando um ID com valor nulo (null)
### Resposta da requisição GET bem-sucedido
![image](../assets/aprovado/Realizar%20uma%20requisição%20GET%20utilizando%20um%20ID%20com%20valor%20nulo.png)

## 7. Resultados Rerovados

### Realizar uma requisição POST utilizando um BODY vazio_failed
### Resposta  da requisição POST não deveria ter sido bem-sucedida.
![image](../assets/reprovado/Realizar%20uma%20requisição%20POST%20utilizando%20um%20BODY%20vazio.png)

### Realizar uma requisição POST utilizando um BODY incompleto_failed
### Resposta  da requisição POST não deveria ter sido bem-sucedida.
![image](../assets/reprovado/Realizar%20uma%20requisição%20POST%20utilizando%20um%20BODY%20incompleto.png)

### Realizar uma requisição POST utilizando um BODY com valores nulos_failed
### Resposta  da requisição POST não deveria ter sido bem-sucedida.
![image](../assets/reprovado/Realizar%20uma%20requisição%20POST%20utilizando%20um%20BODY%20com%20valores%20nulos.png)

### Realizar uma requisição POST utilizando um BODY com dados inválidos_failed
### Resposta  da requisição POST não deveria ter sido bem-sucedida.
![image](../assets/reprovado/Realizar%20uma%20requisição%20POST%20utilizando%20um%20BODY%20com%20dados%20inválidos.png)

### Realizar uma requisição POST utilizando um BODY com caracteres especiais_failed
### Resposta  da requisição POST não deveria ter sido bem-sucedida.
![image](../assets/reprovado/Realizar%20uma%20requisição%20POST%20utilizando%20um%20BODY%20com%20caracteres%20especiais.png)

## 8. Riscos
- **Possíveis problemas no teste:** Serviço da API REST {JSON} Placeholder não funcionando corretamente.