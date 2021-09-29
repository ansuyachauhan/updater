import  loginUser  from "../pages/loginUser";
import { waitDuration } from "../fixtures/timeouts";
import {removeNonNumbers} from "../fixtures/commonFunctions"
import availableOffersgql from "../requests/graphqlRequest"
import offersPage from "../pages/offersPage"

context("Updater Offers Page Tests ", () => {
    beforeEach(() => {
      //intercepting graphql request where query matches with avaiableOffers
      availableOffersgql();
      })

    it("User can create an offer", () => {
       cy.visit("n/quick-setup");
   
        //Login 
        loginUser.manualLoginToPage();

        //Click on Set up Internet/TV
        cy.get("[data-name='step-title']",{timeout:waitDuration.long}).eq(0).click();
        
        //land of offers page
        offersPage.landOnOffersPage();
       
        //two assertions for first offer details ,mainly verifying price and the package name, could add more 
        cy.wait("@gqlAvailableOffers",{timeout:waitDuration.extralong}).then(gqlAvailableOffers=>{

          expect(gqlAvailableOffers.response.statusCode).to.eq(200);
          
          cy.get('*[class^="OfferPrice_dollars"]').eq(0).invoke("text").as("offerPriceDollars").then(offerPriceDollars=>{
            const firstOffer=  gqlAvailableOffers.response.body.data.availableOffers.offers[0];
            const uiFirstOfferPrice =parseInt(removeNonNumbers(offerPriceDollars));
             expect(parseFloat(uiFirstOfferPrice/100)).to.equal(firstOffer.pricing.price);
             cy.get('*[class^="uds-title-2"]').eq(3).invoke("text").as("offerName").then(offerName => {
              expect(firstOffer.name).contains(offerName);
            });
            
          });

        })
     }); 
});