
describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {
    cy.log("lunch url")
    cy.visit("/",{timeout:60000})
    cy.get('#nav-logo-sprites').screenshot("logo")
    cy.reload()
    // cy.wait(60000)
    cy.url().should('include','amazon')
    cy.get('#nav-xshop>a').should('have.length',28)

    cy.get('#twotabsearchtextbox',{timeout:500}).should('be.visible')
    cy.get('#twotabsearchtextbox').type("books")


    cy.screenshot("homepage")
// cy.pause()
    cy.get('#nav-search-submit-button').click()
    cy.get('#twotabsearchtextbox').click()
    // headers validation
cy.get('#nav-xshop>a').should('have.length',28)

cy.log("end test")

})

it('My 2nd case',function() {
    cy.visit("/",{timeout:60000})
    cy.contains("Pet Supplies").should('have.length',1)
    cy.contains("Pet Supplies").click({force:true})

})

it('My 3rd case',function() {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit("http://zero.webappsecurity.com/",{timeout:60000})
    cy.get('#signin_button').click()
    cy.get('#user_remember_me').check()
   
    cy.get('#user_remember_me').uncheck()
    cy.get('#user_login').as("usertext")
    cy.get('@usertext').type("username")
    cy.get('@usertext').clear()
    cy.get('@usertext').type("username",{delay:1000})
    cy.get('#user_password').type("password")
    cy.get('.btn').click()
    

})

it('My 4rd case Device 720 p',function() {

    cy.viewport(1280,720)

    cy.visit("http://zero.webappsecurity.com/",{timeout:60000})


})
it('My 4rd case Device iPhonex',function() {

    cy.viewport('macbook-16')

    cy.visit("http://zero.webappsecurity.com/",{timeout:60000})


})
it.only('My 4rd case ',function() {

    cy.viewport('macbook-16')

    cy.visit("http://zero.webappsecurity.com/",{timeout:60000})


})


})


