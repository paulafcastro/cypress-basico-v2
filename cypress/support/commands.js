Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Paula')
    cy.get('#lastName').type('Fernandes de Castro')
    cy.get('#email').type('paula.fcastro@live.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click() 
})
