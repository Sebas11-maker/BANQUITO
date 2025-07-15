
# validateID Microservice

The `validateID` microservice is responsible for validating the authenticity of a client ID.

## Functionality

This microservice verifies whether a provided client ID is valid and belongs to a registered client in the system.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd validateID
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from validateID import validate_id

client_id = '12345'
valid = validate_id(client_id)
print("ID valid:", valid)
```

## Endpoints

- **GET /validate/{client_id}**: Verifies whether a client ID is valid.
