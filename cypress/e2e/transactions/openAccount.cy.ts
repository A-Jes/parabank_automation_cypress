describe('Open New Account', () => {
  beforeEach(() => {
    cy.fixture('user').then((data) => {
        const user = data.validUser;

        cy.login(user.username, user.password);
    });
  });

  it('should open a new account', () => {

    cy.intercept('GET', '**/customers/**/accounts').as('getAccounts');
    cy.visit('/openaccount.htm');
    cy.wait('@getAccounts');
    cy.get('#type').select('SAVINGS'); 
    cy.get('#fromAccountId').select(0);
    cy.get('input[value="Open New Account"]').click();

    cy.contains('Account Opened!');
  });
});
