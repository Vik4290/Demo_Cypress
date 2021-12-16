## **Cypress Amazon Assignment - Using Page Object Model**

This assignment demonstrate to automate Amazon Shopping website using cypress backed by 'Page Object Model'.  

## Automation Framework Overview

A brief about the project repository structure:
  - **fixtures:** contains testdata required in Testscripts. Here you can save testdata in json format and can call in Test Scripts using fixtures.
  - **integration/Testcases:** contains actual testcases created for Amazon website execute using mocha and chai annotations. 
  - **Page_objects:** contains Page Actions and Page Elements.
     - **Page Actions:** Consist of all the actions done by user on Amazon website. Called Webelements with the help of Page Elements class. Each application page have its 
                         own Page action class. 
     - **Page Elements:** Page Element class consist of methods that return Web element locators (xpath/CSS). Each Application page have their Web Element page class. Same web 
                          element class will be called in corresponding action class. Page Element class interact with Locators.json to get webelement values.
  - **Locators:** Locators is json file which consist of WebElement locators. This class values are used by Page Element class. 
  - **cypress.json:** Consist of some global parameters values that is used by cypress Testscripts.
  - **package.json:** Consist of all the dependencies that are required to support this script.

## Instructions to setup project and Run tests locally

  - Precondition:
      - Cypress must be installed on client machine.
      - Node.js and npm must be installed on client machine.
- Clone the repository: `git@github.com:Vik4290/Demo_Cypress.git`
- Open the code in VS Code.
- Navigate to directory where Package.json exist. Run the command npm install to install all the dependencies. 
- Run the test using command npx cypress open.
- Once the cypress dashboard opens up then select the test which you want to run.
- Execution will start on the screen.

