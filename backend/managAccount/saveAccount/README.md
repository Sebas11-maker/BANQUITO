# saveAccount Microservice

## Description
This microservice saves a new account to the system.

## Endpoint
- **URL**: `/saveAccount`
- **Method**: `POST`

## Input
- A JSON object containing the account data.
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890"
  }
