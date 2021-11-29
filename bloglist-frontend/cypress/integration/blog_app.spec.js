describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = { name: 'Dave Testman', username: 'dave', password: '1234' }
    cy.request('POST', 'http://localhost:3003/api/users', user)
    cy.visit('http://localhost:3000')
  })

  it('Login form is show', function () {
    cy.contains('log in')
  })

  describe('Login', function () {
    it('suceeds with correct credentials', function () {
      cy.get('#username').type('dave')
      cy.get('#password').type('1234')
      cy.contains('log in').click()
      cy.contains('Dave Testman is logged in')
    })
    it('fails with incorrect credentials', function () {
      cy.get('#username').type('dave')
      cy.get('#password').type('999999999')
      cy.contains('log in').click()
      cy.contains('Invalid username or password')
    })
  })
})
