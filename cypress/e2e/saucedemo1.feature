Feature: Login to Saucedemo Website 1

  @smoke
  Scenario Outline: Login to Sauce Demo with multiple user
    Given I navigate to website "https://www.saucedemo.com/"
    When I enter username <username>
    And I enter password <password>
    And I click on login button
    Then I verify successful login

    Examples:
      | username                | password     |
      | standard_user           | secret_sauce |
      | performance_glitch_user | secret_sauce |