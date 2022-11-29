describe('Assertions',function()
{

 it('my secondTest case',function()
 {
cy.visit('https://example.cypress.io/')
cy.contains('get').click()
cy.get('#query-btn').should('contain','Button')
.should('have.class','query-btn')
.should('be.visible')

cy.get('#query-btn').invoke('attr','id')
.should('equal','query-btn')

cy.get('#query-btn')
.should('contain','Button')
.and('have.class','query-btn')
.and('be.visible')

//Excplicit assertions
//expect

expect(true).to.be.true
let name = 'Priya'
expect(name).to.be.equal('Priya')

//assert

assert.equal(4,4,'not equal')



 })   


})

