/// <reference types="cypress" />

describe('POST /users', () => {
  it('Realizar uma requisição POST e validar se o status code de sucesso é retornado ao enviar dados válidos', () => {
    cy.postBodyValido()
    .then(res => {
      expect(res.status).to.eq(201)
    })
  })

  it('Realizar uma requisição POST e verificar se os valores do cabeçalho (header) estão corretos', () => {
    cy.postHeader()
    .then(res => {
      expect(res.status).to.eq(201)
      expect(res.headers).to.have.property('content-type').and.include('application/json');
    })
  })

  it('Realizar uma requisição POST e validar se o ID retornado no corpo da resposta é único e possui o formato correto', () => {
    cy.postValidarIdBody()
    .then(res => {
      expect(res.status).to.eq(201)
      expect(res.body).to.have.property('id');
      expect(res.body.id).to.be.a('number');
      expect(res.body.id).to.be.greaterThan(0);
    })
  })

  context('Realizar uma requisição POST com um BODY contendo tipos de dados incorretos e verificar se o status code retornado indica erro', () => {
    
    it('Realizar uma requisição POST utilizando um BODY vazio', () => {
      cy.postBodyEmpty()
      .then(res => {
        expect(res.status).to.eq(400)
      })
    })

    it('Realizar uma requisição POST utilizando um BODY metade', () => {
      cy.postBodyMetade()
      .then(res => {
        expect(res.status).to.eq(400)
      })
    })
    
    it('Realizar uma requisição POST utilizando um BODY com dados inválidos', () => {
      cy.postBodyInvalido()
      .then(res => {
        expect(res.status).to.eq(400)
      })
    })

    it('Realizar uma requisição POST utilizando um BODY com valores nulos (null)', () => {
      cy.postBodyValorNull()
      .then(res => {
        expect(res.status).to.eq(400)
      })
    })

    it('Realizar uma requisição POST utilizando um BODY com caracteres especiais', () => {
      cy.postBodyValorCaracterEspecial()
      .then(res => {
        expect(res.status).to.eq(400)
      })
    })
  })
})

describe('POST /users Validação do tempo de resposta', () => {
  it('Deve garantir que o tempo de resposta seja menor que 200ms', ()=> {
    cy.tempoMeno200ms().then( res => {
      expect(res.duration).to.be.lessThan(200)
    })
  })

  it('Deve garantir que o tempo de resposta seja menor que 500ms', ()=> {
    cy.tempoMeno500ms().then( res => {
      expect(res.duration).to.be.lessThan(500)
    })
  })
})