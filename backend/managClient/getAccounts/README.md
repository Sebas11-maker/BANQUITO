
# getAccounts Microservice

The `getAccounts` microservice aims to retrieve accounts associated with a client based on a provided client ID.

## Functionality

This microservice accepts a client ID and returns all the accounts associated with that client. It's useful for quickly and efficiently retrieving account information of a client.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd getAccounts
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from getAccounts import get_accounts

client_id = '12345'
accounts = get_accounts(client_id)
print(accounts)
```

## Endpoints

- **GET /accounts/{client_id}**: Returns the accounts associated with a specific client.
