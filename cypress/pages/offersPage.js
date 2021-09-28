import { waitDuration } from "../fixtures/timeouts";



const offersPage={
    landOnOffersPage()
    {
        cy.contains("New service",{timeout:waitDuration.extralong}).click();
        cy.contains("Just me",{timeout:waitDuration.extralong}).click();
        cy.contains("Email and browsing the web",{timeout:waitDuration.extralong}).click();
        cy.contains("Next",{timeout:waitDuration.extralong}).click();
        cy.contains("Yes",{timeout:waitDuration.extralong}).click();
        cy.contains("Local TV",{timeout:waitDuration.extralong}).click();
        cy.contains("Next",{timeout:waitDuration.extralong}).click();
        cy.get("[name='not_needed']",{timeout:waitDuration.extralong}).click({force:true});
        
        
    }
}

export default offersPage;