Feature: Dummy API Scenario

  @api
  Scenario: Get Call to list of users
    When I made a GET call to "https://reqres.in/api/users"
    Then I verify the response code is "200"

  @api
  Scenario: Get Call to single
    When I made a GET call to "https://reqres.in/api/users/3"
    Then I verify id "3"
    And I verify firstname "Emma"
    And I verify lastname "Wong"
    And I verify email "emma.wong@reqres.in"