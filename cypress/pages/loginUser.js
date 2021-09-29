import { waitDuration } from "../fixtures/timeouts";



const loginUserPage={
    manualLoginToPage()
    {
        cy.get("[name='email']",{timeout:waitDuration.normal}).click().clear().type("janekim@gmail.com");
        cy.get("[name='password']",{timeout:waitDuration.normal}).click().clear().type("password1");
        cy.contains("Sign In",{timeout:waitDuration.normal}).click();
       
    }
}

export default loginUserPage;