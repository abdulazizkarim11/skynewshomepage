Feature: Sky News Main Page

  I want to be able to navigate and explore Sky News Homepage
  
  Scenario: explore Sky news homepage
    Given user navigates Sky news homepage
    Then expected "The Latest News from the UK and Around the World" is the title
    And click accept cookies
    And verify the number of categorise displayed
    And focus is on Home
    And change focus to climate
    And focus, verify and click on article in climate
    