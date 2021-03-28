import homePageObjects from "../skynewshomepage/objects/homePageObjects"
import climatePageObjects from "../skynewshomepage/objects/climatePageObjects"
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps"
const homePage = new homePageObjects()
const climatePage = new climatePageObjects()


Given('user navigates Sky news homepage', () => {
  cy.visit(Cypress.env('baseUrl'))
})

Then(`expected {string} is the title`, (title) => {
    cy.title().should('include', title)
  })

And('click accept cookies', () =>{
  cy.get(homePage.acceptCookies).then ( function($ele){

    let iele = $ele.contents().find('[aria-label="Accept"]')
    cy.wrap(iele).click()
})


And('verify the number of categorise displayed', () =>{
  cy.get(homePage.menuCategory).find('[data-role="main-nav-item"]')
  .its('length')
  .should('eq',15)
  })


And('focus is on Home', () =>{
  cy.get(homePage.menuCategory).find('[aria-current="true"]')
  cy.contains('Home')
})

And('change focus to climate', () =>{
  cy.get(homePage.menuCategory).find('[aria-current="true"]')
  cy.contains('Climate')
  .click()

})

And('focus, verify and click on article in climate',() =>{
  cy.get(climatePage.focusClimateArticle).then((article) =>{
    const title = article.text()
    cy.log(title,'one')
    .click({force:true})
    cy.get(climatePage.climateText).then((textTitle) =>{
      const articleTitle = textTitle.text()
      expect(title).to.equal(articleTitle)
    })

  })
})






})


