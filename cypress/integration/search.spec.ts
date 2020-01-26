describe('index page', () => {
  const query = 'what is testing?';

  beforeEach(() => {
    cy.visit(`http://localhost:3000/search?q=${query}`);
  });

  it('check typing', () => {
    cy.get('.searchInput').should('be.empty');
    cy.wait(1200 + query.length * 115);
    cy.get('.searchInput').should('have.value', query);
  });
});
