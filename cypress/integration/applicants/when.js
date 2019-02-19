import { When } from "cypress-cucumber-preprocessor/steps";

When(`Search by partial name {string}`, (name) => {
  cy.get('#name')
      .type(name).should('have.value', name)

    cy.get('[type=submit]').click()
})

When(`Search by partial city name {string}`, (cityName) => {
  cy.get('#city')
      .type(cityName).should('have.value', cityName)

    cy.get('[type=submit]').click()
})

When(`Move person with name {string} to next stage`, (name) => {
  cy.get('.CrewMember-container')
  .filter(':contains("' + name + '")')
  .contains(">")
  .click()
})

When(`Move person with name {string} to previous stage`, (name) => {
  cy.get('.CrewMember-container')
  .filter(':contains("' + name + '")')
  .contains("<")
  .click()
})