const user = Cypress.env('CREDENTIALS')
describe('User Login', () => {
  it('logs in with valid credentials', () => {

   

        cy.login(user.username, user.password); // Replace with a real user created in register test
        cy.contains('Accounts Overview').should('be.visible');
  });

  it('fails with incorrect credentials', () => {

    cy.fixture('user').then((data) => {
        const user = data.invalidUser;
        
        cy.login(user.username, user.password);
        cy.contains('The username and password could not be verified.').should('be.visible');
    });
  });
});
