
# saveClient Microservice

The `saveClient` microservice aims to save a new client's information into the database or management system.

## Functionality

This microservice accepts client details (such as name, email, etc.) and saves them into the system.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd saveClient
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from saveClient import save_client

client_data = {
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "address": "Fictional Street 123"
}
save_client(client_data)
```

## Endpoints

- **POST /client**: Receives client information and saves it into the database.
