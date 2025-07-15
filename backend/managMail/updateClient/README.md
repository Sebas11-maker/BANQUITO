
# updateClient Microservice

The `updateClient` microservice handles updating email-related information for clients.

## Functionality

This microservice allows users to update email information related to their client profiles.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd updateClient
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from updateClient import update_client_email

client_data = {
    "client_id": "12345",
    "new_email": "newemail@example.com"
}
update_client_email(client_data)
```

## Endpoints

- **PUT /updateClient**: Updates the email information of a client.
