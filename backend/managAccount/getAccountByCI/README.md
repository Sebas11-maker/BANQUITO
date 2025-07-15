# getAccountByCI Microservice

## Description
This microservice retrieves account details using a specific CI (ID) number.

## Endpoint
- **URL**: `/getAccountByCI/{ciNumber}`
- **Method**: `GET`

## Input
- `ciNumber` (Path parameter) - The unique CI number of the account.

## Output
- A JSON object containing the account details.
  ```json
  {
    "accountId": "12345",
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
