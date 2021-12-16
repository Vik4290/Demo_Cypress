/// <reference types="cypress" />


const or = require("../../locators.json")

export default class Search_ShoePage_Elements{

    searchResultTitle()
    {
       return cy.get(or.searchresults.shoeResult)
    }

    selectBrand(brand)
    {
       if(brand='Adidas')
       {
        return cy.get(or.brandfilter.Adidas)

       }
       
    }
    selectPricing()
    {
        return cy.get(or.pricefilter.pricing_2500_5000)
  
    }
    selectSize()
    {
        return cy.get(or.size.size_8)
  
    }
    sortdropdown()
    {
        return cy.get(or.sortby.dropdown)
    }
    sortby()
    {
        return cy.get(or.sortby.low_to_high)
    }
    searchsection()
    {
        return cy.get(or.resultcount.searchsection)
    }  
    searcharea1()
    {
        return cy.get(or.resultcount.searcharea1)
    }  
    searcharea2()
    {
        return or.resultcount.searcharea2
    }  
    searchcount()
    {
        return cy.get(or.resultcount.searchcount)
    }  
    item1price()
    {
        return cy.get(or.verifysorting.item1price)
    }
    item2price()
    {
        return cy.get(or.verifysorting.item2price)
    }
    Navigatetocart()
    {
        return cy.get(or.Addtocart.Navigatetocart)
    }
    searchitemclick()
    {
        return cy.get(or.Addtocart.searchitemclick)
    }
    title()
    {
        return cy.get(or.Addtocart.title)
    }
    selectsizedropdown()
    {
        return cy.get(or.Addtocart.selectsizedropdown)
    }
    Addcart()
    {
        return cy.get(or.Addtocart.Addcart)
    }
    cartitemcheck()
    {
        return cy.get(or.Addtocart.cartitemcheck)
    }

    







}