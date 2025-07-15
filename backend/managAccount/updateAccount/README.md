# updateAccount Microservice

## Description
This microservice updates the details of an existing account.

## Endpoint
- **URL**: `/updateAccount/{accountId}`
- **Method**: `PUT`

## Input
- `accountId` (Path parameter) - The ID of the account to be updated.
- A JSON object containing the updated account data.
  ```json
  {
    "name": "John Smith",
    "email": "john.smith@example.com"
  }
