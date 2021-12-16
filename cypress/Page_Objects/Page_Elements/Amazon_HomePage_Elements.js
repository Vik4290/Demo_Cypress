/// <reference types="cypress" />


const or = require("../../locators.json")

export default class Amazon_HomePage_Elements{

searchButton()
{
   return cy.get(or.homepage.searchBtn)

}
    
searchInput()
{
   return cy.get(or.homepage.searchInput)

}



}
