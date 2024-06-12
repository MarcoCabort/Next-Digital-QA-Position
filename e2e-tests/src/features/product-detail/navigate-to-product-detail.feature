Feature: Product Detail

Scenario: User can log in the webpage 
    Given a standard logged user that is in the products list page

    When the user clicks a product name
    Then the product detail page is diplayed correctly