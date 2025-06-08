describe('Logout Flow', () => {
  it('should log the user out and restrict access afterward', () => {

    cy.fixture('user').then((data) => {
        const user = data.validUser;

        cy.login(user.username, user.password);
        cy.contains('Log Out').click();
        cy.url().should('include', 'index.htm');
        cy.visit('/transfer.htm', {failOnStatusCode: false});
        cy.contains('Customer Login');
    });
  });
});
