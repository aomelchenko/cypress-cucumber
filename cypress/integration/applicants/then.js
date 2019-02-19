import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`Single card with name {string} present`, (name) => {
  cy.get('.CrewMember-container').should('contain', name)
})

Then(`Card with name {string} present in Interviewing stage`, (name) => {
  cy.get('.App-column:nth-of-type(2)').should('contain', name)
})