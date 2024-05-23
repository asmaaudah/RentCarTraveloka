/// <reference types="cypress" />
import 'cypress-xpath';


describe('example to-do app', () => {
  beforeEach(() => {
   
    cy.visit('https://www.traveloka.com/en-id')
  })

  it.only('Verify Can Rent A Car', () => {
    const location = 'Jakarta'
    const dropoff = 'monas'

     
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
    
  })

})
