/// <reference types="cypress" />

import Search_ShoePage_Elements from '../Page_Elements/Search_ShoePage_Elements'


export default class Amazon_Search_Actions{

  
  constructor()
  {
    globalThis.spe = new Search_ShoePage_Elements()

  }


    searchresult()
    {      
       spe.searchResultTitle().invoke('text').then((text6)=>{
       expect(text6).to.include('Adidas')
    }
    )}

      SelectFilters()
      {
       spe.selectBrand('Adidas').click()
       spe.selectPricing().click()
     
       //Verifying title again tp ensure after selecting filter Adidas search criteria must retained
       spe.searchResultTitle().should('contain.text','Adidas Shoes')
       cy.wait(2000)
       spe.selectSize().click()
       spe.sortdropdown().click()
       cy.wait(1000)
       spe.sortby().click()       
      }

      validate_SearchresultCount()
      {
          cy.wait(3000)
          spe.searcharea1().find(spe.searcharea2()).its('length').then((elelength)=> {
          spe.searchcount().should('contain', elelength)
       })
       }

      verifysorting()
      {
      var n;
      var n1;
      //Get Price of 1st item in search to compare price of last item in Search list
      spe.item1price().invoke('text').then((text1)=> {
      cy.log(text1)
      var res = text1.replace(/,/g, "");
      n = parseInt(res);  
      cy.log('----------------')
      cy.log(n)
     })

        //Get Price of last item in search to compare with price of 1st item in Search list    
        spe.item2price().invoke('text').then((text2)=> {
        cy.log(text2)
        var res = text2.replace(/,/g, "");
        n1 = parseInt(res);  
        cy.log('----------------')
        cy.log(n1)
        expect(n1).to.be.greaterThan(n)

  })
}

VerifycartbeforeAdditem()
{
  
  spe.Navigatetocart().invoke('text').then((text4)=>{
  cy.log(text4)
  expect(text4).to.include(0)
})
}
Addtocart()
{
 spe.searchitemclick().invoke('removeAttr','target').click()
 spe.title().invoke('text').then((text3)=> {
 cy.log(text3)
 expect(text3).to.include('Adidas')
})


spe.selectsizedropdown().select('8 UK')
cy.wait(3000)
spe.Addcart().click()

  spe.Navigatetocart().invoke('text').then((text4)=>{
  cy.log(text4)
  expect(text4).to.include(1)
  cy.wait(5000)
  spe.Navigatetocart().click() 
})

cy.get('.a-truncate-cut').invoke('text').then((text5)=>
{
  cy.log(text5)
  expect(text5).to.include('Adidas')

})

}

}