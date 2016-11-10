@wip

Feature: This feature will test the Schema Validation of a REST API

  Scenario: Verify the Schema validation of Rest API received
    Given I send the following parameter as a POST request
      | Parameter        | Value                |
      | registrationId   | 123456789            |
      | status           | Approved             |
      | registrationDate | 2016-10-24           |
      | processingDate   | 2016-10-25T09:30:47Z |
      | isActive         | true                 |
      | cost             | 100.75               |
    Then User should receive the following status code
      | Status Code | 200 |
    And User should receive following response body key and types
      | key              | type     |
      | registrationId   | int      |
      | status           | string   |
      | registrationDate | date     |
      | processingDate   | datetime |
      | isActive         | boolean  |
      | cost             | double   |
      | nullKey          | null     |
      |                  | object   |