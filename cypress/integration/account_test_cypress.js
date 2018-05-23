describe('testing Home page', () =>{
    it('navigate to item from home page', () => {
        cy.visit('localhost:3000')
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
})