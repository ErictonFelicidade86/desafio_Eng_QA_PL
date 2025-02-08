describe('Cadastro', () => {

    beforeEach(() => {
        cy.visit('')
    })

    it('Deve cadastrar um usuário com sucesso', () => {        
        cy.formsCadastro()
        cy.enviarCadastro()
        cy.mensagemAlerta('Cadastro realizado com sucesso!')
    })

    context('Não deve cadastrar usando dados inválidos', () => {

        it('tentar cadastrar sem preencher o nome', () => {
            cy.formsSemCampoNome()
            cy.enviarCadastro() 
            cy.wait(1000)
        });

        it('tentar cadastrar sem preencher o sobrenome', () => {
            cy.formsSemSobrenome()
            cy.enviarCadastro()         
            cy.wait(2000)
        });

        it('tentar cadastrar sem preencher o email', () => {
            cy.formsSemEmail()
            cy.enviarCadastro()
            cy.wait(2000)
        });

        it('tentar cadastrar sem preencher o repetir email', () => {
            cy.formsRepetirEmail()
            cy.enviarCadastro()
            cy.wait(2000)
        });

        it('tentar cadastrar com email diferente', () => {
            cy.formsEmailDiferente()
            cy.enviarCadastro()
            cy.wait(2000)
        });

        it('tentar cadastrar com uma senha fraca', () => {
            cy.formsSenhaFraca()
            cy.enviarCadastro()
            cy.wait(2000)
        });

        it('tentar cadastrar com senha minima', () => {
            cy.formsSenhaMinima()
            cy.enviarCadastro()
            cy.wait(2000)
        });

        it('tentar cadastrar sem uma letra maiuscula', () => {
            cy.formsSemLetraMaiuscula()
            cy.enviarCadastro()
            cy.wait(2000)
        })
    })
})

