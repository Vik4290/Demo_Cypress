/// <reference types="cypress" />

import Amazon_HomePage_Actions from '../../Page_Objects/Page_Actions/Amazon_HomePage_Actions'
import Amazon_Search_Actions from '../../Page_Objects/Page_Actions/Amazon_Search_Actions'



describe("Homepage_Testcases",()=>{

    const hpa = new Amazon_HomePage_Actions()
    const sspe = new Amazon_Search_Actions()

    before(()=>{

        cy.fixture('testdata').then((data)=>{

            globalThis.data = data
        
        })
    })

it("Navigate to URL - Load HomePage",()=>{

    hpa.navigateToURL()

})

it("Search - item",()=>{

    hpa.search(data.searchshoes)

})


it("Verify-Search Page",()=>{

    sspe.searchresult()
  })

it("Verify-Search Filter",()=>{
    sspe.SelectFilters()
  
})

it("Verify-Search result Count, Number of items shown in result must be equal to count",()=>{
    sspe.validate_SearchresultCount()
})

it("Verify-Search result w.r.t SORTING",()=>{
    sspe.verifysorting()
    sspe.VerifycartbeforeAdditem()
})

it("Verify-Add to cart",()=>{
    sspe.Addtocart()
})

})