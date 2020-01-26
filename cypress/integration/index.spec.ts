describe('index page', () => {
  const query = 'what is testing?';
  const link = 'http://localhost:3000/search?q=what%20is%20testing?';

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('focuses', () => {
    cy.get('.searchInput').focus();
    cy.get('.searchBar').should('have.class', 'searchBarFocused');
  });

  it('types', () => {
    cy.get('.searchInput').type(query).should('have.value', query);
  });

  it('copies link', () => {
    cy.get('.searchInput').type(query);
    cy.get('.button[value="Get Link"]').click();
    cy.task('getClipboard').should('be', link);
  });

  it('shows preview', () => {
    cy.get('.searchInput').type(query);
    cy.get('.button[value="Preview"]').click();
    cy.url().should('be', link);
  });
});
