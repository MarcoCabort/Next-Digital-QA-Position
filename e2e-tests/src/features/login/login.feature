Feature: User Authentication

Scenario: User can log in the webpage 
    Given a user that is in the login page
    
    When the user introduce the standard user username
    And the user introduce the correct password 
    And the user clicks the Login button
    
    Then the main page is diplayed correctly
