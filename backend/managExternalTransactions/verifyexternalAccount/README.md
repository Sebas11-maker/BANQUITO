
# verifyexternalAccount Microservice

The `verifyexternalAccount` microservice is responsible for verifying the authenticity and validity of external accounts.

## Functionality

This microservice ensures that external account information is legitimate and valid by performing checks and validations.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd verifyexternalAccount
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from verifyexternalAccount import verify_account

account_id = 'external_account_12345'
is_valid = verify_account(account_id)
print("Account is valid:", is_valid)
```

## Endpoints

- **GET /verifyAccount/{account_id}**: Verifies if an external account is valid.
