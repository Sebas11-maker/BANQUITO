# getAccountAll Microservice

## Description
This microservice retrieves the details of all accounts in the system.

## Endpoint
- **URL**: `/getAccountAll`
- **Method**: `GET`

## Input
- No input parameters required.

## Output
- A JSON array containing the details of all accounts.
  ```json
  [
    {
      "accountId": "12345",
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    {
      "accountId": "12346",
      "name": "Jane Doe",
      "email": "jane.doe@example.com"
    }
  ]
