describe('Cadastro', () => {

    beforeEach(() => {
        cy.go(); //acessar o site
    })

    it('Deve cadastrar um usuário com sucesso', () => {        
        cy.formsCadastro()
        cy.enviarCadastro()
        cy.mensagemAlerta('Cadastro realizado com sucesso!')
    })

    context('Não deve cadastrar usando dados inválidos', () => {

        it('tentar cadastrar sem preencher o nome', () => {
            cy.executarFormulario('formsSemCampoNome');
            cy.validarCampoObrigatorio('first-name');
        });

        it('tentar cadastrar sem preencher o sobrenome', () => {
            cy.executarFormulario('formsSemSobrenome');
            cy.validarCampoObrigatorio('last-name');
        });

        it('tentar cadastrar sem preencher o email', () => {
            cy.executarFormulario('formsSemEmail');
            cy.validarCampoObrigatorio('email');
        });

        it('tentar cadastrar sem preencher o repetir email', () => {
            cy.executarFormulario('formsRepetirEmail');
            cy.validarCampoObrigatorio('confirm-email');
        });

        it('tentar cadastrar com email diferente', () => {
            cy.executarFormulario('formsEmailDiferente');
            cy.validarCampoObrigatorio('confirm-email');
        });

        it('tentar cadastrar com uma senha fraca', () => {
            cy.formsSenhaFraca()
            cy.enviarCadastro()
            cy.ValidaMensagem()
        });

        it('tentar cadastrar com senha minima', () => {
            cy.formsSenhaMinima()
            cy.enviarCadastro()
            cy.ValidaMensagem()
        });

        it('tentar cadastrar sem uma letra maiuscula', () => {
            cy.formsSemLetraMaiuscula()
            cy.enviarCadastro()
            cy.ValidaMensagem()
        })
    })
})

