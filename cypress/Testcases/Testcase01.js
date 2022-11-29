/// <reference types="cypress" />

describe('My First Test', function() {

    it('Visits the Kitchen Sink', () => {
      cy.visit('www.amazon.com')
      cy.get('#twotabsearchtextbox').type("BOOKS")
      cy.get('#nav-search-submit-button').click()
    

    })
  })
