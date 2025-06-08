describe('Transfer Funds', () => {
    beforeEach(() => {
    cy.fixture('user').then((data) => {
        const user = data.validUser;

        cy.login(user.username, user.password);
    });
  });

  it('should transfer funds successfully between accounts', () => {
    cy.visit('/transfer.htm');
    cy.get('#amount').type('100');
    cy.get('#fromAccountId').select(0);
    cy.get('#toAccountId').select(1);
    cy.get('input[value="Transfer"]').click();

    cy.contains('Transfer Complete!');
  });
});
