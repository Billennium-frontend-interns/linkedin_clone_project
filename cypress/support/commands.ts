Cypress.Commands.add('logout', () => {
  cy.get('[data-testid="navigationHeaderDropdownOpener"]').eq(1).click();
  cy.get('[data-testid="undefinedSignOut"]').click();
});
