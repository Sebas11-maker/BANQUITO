
# update Microservice

The `update` microservice is responsible for updating an existing client's information in the system.

## Functionality

This microservice allows modifying a client's data in the system, such as name, email, address, etc.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd update
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from update import update_client

client_id = '12345'
new_data = {
    "name": "Juan Pérez",
    "email": "juan.perez@newemail.com"
}
update_client(client_id, new_data)
```

## Endpoints

- **PUT /client/{client_id}**: Updates the information of a specific client.
