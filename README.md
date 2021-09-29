# README

- Clone this repo in local (git clone)
- run npm install
- Command to  Execute Test:
  
  npx cypress run --spec "cypress/integration/offers.spec.js"
  
  Questions we want you to answer:
  
● Why did you choose this testing strategy to test the above scenario?
 The implemented testing strategy allows to verify UI user actions as well as data verification. Most of the elements didn't have data-attributes so you would see contains() being used in the test to select elements. Added graphql response verificaiotn with UI to validate correct data is being rendered

● Why did you choose the particular framework you used? Are there drawbacks to it?
   Setting up cypress is very quick and  Writing time for tests in Cypress frmework is lower compared to other frameworks, Also this the same framwork I use at my   
   current workplace.
   It can be integrated with any CI tool equipped for headless execution with command-line options.
   It captures screenshots of test execution automatically in case of test failure. This is helpful to diagnose bugs and debug. Cypress don't support some browsers   such as IE.
   
● What is your strategy to integrate this to a CI/CD pipeline?

 I would like to cover all critical path tests in Cypress framework. Frequent user actions taken on the web application, any high risk bugs etc will be automated 
 and added to this framework. This solid regression test suite would be run on each PR across all other systems to cover any impact.
 The check for the regression test suite will be required meaning unless it passes, no code can be merged(This is a collabrative process the team has to go through,
 the first step would be to have reliable and stable regression test suite). If possible all the test needs to be run in prallell. cypress dashboard comes with paid
 version.
 
● How does your approach scale as the number of test cases grow and how easy will
it be to maintain as feature and business requirements change?
 When tests are added to this framwork they have to be stable as well otherwise cost to maintain this framework could get higher. I still think compared to other 
 framworks i have worked in the past, this can still be less expensive from my experience. 
 there can be some maintainance ,I would keep an aduit every month/quarter for that
 Test can only be added when it adds a value, meaninng i would not have exhustive automation testing. example some Text , lable checks etc

● What additional testing approaches/methodologies would you use given the time
and resources?
I would  like to add Accessibility testing in the same framework.  The end goal is to build a reliable regression test which give a very good coverage and runs on every PR across all the apps. 
