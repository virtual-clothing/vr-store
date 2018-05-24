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
})

describe('testing men image', () => {
    it('When you click on it it will open the man', () => {
        cy.visit('localhost:4444')
            cy.get('img.sc-gipzik.kSgmvx')
                .eq(0).click();
    })
})


describe('testing woman image', () => {
    it('When you click on it it will open the woman', () => {
        cy.visit('localhost:4444')
            cy.get('img.sc-gipzik.kSgmvx')
                .eq(1).click();
    })
})


describe('testing kids image', () => {
    it('When you click on it it will open the kids', () => {
        cy.visit('localhost:4444')
            cy.get('img.sc-gipzik.kSgmvx')
                .eq(2).click();
    })
})

describe('testing chat button', () => {
    it('When you click on chat will open', () => {
        cy.visit('localhost:4444')
            cy.get('button.jss18.jss2.jss8.jss1')
            .click();
    })
})

describe('testing bottom chat button', () => {
    it('When you click on chat will open', () => {
        cy.visit('localhost:4444')
            cy.get('button.jss18.jss2.jss8.jss1')
            .click();
    })
})


describe('testing top chat button', () => {
    it('When you click on chat will open', () => {
        cy.visit('localhost:4444')
            cy.get('img.sc-kgoBCf.biPfon')
            .eq(0).click();
        })
})

