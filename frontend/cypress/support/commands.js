/// <reference types="cypress" />
import data from '../fixtures/email.json'

// Acessando a página de cadastro
Cypress.Commands.overwrite('go', () => {
    cy.visit('')
})

// Forms do cadastro com sucesso
Cypress.Commands.add('formsCadastro', () => {
    cy.get('#first-name').type(data.valido.nome)
    cy.get('#last-name').type(data.valido.sobrenome)
    cy.get('#email').type(data.valido.email)
    cy.get('#confirm-email').type(data.valido.emailConfirmar)
    cy.get('#password').type(data.valido.senha)
})

// Botão do cadastro
Cypress.Commands.add('enviarCadastro', () => {
    cy.get('button[type="submit"]').click()
    cy.on('window:alert', (texto) => {
        expect(texto).to.equal('Cadastro realizado com sucesso!')
    })
})

// Validação da mensagem com sucesso
Cypress.Commands.add('mensagemAlerta', () => {
    cy.on('window:alert', (texto) => {
        expect(texto).to.equal('Cadastro realizado com sucesso!')
    })
})

// Tentar Cadastrar sem informa os dados do usuário
Cypress.Commands.add('formsSemInformarDados', () => {
    cy.get('#first-name-error').should('be.visible').and('contain', 'O nome é obrigatório.')
    cy.get('#last-name-error').should('be.visible').and('contain', 'O sobrenome é obrigatório.')
    cy.get('#email-error').should('be.visible').and('contain', 'O e-mail é obrigatório.')
    cy.get('#confirm-email-error').should('be.visible').and('contain', 'A confirmação do e-mail é obrigatório.')
})

// Sem informar o nome
Cypress.Commands.add('formsSemCampoNome', () => {
    cy.get('#first-name').type(data.empty.nome)
    cy.get('#last-name').type(data.valido.sobrenome)
    cy.get('#email').type(data.valido.email)
    cy.get('#confirm-email').type(data.valido.emailConfirmar)
    cy.get('#password').type(data.valido.senha)
})
// Sem informar o sobrenome
Cypress.Commands.add('formsSemSobrenome', () => {
    cy.get('#first-name').type(data.valido.nome)
    cy.get('#last-name').type(data.empty.sobrenome)
    cy.get('#email').type(data.valido.email)
    cy.get('#confirm-email').type(data.valido.emailConfirmar)
    cy.get('#password').type(data.valido.senha)
})

// Sem informar o e-mail
Cypress.Commands.add('formsSemEmail', () => {
    cy.get('#first-name').type(data.valido.nome)
    cy.get('#last-name').type(data.valido.sobrenome)
    cy.get('#email').type(data.empty.email)
    cy.get('#confirm-email').type(data.valido.emailConfirmar)
    cy.get('#password').type(data.valido.senha)
})

// Sem informar a confirmação do e-mail
Cypress.Commands.add('formsSemRepetirEmail', () => {
    cy.get('#first-name').type(data.valido.nome)
    cy.get('#last-name').type(data.valido.sobrenome)
    cy.get('#email').type(data.valido.email)
    cy.get('#confirm-email').type(data.empty.emailConfirmar)
    cy.get('#password').type(data.valido.senha)
})

//Email Diferente
Cypress.Commands.add('formsEmailDiferente', () => {
    cy.get('#first-name').type(data.valido.nome)
    cy.get('#last-name').type(data.valido.sobrenome)
    cy.get('#email').type(data.invalido.emailDiferente)
    cy.get('#confirm-email').type(data.valido.email)
    cy.get('#password').type(data.valido.senha)
})

//Confirmar Email Diferente
Cypress.Commands.add('formsConfirmaEmailDiferente', () => {
    cy.get('#first-name').type(data.valido.nome)
    cy.get('#last-name').type(data.valido.sobrenome)
    cy.get('#email').type(data.valido.email)
    cy.get('#confirm-email').type(data.invalido.emailConfirmDiferente)
    cy.get('#password').type(data.valido.senha)
})

//Senha Fraca
Cypress.Commands.add('formsSenhaFraca', () => {
    cy.get('#first-name').type(data.valido.nome)
    cy.get('#last-name').type(data.valido.sobrenome)
    cy.get('#email').type(data.valido.email)
    cy.get('#confirm-email').type(data.valido.emailConfirmar)
    cy.get('#password').type(data.invalido.senhaFraca)
})

//Senha Minima
Cypress.Commands.add('formsSenhaMinima', () => {
    cy.get('#first-name').type(data.valido.nome)
    cy.get('#last-name').type(data.valido.sobrenome)
    cy.get('#email').type(data.valido.email)
    cy.get('#confirm-email').type(data.valido.emailConfirmar)
    cy.get('#password').type(data.invalido.senhaMinima)
})

//Senha sem a letra Maiuscula
Cypress.Commands.add('formsSemLetraMaiuscula', () => {
    cy.get('#first-name').type(data.valido.nome)
    cy.get('#last-name').type(data.valido.sobrenome)
    cy.get('#email').type(data.valido.email)
    cy.get('#confirm-email').type(data.valido.emailConfirmar)
    cy.get('#password').type(data.invalido.senhaSemLetraMaiuscula)
})

//Senha fora do padrão
Cypress.Commands.add('formsSenhaForaPadrão', () =>{
    cy.get('#first-name').type(data.valido.nome)
    cy.get('#last-name').type(data.valido.sobrenome)
    cy.get('#email').type(data.valido.email)
    cy.get('#confirm-email').type(data.valido.emailConfirmar)
    cy.get('#password').type(data.invalido.senhaForaPadrao)
})

//Senha Inválida
Cypress.Commands.add('formsSenhaInvalida', () =>{
    cy.get('#first-name').type(data.valido.nome)
    cy.get('#last-name').type(data.valido.sobrenome)
    cy.get('#email').type(data.valido.email)
    cy.get('#confirm-email').type(data.valido.emailConfirmar)
    cy.get('#password').type(data.invalido.senhaInvalida)
})

//Validação da mensagem da senha fraca
Cypress.Commands.add('ValidaMensagem', () => {
    cy.get('#password-error').should('be.visible').and('contain', 'A senha deve ter pelo menos 8 caracteres');
})
