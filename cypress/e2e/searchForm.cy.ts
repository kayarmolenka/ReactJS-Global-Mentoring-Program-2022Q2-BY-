import { cy } from 'local-cypress';

describe('App E2E', () => {
  it('should visit http://localhost:9100', () => {
    cy.visit('http://localhost:9100/');

    cy.url().should('include', '/search');
  });

  it('should redirect to movie with id of 181808 after input this id in search and click search button', () => {
    cy.get('input').should('have.value', '');

    cy.get('input').type('movie=:181808');
    cy.contains('Search').click();
  });
  it('should check the url includes id was filled in search input', () => {
    cy.url().should('include', '/movie=:181808');
  });
  it('should redirect to back after click on logo', () => {
    cy.contains('netflix').click();

    cy.url().should('include', '/search');
  });
});
