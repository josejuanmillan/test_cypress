
describe('template spec', () => {
  it('agregar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Comprar el pan{enter}")
  })


  

  it('marcar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
  })



  it('desmarcar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()
  })
 

  it('editar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Comprar agua{enter}")
    cy.get('.view > label').dblclick().type
  })







})
