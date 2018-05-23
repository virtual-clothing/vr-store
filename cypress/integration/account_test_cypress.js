describe('testing Home page', () =>{
    it('navigate to item from home page', () => {
        cy.visit('localhost:4444')
        cy.get('a')
            .contains('Men')
            .should('contain', 'Men')
            .click();
        cy.get('div.sc-kgAjT.fwBLMi')
            .click();
        cy.get('div.sc-eqIVtm.gZZquL')
            .contains('m')
            .click();
    })
    // it('other stuff', () => {
    //     cy.visit('localhost:4444')
    //     cy.get('a')
    //         .contains('Women')
    //         .should('contain', 'Woman')
    // })
})