import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import SauceDemo from "../../pom/saucedemo.page";

const page = new SauceDemo();

Given('I navigate to website {string}', function (url) {
  cy.visit(url);
});

When(/^I enter username (.+)$/, function (username) {
  page.enterUsername(username);
});

When(/^I enter password (.+)$/, function (password) {
  page.enterPassword(password);
});

When('I click on login button', function () {
  page.clickLogin();
});

Then('I verify successful login', function () {
  page.verifyLogin();
});