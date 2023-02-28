import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import * as KeywordsPage from "../pages/keywords.po";

Given("I open the Ask2God search keyword page", function () {
  cy.visit('/search')
});

When("I verify the search keyword content", function () {
  cy.xpath(KeywordsPage.xclose).click()
  cy.xpath(KeywordsPage.searchBox).sendkeys("faith")
  cy.wait(1000)
  cy.xpath(KeywordsPage.faithCC).click()
  cy.get(KeywordsPage.searchButton).click()
});