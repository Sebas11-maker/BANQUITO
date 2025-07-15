# internalTransaction Microservice

## Description
This microservice handles internal transactions between accounts within the system.

## Endpoint
- **URL**: `/internalTransaction`
- **Method**: `POST`

## Input
- A JSON object with the transaction details.
  ```json
  {
    "fromAccount": "12345",
    "toAccount": "12346",
    "amount": 100
  }
