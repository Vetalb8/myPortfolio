describe('First simple test', () => {
  it('should have correct title', () => {
    cy.visit('http://localhost:8080/')

    // Here we've made our first assertion using a '.should()' command.
    // An assertion is comprised of a chainer, subject, and optional value.

    // https://on.cypress.io/should
    // https://on.cypress.io/and

    // https://on.cypress.io/title
    cy.title().should('include', 'Vkudla')
  })

  context('Welcome Section', () => {
    it('should include title, subtitle and contacts', () => {
      cy
        .get('.welcomeSection > .content').as('content')
        .children().should('have.length', 3)

      cy
        .get('.welcomeSection > .content > .title').should('have.text', 'Vitaliy Kudlo')
    })
  })
})