# getAccount Microservice

## Description
This microservice retrieves the details of a specific account.

## Endpoint
- **URL**: `/getAccount/{accountId}`
- **Method**: `GET`

## Input
- `accountId` (Path parameter) - The unique identifier of the account.

## Output
- A JSON object containing the account details.
  ```json
  {
    "accountId": "12345",
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
