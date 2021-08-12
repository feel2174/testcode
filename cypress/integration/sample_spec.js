// describe('My First Visit', () => {
//   it('finds the content "type"', () => {
//     cy.visit('https://example.cypress.io');
//     cy.contains('type').click();
//   });
// });

describe('My First Visit', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('type').click();

    cy.url().should('include', '/commands/action');

    cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com');
  });
});

// describe('My First Visit', () => {
//   it('clicking "type" navigates to a new url', () => {
//     cy.visit('https://tagamall.com');
//     cy.contains('오늘하루 열지않기').click();
//     cy.url().should('include', '/');
//     cy.contains('상품보기').click();
//     cy.url().should('include', '/items');
//   });
// });
