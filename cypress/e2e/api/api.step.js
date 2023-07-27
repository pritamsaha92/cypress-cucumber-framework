import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

  When('I made a GET call to {string}', async function (url) {
    cy.request(url).as('getcall');
  });
  
  Then('I verify the response code is {string}' , function (code) {
    cy.get('@getcall').should((response) => {
        expect(response.status).to.eq(parseInt(code));
      })
  });
  
  Then('I verify id {string}', (id) => {
    cy.get('@getcall').should((response) => {
        expect(response.body.data.id).to.equal(parseInt(id));
    })
  });

  And('I verify firstname {string}', (firstname) => {
    cy.get('@getcall').should((response) => {
        expect(response.body.data.first_name).to.equal(firstname);
    })
  });

  And('I verify lastname {string}', (lastname) => {
    cy.get('@getcall').should((response) => {
        expect(response.body.data.last_name).to.equal(lastname);
    })
  });

  And('I verify email {string}', (email) => {
    cy.get('@getcall').should((response) => {
        expect(response.body.data.email).to.equal(email);
    })
  });