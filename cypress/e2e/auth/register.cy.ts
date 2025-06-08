describe('User Registration', () => {
  it('should register a new user successfully', () => {
    cy.visit('/register.htm');

    cy.fixture('user').then((data) => {
        const user = data.validUser;
        
        const username = 'ajonu' + Date.now();
        
        cy.get('#customer\\.firstName').type(user.firstName); 
        cy.get('#customer\\.lastName').type(user.lastName);
        cy.get('#customer\\.address\\.street').type(user.address);
        cy.get('#customer\\.address\\.city').type(user.city);
        cy.get('#customer\\.address\\.state').type(user.state);
        cy.get('#customer\\.address\\.zipCode').type(user.zipCode);
        cy.get('input[name="customer.phoneNumber"]').type(user.phone);
        cy.get('input[name="customer.ssn"]').type(user.ssn);
        cy.get('#customer\\.username').type(username);
        cy.get('#customer\\.password').type(user.password);
        cy.get('#repeatedPassword').type(user.password);
        cy.get('input[value="Register"]').click();
        
        cy.contains('Your account was created successfully. You are now logged in.');
    });
  });
});
