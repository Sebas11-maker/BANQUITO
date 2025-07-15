
# getClient Microservice

The `getClient` microservice allows retrieving detailed information about a client based on a provided client ID.

## Functionality

This microservice provides all the details associated with a client, such as name, email, address, etc.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd getClient
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from getClient import get_client

client_id = '12345'
client_info = get_client(client_id)
print(client_info)
```

## Endpoints

- **GET /client/{client_id}**: Returns detailed information about a specific client.
