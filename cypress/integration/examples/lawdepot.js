describe('Lawdepot',function(){

    it('practice',function(){

        cy.visit("https://www.lawdepot.com/")
        cy.get('#tag').type('res')
        cy.get('.ui-menu-item-wrapper').each(($e1,index,$list)=>{

            if($e1.text()=="Resume Builder")
            {
                cy.wrap(e1).click({force:true})
            }


        })

    
        


    })
})

it.only('Dynamic Dropdown', function () {

    cy.visit('https://www.lawdepot.com/')

    cy.get('#tag').type('res')
    cy.get('.ui-menu-item-wrapper').each(($el, index, $list)=>
        {
            let text=$el.text()
            cy.log('each -->'+text)



            if($el.text()=='Residential Rental Application')
            {
                cy.wrap($el).click({force:true})
            }


        }
    )
})