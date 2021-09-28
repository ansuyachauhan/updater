import  loginUser  from "../pages/loginUser";
import { waitDuration } from "../fixtures/timeouts";

context("Updater Offer Page Tests ", () => {
    beforeEach(() => {
      const availableOffers = `
      query availableOffers {
        offers {
          name,
          pricing{
            price
          }
          
          }
      }
      `;

      //ideally this would go under requests/graphqlRequest
      cy.request({
        method: "POST",
        url: 'https://api.staging.updater.com/graphql',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
        },
        body: { query: availableOffers},
      })
      
       
      })

    it("User can create an offer", () => {
       cy.visit("n/quick-setup");
   
      //Login manually
        loginUser.manualLoginToPage();
        cy.get("[data-name='step-title']",{timeout:waitDuration.long}).eq(0).click();
        cy.contains("Change plan",{timeout:waitDuration.extralong}).click();
        cy.get('button:contains("Select")',{timeout:waitDuration.extralong}).eq(1).click();
        cy.wait("@gqlAvailableOffers",{timeout:waitDuration.extralong}).then(gqlAvailableOffers=>{
          expect(gqlAvailableOffers.response.statusCode).to.eq(200);
         
          //Assertions goes here for gql call 
        })


    }); 
    
     
    
});