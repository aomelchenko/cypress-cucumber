import { Given } from "cypress-cucumber-preprocessor/steps";

Given('Open OOS page', () => {
  cy.visit(Cypress.env('URL'))
})