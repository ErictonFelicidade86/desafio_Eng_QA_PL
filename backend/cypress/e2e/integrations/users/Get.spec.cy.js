/// <reference types="cypress" />

describe('GET /users', () => {
  let uniqueID
 
  it('Realizar uma requisição GET e verificar se o status code retornado está correto', () => {
    cy.getDataAll()
    .then( res => {
      expect(res.status).to.eq(200)
      let listaLength = res.body.length
      let randomIndex = Math.floor(Math.random() * listaLength)
      let randomId = res.body[randomIndex]
      uniqueID = randomId.id
      expect(uniqueID).to.eq(uniqueID)
    })
  })

  it('Realizar uma requisição GET com um ID válido e verificar se o status code retornado com sucessos', () => {
    cy.getUniqueId(uniqueID)
    .then( res => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('id', uniqueID);
    })
  })

  it('Realizar uma requisição GET e validar se os valores do cabeçalho (header) estão corretos', () => {
    cy.getHeaderValido()
    .then( res => {
      expect(res.status).to.eq(200)
      expect(res.headers).to.have.property('content-type');
      expect(res.headers['content-type']).to.include('application/json');
    })
  })

  it('Realizar uma requisição GET e validar se os dados retornados estão em um formato de objeto válido', () => {
    cy.getObjetoValido()
    .then( res => {
      expect(res.status).to.eq(200)
      expect(res.body[0]).to.be.an('object');
    })
  })

  context('Realizar uma requisição GET com um ID inválido no sistema e verificar se o status code retornado indica erro', () => {
    it('Realizar uma requisição GET utilizando um ID com caracteres especiais', () => {
      cy.getIdEspacoBranco()
      .then(res => {
        expect(res.status).to.eq(404)
      })
    })

    it('Realizar uma requisição GET utilizando um ID contendo espaço em branco', () => {
      cy.getIdEspacoBranco()
      .then(res => {
        expect(res.status).to.eq(404)
      })
    })

    it('Realizar uma requisição GET utilizando um ID no formato string', () => {
      cy.getIdString()
      .then(res => {
        expect(res.status).to.eq(404)
      })
    })

    it('Realizar uma requisição GET utilizando um ID vazio', () => {
      cy.getEmptyId()
      .then(res => {
        expect(res.status).to.eq(200)
      })
    })

    it('Realizar uma requisição GET utilizando um ID com valor nulo (null)', () => {
      cy.getIdNull()
      .then(res => {
        expect(res.status).to.eq(404)
      })
    })
  })
})

describe('GET /users Validação do tempo de resposta', () => {
  it('Deve garantir que o tempo de resposta seja menor que 200ms', ()=> {
    cy.api({
      method: 'GET',
      url: '/users',
      failStatusCode: false
    }).then( res => {
      expect(res.duration).to.be.lessThan(200)
    })
  })

  it('Deve garantir que o tempo de resposta seja menor que 500ms', ()=> {
    cy.api({
      method: 'GET',
      url: '/users',
      failStatusCode: false
    }).then( res => {
      expect(res.duration).to.be.lessThan(500)
    })
  })
})