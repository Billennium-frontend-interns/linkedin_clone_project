describe('Smoke tests', () => {
  const environment = 'https://billennium-frontend-interns.github.io/linkedin_clone_project/#/linkedin_clone_project/';

  afterEach(() => {
    cy.logout();
  });

  it('Creating new user', () => {
    cy.visit(environment);
    cy.get('[data-testid="signUp"]').click();

    cy.get('[data-testid="email"]').type('gigamegaszef1233211PLL@wp.pl');
    cy.get('[data-testid="password"]').type('kubatogigaszef');
    cy.get('[data-testid="repeatPassword"]').type('kubatogigaszef');
    cy.get('[data-testid="name"]').type('kubatogigaszefPL');

    cy.get('[datatest-id="signup_button"]').click();

    cy.get('[data-testid="feedPageHeader"]').should('exist');
  });

  it('Loging to user account – happy path', () => {
    cy.visit(environment);

    cy.get('[data-testid="signIn"]').click();

    cy.get('[data-testid="email"]').type('gigamegaszef123@wp.pl');
    cy.get('[data-testid="password"]').type('kubatogigaszef');

    cy.get('[data-testid="signin_button"]').click();

    cy.get('[data-testid="feedPageHeader"]').should('exist');
  });

  it('Adding new field', () => {
    // ID: 03-a
    // Title: Adding new field
    // Environment: https://billennium-frontend-interns.github.io/linkedin_clone_project/#/linkedin_clone_project/
    // Hardware/software configuration: Windows 10, przegladarka chrome (ver. 1.15) / firefox
    // Entry data: User is logged in
    // Steps to perform:
    // 1. Go to view profile
    // 2. Press ADD FIELD button
    // 3. Fill Title field
    // 4. Fill next field
    // 5. Press CONFIRM
    // Acceptance criteria: User added new field
  });

  it('Adding another new field', () => {
    // ID: 03-b
    // Title: Adding another new field
    // Environment: https://billennium-frontend-interns.github.io/linkedin_clone_project/#/linkedin_clone_project/
    // Hardware/software configuration: Windows 10, przegladarka chrome (ver. 1.15) / firefox
    // Entry data: User is logged in
    // Steps to perform:
    // 1. Go to view profile
    // 2. Press ADD FIELD button
    // 3. Fill Title field
    // 4. Fill next field
    // 5. Press CONFIRM
    // 6. Press CONFIRM button again and again
    // Acceptance criteria: User added new field
  });
});
