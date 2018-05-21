describe('First simple test', () => {
  it('should failed', () => {
    cy.visit('http://localhost:8080/')

    // Here we've made our first assertion using a '.should()' command.
    // An assertion is comprised of a chainer, subject, and optional value.

    // https://on.cypress.io/should
    // https://on.cypress.io/and

    // https://on.cypress.io/title
    cy.title().should('include', 'Vkudla')
  })
})