/// <reference types="cypress" />

import Amazon_HomePage_Actions from '../../Page_Objects/Page_Actions/Amazon_HomePage_Actions'


describe("Homepage_Testcases",()=>{

    const hpa = new Amazon_HomePage_Actions()

    before(()=>{

        cy.fixture('testdata').then((data)=>{

            globalThis.data = data
        
        })
    })

it("Navigate to URL - Load HomePage",()=>{

    hpa.navigateToURL()

})

it("Validate Page Title must be Amazon",()=>{

    hpa.validateTitle().should('include', 'Amazon')
        
}) 


it("Search - item",()=>{

    hpa.search(data.searchshoes)

})






})