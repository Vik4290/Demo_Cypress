/// <reference types="cypress" />
import Amazon_HomePage_Elements from '../Page_Elements/Amazon_HomePage_Elements'


export default class Amazon_HomePage_Actions{

  constructor()
  {
    globalThis.hp = new Amazon_HomePage_Elements()

  }

    navigateToURL()
    {
        cy.visit('/')
    }

    validateTitle()
    {
        return cy.title()
    }

    search(option)
    {
       hp.searchInput().click()
       hp.searchInput().type(option)
       cy.wait(3000)
       //cy.get('#issDiv1').click()
       hp.searchButton().click()
      
         }

}