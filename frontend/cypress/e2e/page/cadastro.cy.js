describe('Cadastro de usuário', () => {

    beforeEach(() => {
        cy.go() //acessar o site
    })

    it('Deve cadastrar um usuário com sucesso', () => {        
        cy.formsCadastro()
        cy.enviarCadastro()
        cy.mensagemAlerta('Cadastro realizado com sucesso!')
    })
})

describe('Cadastro de usuarios com dado inválidos', ()=> {
   
    beforeEach(() => {
        cy.go() //acessar o site
    })
   
    context('Não deve cadastrar o usuário sem faltar um campo obrigatório', () => {

        it('Tentar cadastrar sem preencher nenhum campo', () => {
            cy.enviarCadastro()
            cy.ValidaMensagem()
            cy.formsSemInformarDados()
        })

        it('Tentar cadastrar sem preencher o nome', () => {
            cy.formsSemCampoNome()
            cy.enviarCadastro()
            cy.get('#first-name-error').should('be.visible').and('contain', 'O nome é obrigatório.')
        })

        it('Tentar cadastrar sem preencher o sobrenome', () => {
            cy.formsSemSobrenome()
            cy.enviarCadastro()
            cy.get('#last-name-error').should('be.visible').and('contain', 'O sobrenome é obrigatório.')
        })

        it('Tentar cadastrar sem preencher o email', () => {
            cy.formsSemEmail()
            cy.enviarCadastro()
            cy.get('#email-error').should('be.visible').and('contain', 'O e-mail é obrigatório.')
        })

        it('Tentar cadastrar sem preencher o repetir email', () => {
            cy.formsSemRepetirEmail()
            cy.enviarCadastro()
            cy.get('#confirm-email-error').should('be.visible').and('contain', 'A confirmação do e-mail é obrigatório.')
        })

        it('Tentar cadastrar com email diferente', () => {
            cy.formsEmailDiferente()
            cy.enviarCadastro()
            cy.get('#confirm-email-error').should('be.visible').and('contain', 'Os e-mails não coincidem.')
        })

        it('Tentar cadastrar com uma senha fraca', () => {
            cy.formsSenhaFraca()
            cy.enviarCadastro()
            cy.ValidaMensagem()
        })

        it('Tentar cadastrar com senha minima', () => {
            cy.formsSenhaMinima()
            cy.enviarCadastro()
            cy.ValidaMensagem()
        })

        it('Tentar cadastrar sem uma letra maiuscula', () => {
            cy.formsSemLetraMaiuscula()
            cy.enviarCadastro()
            cy.ValidaMensagem()
        })

        it('Tentar cadastrar usando um senha inválido', () => {
            cy.formsSenhaInvalida()
            cy.enviarCadastro()
            cy.ValidaMensagem()
        })
    })
})