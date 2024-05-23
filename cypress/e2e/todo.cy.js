/// <reference types="cypress" />
import 'cypress-xpath';
// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://www.traveloka.com/en-id')
  })

  it.only('Select Cars Product', () => {
    const location = 'Jakarta'
    const dropoff = 'monas'
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
     
    cy.get('[data-testid="product-pill-Car Rental"]').should("be.visible")
    cy.get('[data-testid="product-pill-Car Rental"]').click({force: true})
    cy.get('.r-1e081e0.r-136ojw6 > :nth-child(1) > :nth-child(1) > .r-1h84pjw').click({force: true})
    cy.get('[data-testid="rental-search-form-location-input"]').click({force: true})
    cy.get('[data-testid="rental-search-form-location-input"]').type(`${location}`)
    cy.wait(100)
    cy.get('[aria-label="Jakarta"]').click({force: true})
    cy.get('[data-testid="rental-search-form-date-input-start"]').click({force: true})
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .r-1wh2hl7 > .r-edyy15 > :nth-child(1) > [data-testid="mds-calendar"] > [style="width: 656px;"] > :nth-child(1) > :nth-child(1) > [data-year="2024"] > .r-c0cves > :nth-child(27) > [data-testid="date-cell-25-5-2024"] > :nth-child(1) > .r-18u37iz > .r-1awozwy > .css-901oao').click({force: true})
    cy.get('[data-testid="rental-search-form-time-input-start"]').click({force: true})
    cy.get('.r-150rngu > :nth-child(1) > :nth-child(8) > .css-901oao').click({force: true})
    cy.get(':nth-child(3) > .r-1l31rp8 > .r-150rngu > :nth-child(1) > .r-391gc0 > .css-901oao').click({force: true})
    cy.get('[data-testid="rental-search-form-date-input-end"]').click({force: true})
    cy.get(':nth-child(7) > :nth-child(1) > :nth-child(2) > .r-1wh2hl7 > .r-edyy15 > :nth-child(1) > [data-testid="mds-calendar"] > [style="width: 656px;"] > :nth-child(1) > :nth-child(1) > [data-year="2024"] > .r-c0cves > :nth-child(28) > [data-testid="date-cell-26-5-2024"] > :nth-child(1) > .r-18u37iz > .r-1awozwy > .css-901oao').click({force: true})
    cy.get('[data-testid="rental-search-form-time-input-end"]').click({force: true})
    cy.get('.r-150rngu > :nth-child(1) > :nth-child(6) > .css-901oao').click({force: true})
    cy.get(':nth-child(3) > .r-1l31rp8 > .r-150rngu > :nth-child(1) > :nth-child(2) > .css-901oao').click({force: true})
    cy.get('.r-y46g1k > .css-18t94o4 > .css-1dbjc4n > .css-901oao').click({force: true})
    cy.get('[data-testid="rental-search-form-cta"] > .css-1dbjc4n').click({force: true})
    cy.wait(100)
    cy.get(':nth-child(4) > .r-14lw9ot > .r-ymttw5 > .r-obd0qt > .r-173mn98 > .css-18t94o4 > .css-1dbjc4n > .css-901oao').click({force: true})
    cy.get(':nth-child(5) > .r-nsbfu8 > .r-13awgt0.r-17s6mgv > .r-1wzrnnt > .css-18t94o4 > .css-1dbjc4n > .css-901oao').click({force: true})
    cy.get('#RENTAL_PICKUP_LOCATION > .r-1ifxtd0').scrollIntoView()
    cy.xpath('/html/body/div[1]/div/div[5]/div/div[1]/div/div[3]/div[1]/div/div/div[3]/div[1]/div[2]/div/div/div[1]/div/div[1]').click({force: true})
    cy.get('.r-mgfd1o > img').click({force: true})
    cy.get('.r-13awgt0 > .r-1loqt21 > .r-18u37iz > .r-1awozwy.r-1472mwg > .r-1awozwy > .r-1naam9t').click({force: true})
    cy.xpath('/html/body/div[1]/div/div[5]/div/div[1]/div/div[3]/div[2]/div/div/div[5]/div[1]/div[2]/div/div/div[1]/div/div[1]').click({force: true})
    cy.get('[style="max-height: 97px;"] > .r-391gc0 > .r-184en5c > :nth-child(2) > :nth-child(1) > .r-u4s1nx > .css-11aywtz').click({force: true})
    cy.get('[style="max-height: 97px;"] > .r-391gc0 > .r-184en5c > :nth-child(2) > :nth-child(1) > .r-u4s1nx > .css-11aywtz').type(`${dropoff}`)
    cy.contains('National Monument').click({force: true})
    cy.get('.r-14qw7yl > :nth-child(1) > .css-18t94o4').click({force: true})
    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    // cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    // cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })

  it('Select tab Without Driver', () => {
    // We'll store our item text in a variable so we can reuse it
    const newItem = 'Jakarta'

    // Let's get the input element and use the `type` command to
    // input our new list item. After typing the content of our item,
    // we need to type the enter key as well in order to submit the input.
    // This input has a data-test attribute so we'll use that to select the
    // element in accordance with best practices:
    // https://on.cypress.io/selecting-elements
    cy.get('.r-1e081e0.r-136ojw6 > :nth-child(1) > :nth-child(1) > .r-1h84pjw').click()
    
    cy.get('[data-testid="rental-search-form-location-input"]').click()
    cy.get('[data-testid="rental-search-form-location-input"]').type(`${newItem}{enter}`)
    // Now that we've typed our new item, let's check that it actually was added to the list.
    // Since it's the newest item, it should exist as the last element in the list.
    // In addition, with the two default items, we should have a total of 3 elements in the list.
    // Since assertions yield the element that was asserted on,
    // we can chain both of these assertions together into a single statement.
    cy.get('.todo-list li')
      .should('have.length', 3)
      .last()
      .should('have.text', newItem)
  })

  it('can check off an item as completed', () => {
    // In addition to using the `get` command to get an element by selector,
    // we can also use the `contains` command to get an element by its contents.
    // However, this will yield the <label>, which is lowest-level element that contains the text.
    // In order to check the item, we'll find the <input> element for this <label>
    // by traversing up the dom to the parent element. From there, we can `find`
    // the child checkbox <input> element and use the `check` command to check it.
    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()

    // Now that we've checked the button, we can go ahead and make sure
    // that the list element is now marked as completed.
    // Again we'll use `contains` to find the <label> element and then use the `parents` command
    // to traverse multiple levels up the dom until we find the corresponding <li> element.
    // Once we get that element, we can assert that it has the completed class.
    cy.contains('Pay electric bill')
      .parents('li')
      .should('have.class', 'completed')
  })

  context('with a checked task', () => {
    beforeEach(() => {
      // We'll take the command we used above to check off an element
      // Since we want to perform multiple tests that start with checking
      // one element, we put it in the beforeEach hook
      // so that it runs at the start of every test.
      cy.contains('Pay electric bill')
        .parent()
        .find('input[type=checkbox]')
        .check()
    })

    it('can filter for uncompleted tasks', () => {
      // We'll click on the "active" button in order to
      // display only incomplete items
      cy.contains('Active').click()

      // After filtering, we can assert that there is only the one
      // incomplete item in the list.
      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Walk the dog')

      // For good measure, let's also assert that the task we checked off
      // does not exist on the page.
      cy.contains('Pay electric bill').should('not.exist')
    })

    it('can filter for completed tasks', () => {
      // We can perform similar steps as the test above to ensure
      // that only completed tasks are shown
      cy.contains('Completed').click()

      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Pay electric bill')

      cy.contains('Walk the dog').should('not.exist')
    })

    it('can delete all completed tasks', () => {
      // First, let's click the "Clear completed" button
      // `contains` is actually serving two purposes here.
      // First, it's ensuring that the button exists within the dom.
      // This button only appears when at least one task is checked
      // so this command is implicitly verifying that it does exist.
      // Second, it selects the button so we can click it.
      cy.contains('Clear completed').click()

      // Then we can make sure that there is only one element
      // in the list and our element does not exist
      cy.get('.todo-list li')
        .should('have.length', 1)
        .should('not.have.text', 'Pay electric bill')

      // Finally, make sure that the clear button no longer exists.
      cy.contains('Clear completed').should('not.exist')
    })
  })
})
