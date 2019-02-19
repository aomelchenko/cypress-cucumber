Feature: UI tests

  Seach for user
  
  @focus
  Scenario: Search user by name
    Given Open OOS page
    When Search by partial name "gon"
    Then Single card with name "lloyd gonzalez" present

  @focus
  Scenario: Search user by city name
    Given Open OOS page
    When Search by partial city name "sheff"
    Then Single card with name "julia cunningham" present

  @focus
  Scenario: Move user to next stage
    Given Open OOS page
    When Move person with name "gonzalez" to next stage
    Then Card with name "lloyd gonzalez" present in Interviewing stage

  @focus
  Scenario: Move user to previous stage
    Given Open OOS page
    When Move person with name "julia" to previous stage
    Then Card with name "julia cunningham" present in Interviewing stage    