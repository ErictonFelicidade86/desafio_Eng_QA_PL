/// <reference types="cypress" />
import data from '../fixtures/email.json'

Cypress.Commands.add('formsCadastro', () => {
    cy.get('#first-name').type(data.valido.name)
    cy.get('#last-name').type(data.valido.sobrenome)
    cy.get('#email').type(data.valido.email)
    cy.get('#confirm-email').type(data.valido.emailConfirmar)
    cy.get('#password').type(data.valido.senha)
})

Cypress.Commands.add('enviarCadastro', () => {
    cy.get('button[type="submit"]').click()
    cy.on('window:alert', (texto) => {
        expect(texto).to.equal('Cadastro realizado com sucesso!')
    })
})

Cypress.Commands.add('mensagemAlerta', () => {
    cy.on('window:alert', (texto) => {
        expect(texto).to.equal('Cadastro realizado com sucesso!')
    })
})

Cypress.Commands.add('formsSemCampoNome', () => {
    cy.get('#last-name').type(data.valido.sobrenome)
    cy.get('#email').type(data.valido.email)
    cy.get('#confirm-email').type(data.valido.emailConfirmar)
    cy.get('#password').type(data.valido.senha)
})

Cypress.Commands.add('formsSemSobrenome', () => {
    cy.get('#first-name').type(data.valido.name)
    cy.get('#email').type(data.valido.email)
    cy.get('#confirm-email').type(data.valido.emailConfirmar)
    cy.get('#password').type(data.valido.senha)
})

Cypress.Commands.add('formsSemEmail', () => {
    cy.get('#first-name').type(data.valido.name)
    cy.get('#last-name').type(data.valido.sobrenome)
    cy.get('#confirm-email').type(data.valido.emailConfirmar)
    cy.get('#password').type(data.valido.senha)
})

Cypress.Commands.add('formsRepetirEmail', () => {
    cy.get('#first-name').type(data.valido.name)
    cy.get('#last-name').type(data.valido.sobrenome)
    cy.get('#email').type(data.valido.email)
    cy.get('#password').type(data.valido.senha)
})

Cypress.Commands.add('formsEmailDiferente', () => {
    cy.get('#first-name').type(data.valido.name)
    cy.get('#last-name').type(data.valido.sobrenome)
    cy.get('#email').type(data.valido.email)
    cy.get('#confirm-email').type(data.diferente.email)
    cy.get('#password').type(data.valido.senha)
})

Cypress.Commands.add('formsSenhaFraca', () => {
    cy.get('#first-name').type(data.valido.name)
    cy.get('#last-name').type(data.valido.sobrenome)
    cy.get('#email').type(data.valido.email)
    cy.get('#confirm-email').type(data.valido.emailConfirmar)
    cy.get('#password').type(data.senha_fraca.senha)
})

Cypress.Commands.add('formsSenhaMinima', () => {
    cy.get('#first-name').type(data.valido.name)
    cy.get('#last-name').type(data.valido.sobrenome)
    cy.get('#email').type(data.valido.email)
    cy.get('#confirm-email').type(data.valido.emailConfirmar)
    cy.get('#password').type(data.senha_minima.senha)
})

Cypress.Commands.add('formsSemLetraMaiuscula', () => {
    cy.get('#first-name').type(data.valido.name)
    cy.get('#last-name').type(data.valido.sobrenome)
    cy.get('#email').type(data.valido.email)
    cy.get('#confirm-email').type(data.valido.emailConfirmar)
    cy.get('#password').type(data.senha_semLetraMaiuscula.senha)
})