# Plano de Teste com K6 - API REST {JSON} Placeholder

## 1. Introdução
O objetivo deste plano de teste é verificar se os testes não funcionais da API usando **K6**

## 2. Escopo
Funcionalidades testadas:
- **Requisição POST** O cadastro com sucesso deve ocorrer em até 2 segundos
- **Requisição POST** Cadastros sem sucesso deve ocorrer em até 2 segundos
- **Requisição POST** A margem de erro no cadastro deve ser de pelo menos 1%
- **Requisição POST** Deve poder cadastrar até 100 usuários simultâneos
- **Requisição GET** Deve trazer todos os solicitando a requisição **GET** até 100 usuários simultâneos
- **K6** - ferramenta para teste de performance, carga e stress etc...

## 3. Tipos de Testes
- **Testes não funcionais**

## 4. Critérios de Aceitação
- O usuário deve conseguir concluir o cadastro com sucesso


## 5. Ambientes e Ferramentas
- **Ambiente:** Teste 
- **Ferramentas usadas:** K6
- **Plataforma utilizada:** Github Aciotn

## 6. Resultado dos Teste

### Teste de Performance da requisição POST e GET

![image](../tests/assets/performance/teste_performance.png)

### Teste de Carga da requisição POST e GET

![image](../tests/assets/carga/teste_carga.png) 

### Teste de Stress da requisição POST e GET

![image](../tests/assets/stress/teste_stress.png) 

## 7. Riscos e Dependências
- **Possíveis problemas no teste:** API REST instável ou fora do ar