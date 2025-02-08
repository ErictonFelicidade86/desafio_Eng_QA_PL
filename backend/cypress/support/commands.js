/// <reference types="cypress" />
import json from '../fixtures/dataBody.json'
import data from '../fixtures/dataID.json'

// ENDPOINT POST

Cypress.Commands.add('postBodyValido', ()=> {
    cy.api({
      method: 'POST',
      url: '/users',
      body: json.body.Valido
    }).then(res => { return res })
})

Cypress.Commands.add('postHeader', () => {
    cy.api({
      method: 'POST',
      url: '/users',
      body: json.body.Valido
    }).then(res => { return res })
})

Cypress.Commands.add('postValidarIdBody', () => {
    cy.api({
      method: 'POST',
      url: '/users',
      body: json.body.Valido
    }).then(res => { return res })
})

Cypress.Commands.add('postBodyEmpty', ()=> {
    cy.api({
        method: 'POST',
        url: '/users',
        body: json.body.Empty,
        failOnStatusCode: false
    }).then(res => { return res })
})

Cypress.Commands.add('postBodyIncompleto', ()=> {
    cy.api({
        method: 'POST',
        url: '/users',
        body: json.body.Metade,
        failOnStatusCode: false
    }).then(res => { return res })
})

Cypress.Commands.add('postBodyInvalido', () => {
    cy.api({
        method: 'POST',
        url: '/users',
        body: json.body.Invalido,
        failOnStatusCode: false
    }).then(res => { return res })
})

Cypress.Commands.add('postBodyValorNull', ()=> {
    cy.api({
        method: 'POST',
        url: '/users',
        body: json.body.NullValues,
        failOnStatusCode: false
    }).then(res => { return res })
})

Cypress.Commands.add('postBodyValorCaracterEspecial', ()=> {
    cy.api({
        method: 'POST',
        url: '/users',
        body: json.body.SpecialCharacters,
        failOnStatusCode: false
    }).then(res => { return res })
})

Cypress.Commands.add('postTempoMeno200ms', () => {
    cy.api({
      method: 'POST',
      url: '/users',
      body:  json.body.Valido,
      failStatusCode: false
    }).then( res => { return res })
})

Cypress.Commands.add('postTempoMeno500ms', () => {
    cy.api({
      method: 'POST',
      url: '/users',
      body:  json.body.Valido,
      failStatusCode: false
    }).then( res => { return res })
})

// ENDPOINT GET

Cypress.Commands.add('getDataAll', () => {
    cy.api({
      method: 'GET',
      url:  '/users'
    }).then( res => { return res })
})

Cypress.Commands.add('getUniqueId', (uniqueID) => {
    cy.api({
      method: 'GET',
      url:  `/users/${uniqueID}`
    }).then( res => { return res })
})

Cypress.Commands.add('getHeaderValido', () => {
    cy.api({
      method: 'GET',
      url:  '/users'
    }).then(res => { return res })
})

Cypress.Commands.add('getObjetoValido', () => {
    cy.api({
      method: 'GET',
      url:  '/users'
    }).then(res => { return res })
})

Cypress.Commands.add('getIdCaratcerSpecial', () => {
    cy.api({
        method: 'GET',
        url: `/users/${data.idInvalid.CaratcerSpecial}`,
        failOnStatusCode: false
    }).then(res => { return res })
})
Cypress.Commands.add('getIdEspacoBranco', () => {
    cy.api({
        method: 'GET',
        url: `/users/${data.idInvalid.EspacoBranco}`,
        failOnStatusCode: false
    }).then(res => { return res })
})

Cypress.Commands.add('getIdString', () => {
    cy.api({
        method: 'GET',
        url: `/users/${data.idInvalid.String}`,
        failOnStatusCode: false
    }).then(res => { return res })
})

Cypress.Commands.add('getEmptyId', () => {
    cy.api({
        method: 'GET',
        url: `/users/${data.idInvalid.invalido}`,
        failOnStatusCode: false
    }).then(res => { return res })
})

Cypress.Commands.add('getIdNull', () => {
    cy.api({
        method: 'GET',
        url: `/users/${data.idInvalid.Null}`,
        failOnStatusCode: false
    }).then(res => { return res })
})

Cypress.Commands.add('getTempoMeno200ms', () => {
    cy.api({
      method: 'POST',
      url: '/users',
      failStatusCode: false
    }).then( res => { return res })
})

Cypress.Commands.add('getTempoMeno500ms', () => {
    cy.api({
      method: 'POST',
      url: '/users',
      failStatusCode: false
    }).then( res => { return res })
})