import { waitDuration } from "../fixtures/timeouts";



const loginUserPage={
    manualLoginToPage()
    {
        cy.get("[name='email']",{timeout:waitDuration.normal}).click().clear().type("sdet5+assessment@updater.com");
        cy.get("[name='password']",{timeout:waitDuration.normal}).click().clear().type("a123456");
        cy.contains("Sign In",{timeout:waitDuration.normal}).click();
        cy.contains("Welcome, SDET!",{timeout:waitDuration.long}).should("be.visible");
    }
}

export default loginUserPage;