describe('project',function(){

    it('children services',function(){

        cy.visit("https://open.alberta.ca/dataset")
        cy.get('#field-order-by').select('metadata_created desc').should('have.value','metadata_created desc')


    })
})